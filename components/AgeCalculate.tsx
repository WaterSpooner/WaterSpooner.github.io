import { useState, useEffect } from 'react';

function AgeInSeconds() {
    const [ageInSeconds, setAgeInSeconds] = useState('');
  
    useEffect(() => {
      // Function to calculate age in seconds
      const calculateAgeInSeconds = () => {
        const age = new Date().getTime() - new Date("2002-12-22").getTime();
        const ageInYears = (age / (1000 * 365 * 24 * 60 * 60)).toFixed(20);
        setAgeInSeconds(ageInYears);
      };

      // Call the function initially
      calculateAgeInSeconds();

      // Update the age every second
      const interval = setInterval(calculateAgeInSeconds, 50);
  
      // Clear interval on component unmount
      return () => clearInterval(interval);
    }, []); // Empty dependency array to run the effect only once
  
    return (<p>{ageInSeconds}</p>);
  }
  
  export default AgeInSeconds;