import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Highlights from './components/Highlights';
import Tabs from './components/Tabs';

const tabContent = [
  {
    key: 0,
    image: "",
    header: "Family Gathering",
    description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
    active: true
  },
  {
    key: 1,
    image: "",
    header: "Special Events",
    description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
    active: false
  },
  {
    key: 2,
    image: "",
    header: "Social Events",
    description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
    active: false
  },
]
function App() {
  // value of selectedTab indicates key value of currntly selceted tab 
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <div className="App">
      <Home />
      <About />
      <Highlights />
      <Tabs tabContent={tabContent}/>
    </div>
  );
}

export default App;
