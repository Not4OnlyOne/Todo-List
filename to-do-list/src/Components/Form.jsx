import React, { useState } from "react";
function Todo() {
  const [inputValue, setInputvalue] = useState('')
  const [list, setList] = useState([])
  const inputHandler = (e) => {
    debugger
    const newList = [...list];
  // insted of plian strings pushing, push objcts with id and value property


    newList.push(inputValue);
    setList(newList)
    setInputvalue('')
    
 
  }

  const changeHandler = (e) => {
    setInputvalue(e.target.value)
  }
 

  return (

    <div>
      {/* <label for="name">Enter </label> */}
      <input id="input1" placeholder="enter" value={inputValue} onChange={changeHandler}/>
      <button onClick={inputHandler}>
        ADD
      </button>
     
    {list.length>0 && list.map((item) => {
      return (
        <div>
        <h2>{item}</h2>
        </div>
      )
    })}
    </div>
  );
}
export default Todo;
