import TopForm from "./TopForm.jsx";

const Edit = (props) => {

  return (
    <>
      <button onClick={props.textInputFocusHandler} type="button" className="m-1 cursor-pointer">
        Edit
      </button>
    </>
  );
};

export default Edit;
