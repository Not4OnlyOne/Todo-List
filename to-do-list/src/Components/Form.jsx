import React from "react";
function Todo() {
  function inputHandler(e) {
    //let inputValue = [];
    let array = [];
    //console.log("event type:" + e.type);
    let inputValue = document.querySelector('input[type="text"]');
    for (let i = 0; inputValue > i; ) array.push(inputValue.value);
    array.push(inputValue.id);
    array.push(inputValue.placeholder);
    console.log(array.length);
    // for (let i = array.length; i > 0; i--) {
    //   console.log(array.pop(i));
  }

  return (
    <div>
      {/* <label for="name">Enter </label> */}
      <input type="text" id="input1" placeholder="enter" />
      <button onClick={inputHandler} type="submit">
        ADD
      </button>
    </div>
  );
}
export default Todo;
