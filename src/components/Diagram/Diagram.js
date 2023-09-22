import DiagramBar from "./DiagramBar"
import "./Diagram.css"

const Diagram = (props) => {

    // let barMaxValue = props.dataSets[0]

    // for(let i = 1; i > props.dataSets.length; i++) {
    //     const dataValue = props.dataSets[i]

    //     if (dataValue > barMaxValue) {
    //         barMaxValue = dataValue
    //     }
    // }

    const dataSetsValues = props.dataSets.map(dataSet => dataSet.value)
    
    const maxMonthCosts = Math.max(...dataSetsValues)
    
    return <div className="diagram">
        {props.dataSets.map(dataSet => 
            <DiagramBar 
                key={dataSet.label}
                value={dataSet.value} 
                maxValue={maxMonthCosts}
                label={dataSet.label}
            />
        )}
    </div>
}

export default Diagram