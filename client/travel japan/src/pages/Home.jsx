import React from 'react';
import banner from '../assets/banner.jpeg';

export default function Home() {
  const jumbotronStyle = {
    backgroundImage: `url(${banner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white', 
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid" style={jumbotronStyle}>
        <div className="container">
          <h1 className="display-4 text-center">Travel Japan</h1>
          <p className="lead text-center">
          Embark on an enchanting journey through the heart of Japan, inviting you to explore the captivating beauty, rich cultural heritage, and unparalleled experiences that make Japan an unforgettable destination.
          </p>
        </div>
      </div>
      <p className=' home-text m-5 text-dark'>
Welcome to our Japan Travel Hub, your gateway to a world of enchanting experiences and cultural wonders in the Land of the Rising Sun. Immerse yourself in the beauty of Japan as we guide you through its vibrant cities, serene landscapes, and historical treasures. Whether you dream of wandering through ancient temples in Kyoto, savoring the delicate flavors of sushi in Tokyo, or finding tranquility in the cherry blossoms of spring, our website is your compass to a bespoke journey. Join us as we unveil the secrets of Japan, offering travel tips, curated itineraries, and a glimpse into the rich tapestry of traditions that make this country a captivating destination. Start your adventure with us and let the essence of Japan unfold before your eyes, creating memories that will last a lifetime.</p>
<div className="text-center mb-5"> {/* Container for center alignment */}
        <a href="/locations" className='btn btn-outline-primary'> Explore Locations</a>
      </div>
    </>
  );
}
