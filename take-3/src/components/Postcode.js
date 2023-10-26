import React, { useState } from "react"
import "../Styles/Postcode.css"

const Postcode = () => {
   const [postcode, setPostcode]= useState("")

 const handleInput = (e) => {
    setPostcode(e.target.value)
 }
 console.log(postcode)

    return ( <div className="postcode-container">
        <form>
            <input
            className="form-control" 
            type="text"
            required
            value = {postcode}
            onChange={handleInput}
            />
        </form>
    </div> );
}
 
export default Postcode;