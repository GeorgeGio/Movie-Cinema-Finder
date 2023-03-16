import './App.css';
import SearchBtn from './components/SearchTabs/SearchBtn';
import Navbar from './components/NavTab/Navbar';
import {useLoadScript} from '@react-google-maps/api';
import Map from './components/MapTab/Map'
import MyComponent from './components/MapTab/Map-search';
import { useState } from 'react';


function App() {
  const [location, setLocation ] = useState()
  const {isLoaded} = useLoadScript({googleMapsApiKey:'AIzaSyDiynoeYUWuZBp_4e29FZ4-JXPJHVz9olY', Libraries: ['places']})
  if (!isLoaded) {
    return <div> Loading....</div>
  }
  return (
    <div>
     <Navbar/>
     <SearchBtn setLocation={setLocation}/>
     <MyComponent location={location}/>
     <div>
      <div id='map'><Map /></div>
      

    </div>
    </div>
  );
}

export default App;
