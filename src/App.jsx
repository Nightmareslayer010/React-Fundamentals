import { useState, useEffect } from "react";
import TodoItem from "./components/todoItem";
import useTodoBrain from "./hooks/useTodoBrain";

function App() {
  const {
    text,
    setText,
    todos,
    setTodos,
    editText,
    setEditText,
    editId,
    setEditId,
    filter,
    setfilter,
    addItem,
    delItem,
    itemToggle,
    startEdit,
    saveEdit,
    cancelEdit,
    filteredList,
  } = useTodoBrain();

  return (
    <div>
      <h1>TO BE OR NOT TO BE APP</h1>
      <div className="input-row">
        <input
          type="text"
          value={text}
          placeholder="Enter item"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button onClick={addItem}>Add</button>
      </div>
      <div className="list-filter">
        <button
          onClick={() => {
            setfilter("all");
          }}
        >
          ALL
        </button>
        <button
          onClick={() => {
            setfilter("active");
          }}
        >
          ACTIVE
        </button>
        <button
          onClick={() => {
            setfilter("completed");
          }}
        >
          COMPLETED
        </button>
      </div>
      <ul className="list-container">
        {filteredList.map((t) => {
          return (
            <TodoItem
              key={t.id}
              t={t}
              setEditText={setEditText}
              setEditId={setEditId}
              delItem={delItem}
              itemToggle={itemToggle}
              startEdit={startEdit}
              saveEdit={saveEdit}
              cancelEdit={cancelEdit}
              editId={editId}
              editText={editText}
            />
          );
        })}
      </ul>
    </div>
  );
}
export default App;
