// import 'date-fns';
// import React, {useEffect} from 'react';
// import Grid from '@material-ui/core/Grid';
// import DateFnsUtils from '@date-io/date-fns';
// import {
//     MuiPickersUtilsProvider,
//     KeyboardDatePicker
// } from '@material-ui/pickers';
// import ruLocale from "date-fns/locale/ru";
// import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";
//
// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             // margin: theme.spacing(1),
//             // marginBottom: theme.spacing(5),
//             // minWidth: 130,
//             // width: '45ch',
//         },
//     }),
// );
//
// //
// interface IDateProps {
//     state?: any;
//     setState?: any;
//     id?: any;
// }
//
//
// export default function PickDates(props: IDateProps) {
//     const classes = useStyles();
//
//     const handleDateChange = (date: Date | null) => {
//         props.setState(date)
//     };
//
//     useEffect(()=>{
//
//         const data = localStorage.getItem(`${props.id}`)
//
//         if(data){
//             props.setState(JSON.parse(data))
//         }
//
//     },[])
//
//     useEffect(()=>{
//
//         localStorage.setItem(`${props.id}`, JSON.stringify(props.state.toString()))
//
//     })
//
//     return (
//         <div className={classes.root}>
//             <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
//                 <Grid container>
//                     <KeyboardDatePicker
//                         fullWidth
//                         autoOk
//                         inputVariant="outlined"
//                         margin="normal"
//                         id={props.id}
//                         // label="Дата"
//                         format="dd-MM-yy"
//                         value={props.state}
//                         onChange={date => handleDateChange(date)}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                 </Grid>
//             </MuiPickersUtilsProvider>
//         </div>
//     );
// }



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

export default function MaterialUIPickers(props: IDateProps) {

    // const handleChange = (date: any) => {
    //         props.setState(date.getTime())
    // };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
                <DateTimePicker
                    label="Дата и время"
                    // toolbarTitle={'Дата и время'}
                    value={props.state}
                    onChange={(newValue) => {props.setState(newValue.getTime())}}
                    renderInput={(params) => <TextField {...params} />}
                 />
        </LocalizationProvider>
    );
}
