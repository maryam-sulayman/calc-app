import React from "react"
import { useFetch } from "../useFetch"
import "../Styles/PropertyType.css"
import { useFormData, ACTIONS } from "../FormDataContext"

const PropertyType = () => {
    const {data} = useFetch(" http://localhost:8000/PropertyType")
 const { newState, dispatch } = useFormData()

 const handleRadioInput = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,
        field: 'propertyType',
        value: e.target.value
    })
 }
    return ( 
    <div className="property-type-container">
    <form>
        <h3 className="fw-bold mb-4 mt-4">Freehold or Leashold?</h3>
        { data ? data.map((type, index) => (
            <div key={index}>
            <input type ="radio" 
            name="property-types" 
            value= {type.value}
            checked = {newState.propertyType === type.value}
            onChange = {handleRadioInput}
            />
            <label htmlFor={type.value}> {type.label} </label>
            
        </div>
        
        )) : (<p>Loading...</p>)}
    </form>
    </div> );
}
 
export default PropertyType;