import "./todoList.css";

function TodoList({
  date,
  setDate,
  setDataArray,
  data,
  setData,
  update,
  setupdate,
}) {
  return (
    <>
      <h1 className="title"> Todo List </h1>
      <form onSubmit={update ? setupdate : setDataArray}>
        <input
          className="input1"
          placeholder="Enter works"
          value={update ? data : data}
          onChange={(e) => {
            const dat = e.target.value;
            setData(dat);
          }}
        />
        <input
          className="input2"
          placeholder="date"
          type="date"
          value={update ? date : date}
          onChange={(e) => {
            const dat = e.target.value;
            // setNo(dat);
            setDate(dat);
          }}
        />
        <button className="button" type="submit">
          {update ? "update" : "Add"}
        </button>
      </form>
    </>
  );
}
export default TodoList;
