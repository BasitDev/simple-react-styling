import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>May 23rd 2022</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">300.5$</div>
            </div>
        </div>
    );
}

export default ExpenseItem;


