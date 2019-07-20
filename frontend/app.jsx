import React from 'react';
import Clock from './clock';
import Tabs from './tabs';

const App = () => {

  const tabContent = [
    {title: 'Dances', content: 'Lindy Hop, Balboa, Charleston, Solo Jazz'},
    {title: 'Teams', content: 'Harvest Moon Hoppers, Swung Furies'},
    {title: 'Bandleaders', content: 'Eyal Vilner, Jonathan Stout, Michael Gamble, Laura Windley'}
  ];

  return (
    <>
      <Clock />
      <Tabs tabs={tabContent}/>
    </>
  );

}

export default App;