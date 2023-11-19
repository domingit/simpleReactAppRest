import React from 'react';

interface IProps {}

const NotFoundPage: React.FC<IProps> = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The page you're looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;