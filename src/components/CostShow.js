import CostItem from "./CostItem"
import "./Costs.css"

function CostShow(props){

    return (<div className="costs">
        <CostItem
            date={props.costsForShow[0].date}
            discription={props.costsForShow[0].discription}
            amount={props.costsForShow[0].amount}
        />
        <CostItem
            date={props.costsForShow[1].date}
            discription={props.costsForShow[1].discription}
            amount={props.costsForShow[1].amount}
        />
        <CostItem
            date={props.costsForShow[2].date}
            discription={props.costsForShow[2].discription}
            amount={props.costsForShow[2].amount}
        />
    </div>)
}

export default CostShow