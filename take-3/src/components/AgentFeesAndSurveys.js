import React from "react";
import EstateAgentsFee from "./EstateAgentsFee";
import OptionalSurveys from "./OptionalSurveys";

const AgentFeesAndSurveys = () => {
    return (<div className="container">
       <div className="agent-fees-container">
       <EstateAgentsFee/>
       </div> 
       <div className="optional-surveys-container">
        <OptionalSurveys/>
       </div>
    </div>  );
}
 
export default AgentFeesAndSurveys;