import React, { useEffect, useState } from 'react';

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    const incrementCounter = () => {
      if (localStorage.getItem('visits')) {
        const visits = parseInt(localStorage.getItem('visits')) + 1;
        localStorage.setItem('visits', visits);
        setVisits(visits);
      } else {
        localStorage.setItem('visits', 1);
        setVisits(1);
      }
    };

    incrementCounter();
  }, []);

  return <div className="visit"> </div>;
};

export default VisitCounter;
