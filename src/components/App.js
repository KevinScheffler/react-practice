import CountButton from './Countbutton/CountButton';
import SearchBar from './SearchBar/SearchBar'



const App = () => {
      return (
      <div>
        <SearchBar products={[
            "tooth paste",
            "tooth brush",
            "mouth wash",
            "dental floss",
            "mouth guard",
        ]} 
    />
        <SearchBar products={[
            "bike rack",
            "mountain bike",
            "soccer ball",
            "running gear",
            "kayak",
        ]} 
    />
      </div>
    );
  }

  export default App;