import React, { useEffect, useState } from 'react';
import api from '../../services/ApiService';
import { Dog, DogDetail } from 'src/assets/models/interfaces/pages';

interface DogProps {
  dogItem: Dog,
  isExpanded: boolean
}

const DogDetailItem: React.FC<DogProps> = ({ dogItem, isExpanded }) => {
  const [dogDetail, setDogDetail] = useState<DogDetail>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const fetchDogDetail = async (imageId: string) => {
    try {
      setLoading(true);
      const response = await api.get<DogDetail>('/images/' + imageId)
      setDogDetail(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching dog detail:', error);
    }
  };

  useEffect(() => {
    if (dogItem !== null && isExpanded) {
      if (dogItem.reference_image_id) {
        fetchDogDetail(dogItem.reference_image_id);
      }
    }
  }, [dogItem, isExpanded]);

  if (!dogDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dog-container">
        {dogDetail && (
            <div className="row-container">
            {!loading ? (
                <>
                {dogDetail.url && (
                    <img
                    className="dog-img dog-item"
                    src={dogDetail.url}
                    alt={dogItem.name}
                    width={dogDetail.width / (dogDetail.width / 300)}
                    height={dogDetail.height / (dogDetail.width / 300)}
                    />
                )}

                <div className="dog-description-wrapper dog-item">
                    <div className="dog-description">{dogItem.temperament}</div>
                    <div className="dog-detail">
                    <div className="dog-detail-item">
                        <span className="dog-label">Lifespan</span>
                        <span className="dog-value">{dogItem.life_span}</span>
                    </div>
                    <div className="dog-detail-item">
                        <span className="dog-label">Origin</span>
                        <span className="dog-value">{dogItem.origin}</span>
                    </div>
                    </div>
                </div>
                </>
            ) : (
                <div className="loading">Loading...</div>
            )}
            </div>
        )}
    </div>
  );
};

export default DogDetailItem;