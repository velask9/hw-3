import './App.css';
import{List} from './List'

function App() {
  
  
    const listItems = [
        { id:1, Picture:"🐘", Animal:'Elephant'},
        { id:2, Picture:"🐶", Animal:'Dog'},
        { id:3, Picture:"🐒", Animal:'Monkey'},
        { id:4, Picture:"🦁", Animal:'Lion'},
       
      ]
    
    

  return (
    <div className="App">
      
      <List data={listItems}/>
      
    </div>
  );
}

export default App;
