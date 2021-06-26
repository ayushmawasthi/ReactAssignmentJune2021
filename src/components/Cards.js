import React ,{Component} from "react";
import "./Style.css"
import PlanCard from "./PlanCard";



const  Cards=()=>
 {
   
    return (
      <div className="plancardholder">
          <PlanCard></PlanCard>
          <PlanCard></PlanCard>
          <PlanCard></PlanCard>
          <PlanCard></PlanCard>
        </div>
    )
    }
  
export default Cards;
