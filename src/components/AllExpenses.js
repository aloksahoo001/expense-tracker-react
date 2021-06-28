import ExpenseItem from "./ExpenseItem";
import './AllExpenses.css';

function AllExpenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        title={props.data[0].title}
        date={props.data[0].date}
        amount={props.data[0].amount}
      />
      <ExpenseItem
        title={props.data[1].title}
        date={props.data[1].date}
        amount={props.data[1].amount}
      />
    </div>
  );
}

export default AllExpenses;
