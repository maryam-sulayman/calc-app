import React from "react"
import "../Styles/TransactionType.css"
import { useFormData, ACTIONS } from "../FormDataContext"
import { useFetch } from "../useFetch";

const TransactionType = () => {
   const {data} = useFetch("http://localhost:8000/TransactionType")
   const {newState, dispatch}= useFormData();

const handleRadioInput = (e) => {
        dispatch( {
            type: ACTIONS.UPDATE_FIELD,  
            field: 'transactionType',
            value: e.target.value})
    }
    
    return ( 
    <div className="transaction-type-container">
        <form>
           {data ? (data.map((type, index) => (
            <div key={index}>
            <input
            type="radio"
            value={type.value}
            name="transaction-type"
            checked={newState.transactionType === type.value}
            onChange={handleRadioInput}
            />
            <label htmlFor={type.value}> {type.label} </label>
            </div>
            ))) : (<p>Loading...</p>)} 
        </form>
    </div> );
}
 
export default TransactionType;