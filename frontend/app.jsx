import React from 'react';
import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';

const App = () => {

  const tabContent = [
    {title: 'Dances', content: 'Lindy Hop, Balboa, Charleston, Solo Jazz'},
    {title: 'Performers', content: 'Harvest Moon Hoppers, Swung Furies'},
    {title: 'Bandleaders', content: 'Eyal Vilner, Jonathan Stout, Michael Gamble, Laura Windley'}
  ];

  return (
    <>
      <Clock />
      <Weather />
      <Tabs tabs={tabContent}/>
    </>
  );

}

export default App;