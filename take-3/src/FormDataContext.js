import React, {createContext, useContext, useReducer} from "react"

const FormDataContext = createContext();

const initialState = {
    transactionType: "buy",
    firstTimeBuyer: "",
    numberOfBedrooms: "",
    propertyType: "",
    optionalSurveys: "",
    buyingPrice: 300000,
    sellingPrice: 300000,
    estateAgentsFee: 1.5,
    distanceMoving: 50,
};

const ACTIONS = {
    UPDATE_FIELD: 'update-field',
    RESET_FIELD: 'reset'
}

function reducer (state, action) {
    switch (action.type){
        case ACTIONS.UPDATE_FIELD: 
            return {...state, [action.field]: action.value };
        case ACTIONS.RESET_FIELD:
            return initialState;
        default:
        return state;
}
}

export function FormDataProvider ({children}) {
    const [newState, dispatch] = useReducer(reducer, initialState)

    return (
        <FormDataContext.Provider value= {{newState, dispatch}}>
            {children}
        </FormDataContext.Provider>
    );
    
}

export {ACTIONS};
export function useFormData(){
    return useContext(FormDataContext)
}

