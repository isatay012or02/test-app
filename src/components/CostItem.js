import "./CostItem.css"
import CostDate from "./CostDate"

function CostItem(props){

    return (<div className="cost-item">
                <div className="cost-item__description">
                    <CostDate date={props.date}/></div>
                <h2>{props.discription}</h2>
                <div className="cost-item__price">${props.amount}</div>
            </div>)
}

export default CostItem
