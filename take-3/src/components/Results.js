import React from "react"
import "../Styles/Results.css"

export default function Results(){
    return(
        <div className="results-container">
            <div className="heading">
                <div className="row">
                    <div className="col-6">
                        <h3>Total Estimate:</h3></div> 
                        <div className="col-6"><h1>£66,000</h1></div>
                    </div> 
                    </div>
            <hr/>
            <div className="estimated-costs">
                <div className="row">
                    <div className="col-6">
                        <h3>Energy Performance Certificate (EPC):</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Conveyancing Costs:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Stamp Duty:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Estate Agents Fee:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Building Survey:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Electrical Report:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <h3>Removals:</h3>
                    </div>
                    <div className="col-2">
                        <h3>£50</h3>
                    </div>
                    <div className="col-4">
                        <a href="/">Get EPC Price Comparisons</a>
                    </div>
                </div>
            </div>

         <div className="ending">
            <div className="row">
                <div className="col-3">
                </div>
            <div className="col-9">
            <label>Email me a copy of my results</label>
        <input type="text" value="email" id="email" name="email-address"/> 
        <input type="submit" value="submit"/>
            </div>
            </div>
         </div>
        </div>
    )
}