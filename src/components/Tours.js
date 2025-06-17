import React from 'react';
import Tour from './Tour';

const Tours = ({ tours, handleDelete}) => {

  return (
    <div style={{display: "flex", flexWrap:"wrap"}}>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          tour={tour}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Tours;
