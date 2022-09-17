import React, { useState } from "react";
import * as S from '../Styles/StyleToDo.js'

export default function Todo() {

  const [input, setInput] = useState();
  const [list, setList] = useState([]);

  function add() {
    let thingsOfInput = {
      value: input,
      id: Date.now(),
      status: false
    };
    if (input !== "") {
      setList([...list, thingsOfInput]);
    }
    setInput("");
  }

  function deleteOne(id) {
    const filterList = list.filter((item) => item.id !== id);
    setList(filterList);
  }

  function deleteAll(id) {
    const filterAll = list.filter((item) => item.id === id)
    setList(filterAll);
  }

  return (
  <S.Container>
    <form onSubmit={(e) => e.preventDefault()}>
        <h2>Add your tasks here!</h2>
        <div>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
          <button onClick={() => {add()}} title="Add one task">Add</button>
          <button onClick={() => {deleteAll()}} className="delbtn" title="Delete all tasks">Del</button>
        </div>
    </form>

    <S.List>
      {list.map((item) => (
        <div>
          <li>{item.value}</li>
          <button onClick={() => {deleteOne(item.id)}} className="delbtn"title="Delete this task">x</button>
        </div>))}
    </S.List>
  </S.Container>
  );
}
