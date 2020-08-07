export const sortData = ()=> {
    return {
        type: "SHORT_DATA"
    }
}

export const setCasesTypeAction = (data)=>{
    return {
        type: "CHANGE_CASES_TYPE",
        payload: data
    }
}