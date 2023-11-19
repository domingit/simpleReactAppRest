import React, { useEffect, useState } from 'react';
import api from '../../services/ApiService';
import { Dog, DogType } from 'src/assets/models/interfaces/pages';
import { 
    FormControl,
    InputLabel,
    Input,
    IconButton,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MainDescription from '../../components/MainDescription/MainDescription';
import DogDetailItem from './Dog';
import CustomExpandIcon from '../../components/CustomExpandIcon/CustomExpandIcon';
import { normalizeNDF } from '../../utils/normalize';

interface IProps {}

const Home: React.FC<IProps> = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const [activePosition, setActivePosition] = useState<number | null>(null);
  const [dogList, setDogList] = useState<Dog[]>([]);
  const [filteredDogList, setFilteredDogs] = useState<Dog[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const mainTitle = 'Dog breed DB';
  const other = 'Something other';
  const filterTitle = 'Filter by breed name';
  const filterPlaceholder = "Breed name";

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
        try {
            api.get<DogType[]>('/breeds').then((response) => {
                setDogList(response);
                setFilteredDogs(response.slice(0, 10));
            }).finally(() => { setLoading(false); setIsInitialized(true)})
        } catch (error) {
            setHasError(true);
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, []);

  const handleChange =
    (index: number) => () => {
        setActivePosition(activePosition === index ? -1: index)
    };

  const clearFilter = () => {
    setFilterValue('');
    setFilteredDogs(dogList.slice(0, 10));
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const filtered = dogList.filter((dog) => normalizeNDF(dog.name.toLowerCase()).includes(normalizeNDF(filterValue.toLowerCase())));
      setFilteredDogs(filtered.slice(0, 10));
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [filterValue, dogList]);


  return (
    <>
        <MainDescription title={mainTitle}><div>{other}</div></MainDescription>
        <div className="filter-wrapper">
            <InputLabel className="row field-label">{filterTitle}</InputLabel>
            <FormControl className="row mat-primary">
                <InputLabel>{filterPlaceholder}</InputLabel>
                <Input
                    type="text"
                    value={filterValue}
                    onChange={(e) => setFilterValue(e.target.value)}
                />
                    {filterValue.length > 0 && (
                        <IconButton aria-label="Clear" onClick={clearFilter}>
                            <CloseIcon />
                        </IconButton>
                    )}
            </FormControl>
        </div>

        <div>
            <p className="result-counter">
                {(filteredDogList.length === 0 && isInitialized) ? "No data found" : `${filteredDogList.length} results`}
            </p>
            {hasError ? (
                <div className="error-loading">Error loading data</div>
            ) : (
                <div>
                    {
                    loading ? <div>Loading...</div> :
                    filteredDogList.map((dog, index) => (
                        <Accordion key={dog.id} expanded={activePosition === index}
                            onChange={handleChange(index)} disableGutters={true}>
                            <AccordionSummary sx={{
                                pointerEvents: "none",
                                "& .MuiAccordionSummary-expandIconWrapper": {
                                    transition: "none",
                                    "&.Mui-expanded": {
                                        transform: "none",
                                    },
                                    },
                                }} expandIcon={
                                    <CustomExpandIcon/>
                                    }
                                    aria-controls="dog.name"
                                    id="dog.id">
                                <Typography sx={{ width: '33%', flexShrink: 0 }}>
                                    {dog.name}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                
                                <DogDetailItem dogItem={dog} isExpanded={activePosition === index}></DogDetailItem>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            )}
        </div>
    </>
  );
};

export default Home;