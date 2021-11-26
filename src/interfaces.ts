
export interface IRout {
    id: any
    startShift: {
        date: any
        time: any
        route: any
    }
}

// export declare namespace JSX {
//     interface IntrinsicElements {
//         id: number
//         shiftStart: {
//             date: number
//             time: number
//             route: number
//         }
//     }
// }

export interface ICards {
    title?: string
    info?: string | Date | null | undefined
    id?: number
}
