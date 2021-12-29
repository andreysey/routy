import * as React from 'react';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import {ru} from "date-fns/locale";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

interface IDateProps {
    state?: any;
    setState?: any;
    id?: any;
}

export default function PickTime(props: IDateProps) {

    // const handleChange = (date: any) => {
    //         props.setState(date.getTime())
    // };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                <DateTimePicker
                    mask={''}
                    renderInput={(props) => <TextField {...props} />}
                    label="Дата и время"
                    value={props.state}
                    onChange={(newValue) => {props.setState(newValue.getTime())}}
                 />
        </LocalizationProvider>
    );
}

//
// export default function MaterialUIPickers(props: IDateProps) {
//
//     // const handleChange = (date: any) => {
//     //         props.setState(date.getTime())
//     // };
//
//     return (
//         <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
//             <DateTimePicker
//                 label="Дата и время"
//                 // toolbarTitle={'Дата и время'}
//                 value={props.state}
//                 onChange={(newValue) => {props.setState(newValue.getTime())}}
//                 renderInput={(params) => <TextField {...params} />}
//             />
//         </LocalizationProvider>
//     );
// }
