import React from 'react';
import PropTypes from 'prop-types';

const titleDef = 'Dog breed database';
const descriptionDef = 'Venture into the fascinating world of dog breeds. Discover their unique charasterictics, origins and care needs in our comprehensive guide. Whether a seasoned dog lover or in search of our perfect furry friend - find all the answers here!';

interface MainDescriptionProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

const MainDescription: React.FC<MainDescriptionProps> = ({ children, title, description }) => {
  return (
    <>
        <div className="home-head">
            <h1>{title ?? titleDef}</h1>
            <p>{description ?? descriptionDef}</p>
            {children}
        </div>
    </>
  );
};

MainDescription.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), 
    PropTypes.element.isRequired ?? null
  ]),
  title: PropTypes.string.isRequired ?? null,
  description: PropTypes.string,
}

export default MainDescription;