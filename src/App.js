import React, {Suspense, lazy} from 'react';
import TopBar from './components/Top-bar';
import './App.css';
import LikeToggle from './components/LikeToggle';


var Card  =lazy(()=>import('./components/Card'));



function App() {
  return (
    <div className="App">
      <TopBar />
      <LikeToggle />
      <Suspense fallback={<h5 className="Suspense-loading">Loading. . . . .</h5>}>
      <Card />
      </Suspense>
    
    </div>
  );
}

export default App;
