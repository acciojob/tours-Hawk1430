import React from 'react';
import Tour from './Tour';
import { destinations } from './App';

const Tours = ({ tours, handleDelete}) => {

  return (
    <div style={{display: "flex", flexWrap:"wrap"}}>
      {tours.map((tour) => (
        <Tour
          key={tour.id}
          id={tour.id}
          image={tour.image}
          description={tour.description}
          price={tour.price}
          name={tour.name}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default Tours;
