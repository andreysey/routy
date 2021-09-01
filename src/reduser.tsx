import React from "react";

export const ContextApp = React.createContext({});

export const initialState = {
    app: {
        test: 'test_context',
        id: 0,
        startShift: {
            date: 0,
            time: 0,
            route: 0,
        },
    }
}


export const reducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'test_update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};
