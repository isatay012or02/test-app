import { useState } from "react"
import "./CostForm.css"

const CostForm = (props) => {

    const [userInput, setUserInput] = useState({
        name: "",
        amount: "",
        date: ""
    }) 

    //const [name, setName] = useState("")
    const nameChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            name: event.target.value
        })
    }

    //const [amount, setAmount] = useState("")
    const amountChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            amount: event.target.value
        })
        // setUserInput((previousState) => {
        //     return {
        //         ...previousState,
        //         name: event.target.value
        //     }
        // })
    }

    //const [date, setDate] = useState("")
    const dateChangeHandler = (event) =>{
        setUserInput({
            ...userInput,
            date: event.target.value
        })
    }
    
    const submitHandler = (event) =>{
        event.preventDefault()

        const costData = {
            description: userInput.name,
            amount: userInput.amount,
            date: new Date(userInput.date)
        }

        props.onSaveCostData(costData)
        
        setUserInput({
            ...userInput,
            name: "",
            amount: "",
            date: ""
        })
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Название</label>
                    <input type="text" onChange={nameChangeHandler} value={userInput.name} />
                </div>
                <div className="new-cost__control">
                    <label>Сумма</label>
                    <input type="number" min={0.01} step={0.01} onChange={amountChangeHandler} value={userInput.amount} />
                </div>
                <div className="new-cost__control">
                    <label>Дата</label>
                    <input type="date" min="2019-01-01" step="2023-9-14" onChange={dateChangeHandler} value={userInput.date} />
                </div>
                <div className="new-cost__actions">
                    <button type="submit" >Добавить Расход</button>
                    <button type="button" onClick={props.cancelCost} >Отмена</button>
                </div>
            </div>
        </form>)
}

export default CostForm