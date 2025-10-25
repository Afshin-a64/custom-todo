import { useContext } from "react";
import { formContext } from "./formContext.js";
import Edit from "./Edit.jsx";

const FormCards = (props) => {
  const { cardItem, setCardItem } = useContext(formContext);

  const changeDone = (id) => {
    const index = cardItem.findIndex((obj) => obj.id == id);
    let newCardItem = [...cardItem];
    newCardItem[index].done = !newCardItem[index].done;
    setCardItem(newCardItem);
  };

  const deleteCard = (id) => {
    setCardItem(cardItem.filter((obj) => obj.id !== id));
  };

  if (cardItem.length) {
    return (
      <>
        {cardItem.map((card) => (
          <div
            className={`border border-gray-300 rounded-md w-full h-10 
          flex justify-between items-center px-4 ${
            card.done ? "bg-green-300" : ""
          }`}
          >
            <span>{card.title}</span>
            <div>
              <span>
                <i
                  onClick={() => changeDone(card.id)}
                  className={`yellow fa-solid ${
                    card.done ? "fa-xmark" : "fa-check"
                  } ${
                    card.done ? "text-yellow-400" : "text-green-600"
                  } mx-3 hover:text-shadow-md hover:text-shadow-yellow-200 cursor-pointer`}
                ></i>
                <i
                  onClick={() => deleteCard(card.id)}
                  className="fa-solid fa-trash text-red-500 mx-3 hover:text-shadow-md hover:text-shadow-red-300 cursor-pointer"
                ></i>
              </span>
              <button type="button" onClick={() => props.textInputFocusHandler(card.id, card.title)} className="m-1 cursor-pointer">Edit</button>
              {console.log(cardItem)
              }
            </div>
          </div>
        ))}
      </>
    );
  } else {
    return (
      <h1 className="font-bold text-xl text-red-500">
        کار جدیدی ثبت نشده است!
      </h1>
    );
  }
};

export default FormCards;
