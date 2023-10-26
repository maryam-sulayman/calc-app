import React, {useState} from "react"
import { useFetch } from "../useFetch";
import "../Styles/FirstTimeBuyer.css"
import { useFormData, ACTIONS } from "../FormDataContext"
import Validation from "./Validation"

const FirstTimeBuyer = () => {
const {data} = useFetch("http://localhost:8000/FirstTimeBuyerQuestion")
const {newState, dispatch}= useFormData()
const [validationMessage, setValidationMessage] = useState("")

 
   const handleRadioInput = (e) => {
      const isValid = Validation(e.target.value);

      if (isValid) {
          dispatch ({
         type: ACTIONS.UPDATE_FIELD,
         field: 'firstTimeBuyer',
         value: e.target.value
      })
      setValidationMessage("");}
      else {
           setValidationMessage("Please Select An Option")
      }

   };

    return ( 
    <div className="first-time-buyer-container">
    <form>
        <h3 className="mt-4 mb-4 fw-bold">Are You a first time buyer?</h3>
        {data ? (data.map((answer,index) => (
         <div key={index}>
            <input
            type="radio"
            value={answer.value}
            name="first-time-buyer-question"
            checked = {newState.firstTimeBuyer === answer.value}
            onChange={handleRadioInput}
            />
            <label htmlFor={answer.value}> {answer.label} </label>
            </div>
        )))
         : (<p>Loading...</p> )}
      <div className="validation-message">
         {validationMessage}
      </div>
    </form>
    </div> 
    );
}
 
export default FirstTimeBuyer;