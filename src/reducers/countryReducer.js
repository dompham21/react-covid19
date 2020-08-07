const initialState = {
    isShortDescending: true,casesType: "cases"
}

const countryReducer = (state = initialState,action)=>{
    switch (action.type){
        case "SHORT_DATA":
            return {...state,isShortDescending: !state.isShortDescending};
        case "CHANGE_CASES_TYPE":
            return {...state,casesType: action.payload}
        default:
            return state;
    }
}




export default countryReducer;
