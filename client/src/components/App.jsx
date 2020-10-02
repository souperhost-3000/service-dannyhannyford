import React from 'react';
import Carousel from './Carousel';
import sampleData from './sampleData';
import '../style.css';

const App = () => (
  <div>
    <Carousel sampleData={sampleData} />
  </div>
);

export default App;
