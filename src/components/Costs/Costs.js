import CostFilter from "./CostFilter";
import './Costs.css';
import Card from "../UI/Card";
import React, {useState} from "react";
import CostList from "./CostList";
import CostsDiagram from './CostsDiagram';


  const Costs = (props) => {
    
    const [selectedYear, setSelectedYear] = useState("2021");

    const changeYearHandler = (year) => {        
        setSelectedYear(year);
    }

    const filteredCosts = props.costs.filter(cost => 
        {
            return cost.date.getFullYear().toString() === selectedYear;
    })

    return (
        <div>
            <Card className="costs">
                <CostFilter year={selectedYear} onChangeYear = {changeYearHandler}/>
                <CostsDiagram costs={filteredCosts} />
                <CostList costs={filteredCosts} />
            </Card>       
        </div>   
    )

}

export default Costs;