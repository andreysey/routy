import React from "react";

export const ContextApp = React.createContext({});

export const initialState = {
    dateStartShift: new Date(),
    timeStartShift: new Date(),
    route: '',
}

interface IReducerProps {
    state: any,
    action: {
        type: any,
        payload: any,
    }
}

// state: any, action: { type: any; payload: any; }

export const reducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'update':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
};

//
// export const reducer = (state: any, action: { type: any; payload: any; }) => {
//     switch (action.type) {
//         case 'route_update':
//             return {
//                 ...state,
//                 ...action.payload
//             };
//         default:
//             return state
//     }
// };
