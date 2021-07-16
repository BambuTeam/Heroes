
import './App.css';
import LikedCard from './components/Liked-Card';
import Search from './components/Search';
import TopBar from './components/Top-bar';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <TopBar />
      <LikedCard />
      <Search />
      <Card />
    
    </div>
  );
}

export default App;
