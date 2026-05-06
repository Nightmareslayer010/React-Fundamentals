import { useState, useEffect } from "react";

const useTodoBrain = () => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(null);
  const [filter, setfilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addItem = () => {
    if (text.trim() === "") {
      return;
    }
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const delItem = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const itemToggle = (id) => {
    setTodos(
      todos.map((t) => {
        return t.id === id ? { ...t, completed: !t.completed } : t;
      }),
    );
  };

  const startEdit = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const saveEdit = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, text: editText } : t)));
    setEditId(null);
  };
  const cancelEdit = () => {
    setEditId(null);
  };
  const filteredList = todos.filter((t) => {
    if (filter === "active") return t.completed === false;
    if (filter === "completed") return t.completed === true;
    return true;
  });

  const clearAll = () => {
    if (window.confirm("Do you wish to Delete all Mr. Epstein")) {
      return setTodos([]);
    }
  };

  return {
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
  };
};
export default useTodoBrain;
