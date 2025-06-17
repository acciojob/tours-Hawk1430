import React, { useState } from 'react';

const Tour = ({ id, image, name, price, description, handleDelete }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleText = () => setShowMore(prev => !prev);

  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />
      <div style={styles.content}>
        <h2 style={styles.name}>{name}</h2>
        <p style={styles.price}>Price: {price}</p>
        <p style={styles.description}>
          {showMore ? description : `${description.substring(0, 200)}...`}
          <button onClick={toggleText} style={styles.toggleBtn}>
            {showMore ? ' See Less' : ' Show More'}
          </button>
        </p>
        <button onClick={() => handleDelete(id)} style={styles.removeBtn}>
          Remove
        </button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: '320px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '16px'
  },
  name: {
    margin: '0 0 10px'
  },
  price: {
    margin: '0 0 10px',
    fontWeight: 'bold'
  },
  description: {
    fontSize: '14px',
    color: '#444'
  },
  toggleBtn: {
    background: 'none',
    border: 'none',
    color: '#007bff',
    cursor: 'pointer',
    fontWeight: 'bold',
    paddingLeft: '5px'
  },
  removeBtn: {
    marginTop: '10px',
    padding: '8px 12px',
    border: 'none',
    backgroundColor: '#ff4d4f',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer'
  }
};

export default Tour;
