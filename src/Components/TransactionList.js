import ExpandablePanel from "./ExpandablePanel";
import Transactions from "./Transactions";
const TransactionList = ({ transactions }) => {
    const header = (
        <>
         <ul>
        {/* Display names under the selected category */}
        {transactions.map((transaction) => (
          <li key={transaction.id}>{transaction.name}</li>
        ))}
      </ul>
        </>
    )
    return (
        <ExpandablePanel key={transactions.id} header={header}>
            <Transactions transactions={transactions}/>
        </ExpandablePanel>
    );
  };
  
  export default TransactionList;
