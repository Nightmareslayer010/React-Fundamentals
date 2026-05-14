import useTodos from "./hooks/useTodos";
import TodoItem from "./components/TodoItem";
function App() {
  const {
    clearAll,
    text,
    setText,
    setFilter,
    addItem,
    editId,
    editText,
    saveItem,
    cancelItem,
    todos,
    filteredList,
    DelItem,
    setEditText,
    editItem,
    checkItem,
  } = useTodos();
  return (
    // basic skeleton
    <div className="grid min-h-dvh  items-center justify-center  bg-linear-to-r from-cyan-600  to-blue-700">
      <div className=" grid grid-rows-[auto-auto-auto-auto-1fr] p-4 gap-4 bg-linear-to-bl from-[#0f172a] via-[#1e1a78] to-[#0f172a]  rounded-2xl text-amber-50">
        <h1 className="text-4xl font-bold ">My TODO APP</h1>
        <button
          className="bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800"
          onClick={clearAll}
        >
          Clear All
        </button>
        <div className="input-row  flex gap-4">
          <input
            className="text-sky-100 bg-blue-950"
            type="text"
            value={text}
            placeholder="Enter Item"
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          <button
            className=" flex-1 bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={addItem}
          >
            Add
          </button>
        </div>
        <div className="filter-btn flex justify-center items-center gap-2">
          <button
            className=" flex-1 bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={() => {
              setFilter("all");
            }}
          >
            All
          </button>
          <button
            className=" flex-1 bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={() => {
              setFilter("active");
            }}
          >
            Active
          </button>
          <button
            className="flex-1 bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={() => {
              setFilter("completed");
            }}
          >
            Completed
          </button>
        </div>
        <ul className="list-display flex flex-col justify-center items-center gap-2">
          {filteredList.map((t) => {
            return (
              <TodoItem
                t={t}
                key={t.id}
                editId={editId}
                editText={editText}
                setEditText={setEditText}
                saveItem={saveItem}
                cancelItem={cancelItem}
                editItem={editItem}
                DelItem={DelItem}
                checkItem={checkItem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
export default App;
