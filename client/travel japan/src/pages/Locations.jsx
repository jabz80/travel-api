import React, { useState, useEffect } from 'react';

export default function Locations() {
  const [data, setData] = useState([]); // initial state to store data

  useEffect(() => {
    const fetchData = async () => { 
      try {
        const response = await fetch('http://localhost:3000/japan'); // fetch data from backend
        const jsonData = await response.json();
        setData(jsonData); // store that data in the state
        console.log(jsonData);
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };
    fetchData(); // call function to activate fetch call
  }, []); // empty array so useEffect runs on page load.

  return (
    <div className='container'>
      <div className='row'>
        {data.map(item => ( // map through stored data
          <div key={item.id} className='col-md-4 col-6'> 
            <div className='card d-flex flex-column'>
              <img src={item.image_url} alt={item.name} className='card-img-top img-fit' /> 
              <div className='card-body flex-grow-1'>
                <h2 className='card-title'>{item.name}</h2>
                <p className='card-text'>{item.description}</p>
                <div className='text-end'>
                  <a href={item.web_url} target='_blank' className='btn btn-outline-primary'>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






