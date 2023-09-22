import CostForm from "./CostForm"
import Card from "../UI/Card"
import "./AddCost.css"
import { useState } from "react"


function AddCost(props){

    const [isVisible, setIsVisible] = useState(false)

    const saveCostDataHandler = (inputCostData) =>{
        const costData = {
            ...inputCostData,
            id: Math.random().toString()
        }
        props.onAddCost(costData)
    }

    const inputCostDataHandler = () => {
        setIsVisible(true)
    }

    const cancelCostHandler = () => {
        setIsVisible(false)
    }

    return (
        <Card className="new-cost">
            {!isVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}
            {isVisible && <CostForm onSaveCostData={saveCostDataHandler} cancelCost={cancelCostHandler}/>}
        </Card>)
}

export default AddCost