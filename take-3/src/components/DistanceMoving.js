import React from "react";
import { useFetch } from '../useFetch'
import { useFormData, ACTIONS } from "../FormDataContext"
import "../Styles/Slider.css"

const DistanceMoving = () => {
    const {data} = useFetch("http://localhost:8000/DistanceMoving")
    const { newState, dispatch } = useFormData()
    
 const handleInputValue = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,
        field: 'distanceMoving',
        value: e.target.value
    })
 }
const handleSliderValue = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,
        field: 'distanceMoving',
        value: e.target.value
    })
}
    return ( <div className="distance-moving-container">
        <h3 className='mb-5 fw-bold'> Distance between properties (miles): </h3>
        { data ? ( 
        <form>
        <div className="inputs">
        <span class="slider-label">{data.start}</span>
        <input type="range" min={data.start} max={data.finish} value={newState.distanceMoving} onChange={handleSliderValue}/>
        <span class="slider-label">{data.finish}</span>
        <input type ="text" value={newState.distanceMoving} onChange ={handleInputValue} />
        </div>
     </form>) : (<p>Loading</p>)}
    </div> );
}
 
export default DistanceMoving;