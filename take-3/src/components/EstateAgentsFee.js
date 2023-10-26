import React from "react"
import "../Styles/EstateAgentFees.css"
import { useFormData, ACTIONS } from "../FormDataContext"

const EstateAgentsFee = () => {
const {newState, dispatch} = useFormData()

 const handleInputValue = (e) => {
    dispatch ({
        type: ACTIONS.UPDATE_FIELD,
        field: 'estateAgentsFee',
        value: e.target.value
    })
 }
    return ( 
    <div className="estate-agents-fee-container">
    <label>Estate Agents Fee (%)</label>
    <input type="text" 
    onChange ={handleInputValue}
    value={newState.estateAgentsFee}
    required
    />
    </div> );
    }
    

export default EstateAgentsFee;