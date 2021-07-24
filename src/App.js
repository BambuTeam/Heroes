import React, {Suspense, lazy} from 'react';
import LikedCard from './components/Liked-Card';
import Search from './components/Search';
import TopBar from './components/Top-bar';
import './App.css';
const Card  =lazy(()=>import('./components/Card'));



function App() {
  return (
    <div className="App">
      <TopBar />
      <LikedCard />
      <Search />
      <Suspense fallback={<h5>Loading. . .</h5>}>
      <Card />
      </Suspense>
    
    </div>
  );
}

export default App;
