import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        setDogImage(data.message);
      } catch (error) {
        console.error('Error fetching dog image:', error);
      }
    };

    fetchData();
  }, []);

  console.log(dogImage); // Log the value of dogImage

  return (
    <div>
      {dogImage ? (
        <img src={dogImage} alt="A Random Dog" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;