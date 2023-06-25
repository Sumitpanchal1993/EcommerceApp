const defaultState = []

function cartAddbtn(state = defaultState, action){
    switch (action.type) {
        case addToCart:
            return(
                state = [action.payload]

            )
            break;
    
        default:
            break;
    }
}