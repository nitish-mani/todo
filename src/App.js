import logo from "./logo.svg";
import "./App.css";
import TodoList from "./component/todoList";
import { useEffect, useState } from "react";
import RenderData from "./component/renderData";
// import Del from "./component/del";

function App() {
  const [date, setDate] = useState("");
  const [data, setData] = useState("");

  // const [list, setList] = useState({ id: no, data: data });
  const [dataArray, setDataArray] = useState([]);
  const [re, setre] = useState("");
  const [update, setupdate] = useState("");
  const [he, sethe] = useState("");
  const arr = [];
  let y;

  const loco = () => {
    let newarr = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const data = localStorage.getItem(key);
      const newdata = data.split(",");
      console.log(newdata);
      newarr = [...newarr, { key: key, data: newdata }];
    }

    // setDataArray(newarr);
    return newarr;
  };

  useEffect(() => {
    if (localStorage.length !== 0) {
      setDataArray(loco());
    }
  }, []);

  function local() {
    if (dataArray)
      dataArray.map((items) => {
        localStorage.setItem(items.key, items.data);
      });
  }

  function le() {
    const date = new Date();

    return date.getTime();
  }
  // console.log(le());
  local();
  /////////
  function handleSubmit(e) {
    e.preventDefault();
    // arr.push(le());
    if (data)
      setDataArray([
        ...dataArray,
        {
          key: le(),
          data: [data, date],
        },
      ]);
    setData("");
    setDate("");
  }
  //////
  console.log(dataArray);

  function handleUpdate(e) {
    e.preventDefault();
    if (update) {
      const newarr = [...dataArray];

      newarr[re] = { key: he, data: [data, date] };
      console.log(newarr, re, he, data);
      setDataArray(newarr);
      console.log(date);
    }
    // setupdate(data);

    sethe("");
    setre(y);
    setupdate("");
    setData("");
    setDate("");
    // console.log(dataArray);
  }
  /////

  function del(ind) {
    const index = dataArray.findIndex((obj) => obj.key === ind);
    const arr = dataArray.splice(index, 1);
    setDataArray(dataArray);
    arr.pop();
    setre(arr);
    sethe("");
    localStorage.removeItem(ind);
  }
  /////

  function updates(ind, data, date) {
    setupdate(data);
    setData(data);
    sethe(ind);
    const index = dataArray.findIndex((obj) => obj.key === ind);
    setre(index);
    setDate(date);
    // console.log(y, update);
  }

  return (
    <>
      <TodoList
        date={date}
        setDate={setDate}
        data={data}
        setData={setData}
        setDataArray={handleSubmit}
        setupdate={handleUpdate}
        update={update}
      ></TodoList>

      <RenderData
        list={dataArray}
        arr={arr}
        setDataArray={setDataArray}
        del={del}
        update={updates}
      ></RenderData>
    </>
  );
}

export default App;
