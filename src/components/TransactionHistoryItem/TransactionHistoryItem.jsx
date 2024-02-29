export default function TransactionHistoryItem({item: item}) {
    return (
    <>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </>
    )
}