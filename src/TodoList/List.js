import React, { useState,} from 'react'
import ListItems from './ListItems'
import {ContextApi} from './Context'

function List() {
  const [state, setState]=useState([])
  const [inputVal, setInputValue]= useState("")

  function listOfItems(){
    setState(
      (oldItems)=>{
        return [...oldItems, inputVal];
      }
    )
    setInputValue("")
  }
  function itemValue(e){
    setInputValue(e.target.value)
  }

  function delItem(id){
      setState((oldItems)=>{
        return oldItems.filter((elem, index)=>{
              return index!==id;
          } )
      })
  }
  return (
    <div className="App">
      <div className="todoTable">
        <h1>Todo List</h1>
        <input type="text" value={inputVal} onChange={itemValue}></input>
        <button onClick={listOfItems}>+</button>
        {
          state.map((items, index)=>{
            return <ContextApi.Provider key={index} value={{item:items, id:index, delet:delItem}}>
              <ListItems/>
            </ContextApi.Provider>
          })
        }

      </div>
    </div>

  );
}

export default List;
