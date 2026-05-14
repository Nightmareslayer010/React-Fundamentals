const TodoItem = ({
  t,
  editId,
  editText,
  setEditText,
  saveItem,
  cancelItem,
  editItem,
  DelItem,
  checkItem,
}) => {
  return (
    <li key={t.id} className="flex gap-4 w-full">
      {editId === t.id ? (
        <>
          <input
            className="flex-1"
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <button
            className="bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={saveItem}
          >
            Save
          </button>
          <button
            className="bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={cancelItem}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span className="flex-1">{t.text}</span>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => {
              checkItem(t);
            }}
          />
          <button
            className=" bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={() => {
              editItem(t);
            }}
          >
            Edit
          </button>
          <button
            className=" bg-linear-to-r from bg-cyan-600 to drop-shadow-sky-600  hover:bg-indigo-800  p-2 rounded-2xl"
            onClick={() => {
              DelItem(t);
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};
export default TodoItem;
