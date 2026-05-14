import { useState, useEffect } from "react";
const useTodos = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  //arrays and storage

  const filteredList = todos.filter((t) => {
    if (filter === "active") return t.completed === false;
    if (filter === "completed") return t.completed === true;
    return t;
  });

  // functions
  const clearAll = () => {
    if (window.confirm("clear all?")) return setTodos([]);
  };

  const addItem = () => {
    if (text.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const checkItem = (t) => {
    setTodos(
      todos.map((c) => {
        return c.id === t.id ? { ...c, completed: !c.completed } : c;
      }),
    );
  };
  const editItem = (t) => {
    setEditId(t.id);
    setEditText(t.text);
  };

  const saveItem = () => {
    setTodos(
      todos.map((t) => {
        return t.id === editId ? { ...t, text: editText } : t;
      }),
    );
    setEditId(null);
    setEditText("");
  };

  const cancelItem = () => {
    setEditId(null);
    setEditText("");
  };
  const DelItem = (t) => {
    setTodos(todos.filter((d) => d.id !== t.id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return {
    clearAll,
    text,
    setText,
    setFilter,
    editId,
    editText,
    saveItem,
    cancelItem,
    todos,
    filteredList,
    DelItem,
    addItem,
    editItem,
    setEditText,
    checkItem,
  };
};
export default useTodos;
