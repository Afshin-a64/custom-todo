import { useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./style.css";
import TopForm from "./TopForm.jsx";
import FormCards from "./FormCards.jsx";
import { formContext } from "./formContext.js";

function App() {
  const [cardItem, setCardItem] = useState([
    {
      title: "کار شماره 1",
      id: 1,
      done: false,
      isEdit: false,
    },
    {
      title: "کار شماره 2",
      id: 4,
      done: false,
      isEdit: false,
    },
    {
      title: "کار شماره 3",
      id: 3,
      done: true,
      isEdit: false,
    },
  ]);

  const [itemIdTitle, setItemId] = useState([])

  const textInputRef = useRef(null)

  const textInputFocusHandler = (id, title)=>{
    if (textInputRef.current) {
      textInputRef.current.focus()
    }
    cardItem.forEach(item => {
      if (item.id == id) {
        item.isEdit = true 
      }
    })
    setItemId([itemIdTitle[0] = id, itemIdTitle[1] = title])
    let newCardArray = [...cardItem]
    setCardItem(newCardArray)
  }

  return (
    <>
        <div
          className="main w-screen h-screen p-5 bg-linear-to-l from-green-700 from-0% to-green-200"
          dir="rtl"
        >
          <div className="sub-main w-full h-fit bg-white p-5 rounded-2xl flex justify-center items-center">
            <formContext.Provider
              value={{
                cardItem,
                setCardItem,
              }}
            >
              <div className="content w-full md:w-1/2 flex flex-col gap-5 text-center">
                <TopForm textInputRef={textInputRef} itemIdTitle={itemIdTitle} />
                <FormCards textInputFocusHandler={textInputFocusHandler} itemIdTitle={itemIdTitle}/>
              </div>
            </formContext.Provider>
          </div>
        </div>
    </>
  );
}

export default App;
