import css from "./TransactionHistory.module.css"
import TransactionHistoryItem from "../TransactionHistoryItem/TransactionHistoryItem";

export default function TransactionHistory(items) {
    return (
<table >
  <thead>
    <tr >
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

<tbody>
    {items.items.map((item, idx) => {
        return (
        <tr key = {item.id} className={idx%2 && css.bGColor}>
           <TransactionHistoryItem item={item}></TransactionHistoryItem>
        </tr>)
    })}
</tbody>
</table>
    )
}