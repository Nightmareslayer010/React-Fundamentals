const todoItem = ({
  t,
  setEditText,
  setEditId,
  delItem,
  itemToggle,
  startEdit,
  saveEdit,
  cancelEdit,
  editId,
  editText,
}) => {
  return (
    <li>
      {editId === t.id ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={(e) => {
              setEditText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              saveEdit(t.id);
            }}
          >
            Save
          </button>{" "}
          <button
            onClick={() => {
              cancelEdit;
            }}
          >
            Cancel
          </button>{" "}
        </>
      ) : (
        <>
          <span>{t.text}</span>
          <input
            type="checkbox"
            checked={t.completed}
            onChange={() => {
              itemToggle(t.id);
            }}
          />
          <button
            onClick={() => {
              startEdit(t.id, t.text);
            }}
          >
            Edit
          </button>
          <button
            onClick={() => {
              delItem(t.id);
            }}
          >
            Delete
          </button>
        </>
      )}
    </li>
  );
};

export default todoItem;
