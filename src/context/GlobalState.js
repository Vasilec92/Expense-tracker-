import React, { createContext, useReducer } from "react";
import { act } from "react-dom/test-utils";

//intit state
const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transaction: state.transaction.filter((t) => t.id !== action.payload),
      };
    case "ADD":
      return {
        ...state,
        transaction: [...state.transaction, action.payload],
      };
    default:
      return state;
  }
}
//create context
export const GlobalContext = createContext(initialState);

//provider component
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
