import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transaction } = useContext(GlobalContext);
  console.log(transaction);
  return (
    <div>
      <h3>History</h3>
      <ul id="list" className="list">
        {transaction.map((t, idx) => (
          <Transaction key={idx} transaction={t} />
        ))}
      </ul>
    </div>
  );
}
