const initialState = {
    coins: 0,
    health: 100
};

const actionsArray = [
    { type: 'ADD_COINS', payload: 20 },
    { type: 'SUBTRACT_HEALTH', payload: 5 }
];

const marioReducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_COINS':
            return {
                ...state,
                coins: state.coins + action.payload
            };
        case 'SUBTRACT_COINS':
            return {
                ...state,
                coins: state.coins - action.payload
            };
        case 'ADD_HEALTH':
            return {
                ...state,
                health: state.health + action.payload
            };
        case 'SUBTRACT_HEALTH':
            return {
                ...state,
                health: state.health - action.payload
            };
        default:
            return state;
    }
};

const currentState = actionsArray.reduce(marioReducer, initialState);
console.log(currentState);