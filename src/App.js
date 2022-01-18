
import './App.css';

import { useState } from 'react'; 
import {FixedSizeList as List} from 'react-window';
import React from 'react';
import data from './data.json';


function App() {
  var size = 50;
  const [searchItem,SetSearchItem] = useState('');

  const filteredData = data.filter(val=>{
    if(val.first_name.toLowerCase().includes(searchItem.toLowerCase())){
      return [...data,val];
    }
    
  });

  const Row = ({ index, style }) => {
    return(
      <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
        <p>{searchItem == '' ? data[index].first_name : filteredData[index].first_name}</p>
      </div>
    )
  }

  return (
    <div className="App">
      <h1> {searchItem== '' ? 'Loaded '+ data.length: 'Found ' + filteredData.length} entry</h1>
      <input type="text" placeholder='search...' onChange={event=>{
        SetSearchItem(event.target.value)
      }}/>

      <List
          className="List"
          height={530}
          itemCount={searchItem==''? data.length : filteredData.length}
          itemSize={35}
          width={500}
        >        
        {Row}
        </List>

    </div>
  );
}

export default App;
