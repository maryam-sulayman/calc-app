import React, { useState } from "react";
import "../App.css"
import "../Styles/Buttons.css"
import HomePage from "./HomePage";
import FirstTimeBuyer from "./FirstTimeBuyer";
import BuyingPrice from "./BuyingPrice";
import PropertyType from "./PropertyType";
import OptionalSurveys from "./OptionalSurveys";
import Results from "./Results";
import NumberOfBedrooms from "./NumberOfBedrooms";
import SellingPrice from "./SellingPrice";
import AgentFeesAndSurveys from "./AgentFeesAndSurveys";
import DistanceMoving from "./DistanceMoving";
import { ACTIONS, useFormData } from "../FormDataContext";


const Steps = () => {
    const [steps, setSteps] = useState(0);
    const {newState, dispatch} = useFormData()
    const transactionType = newState.transactionType ;
    
    const pageContent = {
        buy: [
            <HomePage/>,
            <FirstTimeBuyer/>,
            <BuyingPrice/>,
            <PropertyType/>,
            <OptionalSurveys />,
            <Results/>
        ], 
        sell: [
            <HomePage/>,
            <SellingPrice/>,
            <PropertyType/>,
            <NumberOfBedrooms/>,
            <AgentFeesAndSurveys/>,
            <Results/>
        ],
        buyAndSell: [
            <HomePage/>,
            <BuyingPrice/>,
            <PropertyType/>,
            <SellingPrice/>,
            <PropertyType/>,
            <NumberOfBedrooms/>,
            <DistanceMoving/>,
            <AgentFeesAndSurveys/>,
            <Results/>
        ]
    }
    const nextPage = () => {
        setSteps(steps + 1);
    };
    
    const previousPage = () => {
        setSteps(steps - 1)
    };
    
    const goToResults = () => {
        setSteps(steps + 1);
    };
    
    const retakeSurvey = () => {
        dispatch({
            type: ACTIONS.RESET_FIELD
        })
        setSteps(0)
    };

    const firstButton = steps === pageContent[transactionType].length - 1 
    ? {
        text: "Retake Survey",
        class: "retake-survey-button",
        action: retakeSurvey
    } : {
        text: "Previous",
        class: "previous-button",
        action: previousPage
    } 

    const secondButton = steps === pageContent[transactionType].length - 2
         ? {
            text: "Get Results",
            class: "results-button",
            action: goToResults
        } : 
        {
            text: "Next",
            class: "next-button",
            action: nextPage
        }

    return ( 
    <div className="steps">
        <div className="content-container">
        {pageContent[transactionType][steps]}
  </div>
        <div className="button-container">
        {steps > 0 &&  (
        <button className={firstButton.class} onClick={firstButton.action}
        >
        {firstButton.text}
        </button>
        )}
        {steps < pageContent[transactionType].length - 1 && (
         <button className ={secondButton.class} onClick={secondButton.action}>
         {secondButton.text}
         </button> 
        )}
       
     </div>
    </div> 
    );
}
 
export default Steps;