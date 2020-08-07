const { combineReducers } = require("redux");
const { default: countryReducer } = require("./countryReducer");


const rootReducer = combineReducers({
    country: countryReducer
})

export default rootReducer