
const initialState = {
    currentUser: { firstName: "redux", lastName: "test" },
    gridItemOne: "gridItemOne",
    gridItemTwo: "gridItemTwo",
    gridItemThree: "gridItemThree"
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "setUser":
            return { ...state, currentUser: action.payload }
        default: return state
    }
}

export default reducer;