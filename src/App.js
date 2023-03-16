import { useState, useEffect } from "react";
import AddItem from "./AddItem";
import List from "./List";

function App() {
  const [list, setList] = useState(() => {
    const initialList = JSON.parse(localStorage.getItem('list'));
    return initialList ? initialList : []
  });

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  function updateItem(index, value){
    setList((prevList) => prevList.map((item, i) => {
      return index === i ? value : item
    }))
  }
  function addItem(value){
    setList((prevList) => [...prevList, value])
  }

  function deleteItem(index){
    setList((prevList) => prevList.filter((value, i) => i !== index))
  }

  return (
    <div className="App">
      <h1>my awesome todo list!</h1>
      <List
        list={list}
        handleChange={updateItem}
        handleDeleteClick={deleteItem} />

        <AddItem handleSubmit={addItem}/>
    </div>
  );
}

export default App;
