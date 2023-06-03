// import Del from "./del";
import "./todoList.css";
function RenderData({ list, setDataArray, del, update }) {
  console.log(list);
  return (
    <>
      {/* {console.log(list)} */}
      {list.map((data, ind) => {
        return (
          <p className="para">
            <p className="render">
              {ind + 1} : {data.data} {}
            </p>

            <button
              className="del"
              onClick={() => {
                // console.log(ind);
                del(data.key);
              }}
            >
              X
            </button>
            <button
              className="del"
              onClick={() => {
                // e.preventDefault();
                update(data.key, data.data[0], data.data[1]);
              }}
            >
              Update
            </button>
          </p>
        );
      })}
    </>
  );
}
export default RenderData;
