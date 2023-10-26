import React from "react"
import { useFetch } from "../useFetch"
import "../Styles/OptionalSurveys.css"
import { useFormData, ACTIONS } from "../FormDataContext"

const OptionalSurveys = () => {
    const {data} = useFetch("http://localhost:8000/OptionalSurveys")
    const { newState, dispatch } = useFormData()

 const handleRadioInput = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,
        field: 'optionalSurveys',
        value: e.target.value
    })
 }
    return ( 
    <div className="optional-surveys-container">
        <form>
        <h3 className="fw-bold mb-4 mt-4">Include Optional Surveys?</h3>
            { data ? ( data.map ((type, index) => (
                 <div key={index}>
                 <input type ="radio"
                 value={type.value} 
                 name="optional-surveys"
                 checked = {newState.optionalSurveys === type.value}
                 onChange = {handleRadioInput}
                 />
                 <label htmlFor={type.value}>{type.label}</label>
             </div>
            ))) : (<p>Loading...</p>)}
        </form>
    </div> );
}
 
export default OptionalSurveys;