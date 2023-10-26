import React from "react";
import { useFetch } from "../useFetch"; 
import "../Styles/Slider.css"
import { useFormData, ACTIONS } from "../FormDataContext"

const SellingPrice = () => {
    const {data} = useFetch("http://localhost:8000/SellingPrice")
    const { newState, dispatch } = useFormData()

   const handleSliderValue = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,  
        field: 'sellingPrice',
        value: e.target.value
})
   }
   const handleInputValue = (e) => {
    dispatch({
        type: ACTIONS.UPDATE_FIELD,  
        field: 'sellingPrice',
        value: e.target.value
})
   }
    return ( 
    <div className="selling-price-container">
         <h3 className='mb-5 fw-bold'> What is the price of the property you're selling?</h3>
        { data ? ( 
        <form>
        <div className="inputs">
        <span class="slider-label">£{data.minimumPrice}</span>
        <input type="range" min={data.minimumPrice} max={data.maximumPrice} value={newState.sellingPrice} onChange={handleSliderValue}/>
        <span class="slider-label">£{data.maximumPrice}</span>
        <input type ="text" value={newState.sellingPrice} onChange ={handleInputValue}/>
        </div>
     </form>) : (<p>Loading</p>)}
    
</div> );
    
}
 
export default SellingPrice;