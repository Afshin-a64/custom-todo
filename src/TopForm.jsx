import { Fragment, useContext, useState } from "react";
import { formContext } from "./formContext";

const TopForm = (props) => {
  const [task, setTask] = useState("");
  const { cardItem, setCardItem } = useContext(formContext);

  const handleSetTask = (e) => {
    props.itemIdTitle[1] = e.target.value;
    setTask(e.target.value);
    // props.itemId[0] = ['']
  };
  const addTask = () => {
    setCardItem([...cardItem, { id: Math.random(), title: task, done: false, isEdit: false }]);
    setTask("");
    props.itemIdTitle[1] = ''
  };
  const editTask = (id) => {
    cardItem.forEach(item => {
      if (item.id == id) {
        item.title = task;
        let newCardArray = [...cardItem];
        setCardItem(newCardArray);
      }
      setTask("");
      props.itemIdTitle[0] = ''
      props.itemIdTitle[1] = ''
    })
  };
  return (
    <Fragment>
      <h1 className="text-green-600 text-2xl font-bold text-shadow-lg text-shadow-green-300">
        به کدیاد خوش آمدید
      </h1>
      <div>
        <form className="flex gap-2">
          <input
            ref={props.textInputRef}
            onChange={handleSetTask}
            type="text"
            className="textInput border border-gray-300 rounded-md w-full h-10"
            value={props.itemIdTitle[1] ? props.itemIdTitle[1] : task}
          ></input>
          <button
            onClick={props.itemIdTitle[0] ? () => editTask(props.itemIdTitle[0]) : addTask}
            type="button"
            className="border border-gray-300 bg-green-700 text-white rounded-md w-18 h-10 cursor-pointer"
          >
            ثبت
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default TopForm;
