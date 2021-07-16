
import './App.css';
import LikedCard from './components/Liked-Card';
import Search from './components/Search';
import TopBar from './components/Top-bar';


function App() {
  return (
    <div className="App">
      <TopBar />
      <LikedCard />
      <Search />
    
    </div>
  );
}

export default App;
