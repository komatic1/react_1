import CostItem from "./CostItem";
import CostFilter from "./CostFilter";
import './Costs.css';
import Card from "../UI/Card";
import React, {useState} from "react";


  const Costs = (props) => {
    
    const [selectedYear, setSelectedYear] = useState("2021");

    const changeYearHandler = (year) => {        
        setSelectedYear(year);
    }

    return (
        <div>
            
            <Card className="costs">
 
                <CostFilter year={selectedYear} onChangeYear = {changeYearHandler}/>

                {props.costs.map((cost) => (
                    <CostItem 
                        key={cost.id}
                        date={cost.date} 
                        description={cost.description} 
                        amount={cost.amount}                 
                    />
                ))}
            </Card>       
        </div>   
    )

}

export default Costs;