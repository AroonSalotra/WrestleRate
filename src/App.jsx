import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Match from './components/Match';
import EventList from './components/EventList';


function App() {

  return (
    <>
      {/* <div className="match-container">
        <Match match="John Cena vs Cody Rhodes" />
        <Match match="Brock Lesnar vs Michael Cole" />
      </div> */}

      <EventList />
    </>
  )
}

export default App
