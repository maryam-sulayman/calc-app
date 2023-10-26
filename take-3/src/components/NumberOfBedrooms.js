import React from "react";
import { useFetch } from "../useFetch";
import "../Styles/NumberOfBedrooms.css"
import { useFormData, ACTIONS } from "../FormDataContext"

const NumberOfBedrooms = () => {
    const {data} = useFetch("http://localhost:8000/NumberOfBedrooms")
    const {newState, dispatch}= useFormData()

    const handleRadioInput = (e) => {
        dispatch({
            type: ACTIONS.UPDATE_FIELD,
            field: 'numberOfBedrooms',
            value: e.target.value
        })
    }

    return ( 
    <div className="no-of-bedrooms-container">

<form>
<h3 className="mt-4">Number Of Bedrooms</h3>
  {data ? (
    <ul>
      {data.map((bedroomNumber, index) => (
        <li key={index}>
          <input
            type="radio"
            name="number-of-bedrooms"
            value={bedroomNumber.value}
            checked={newState.numberOfBedrooms === bedroomNumber.value}
            onChange={handleRadioInput}
          />
          <label htmlFor={bedroomNumber.value}>{bedroomNumber.label}</label>
        </li>
      ))}
    </ul>
  ) : (
    <p>Loading...</p>
  )}
</form>


    </div> );
}
 
export default NumberOfBedrooms;