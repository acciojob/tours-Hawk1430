import React from 'react';
import Tour from './Tour';
import { destinations } from './App';

const Tours = ({ tours, handleDelete, setTours }) => {
  const refreshStyle = {
    marginTop: '10px',
    padding: '8px 12px',
    border: 'none',
    backgroundColor: 'rgb(77, 84, 180)',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  if (tours.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button style={refreshStyle} onClick={() => setTours(destinations)}>
          Refresh
        </button>
      </div>
    );
  }


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
