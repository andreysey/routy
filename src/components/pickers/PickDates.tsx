import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker, KeyboardDatePickerProps,
} from '@material-ui/pickers';
import ruLocale from "date-fns/locale/ru";
import {createStyles, makeStyles, Theme} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            // margin: theme.spacing(1),
            // marginBottom: theme.spacing(5),
            // minWidth: 130,
            // width: '45ch',
        },
    }),
);
//
interface IDateProps {
    state?: any;
    setState?: any;
}


export default function PickDates(props: IDateProps) {
    const classes = useStyles();

    // The first commit of Material-UI
    // const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    //     props.dateStartShift
    // );



    const handleDateChange = (date: Date | null) => {
        // setSelectedDate(date);
        // props.dispatch({
        //     type: 'update',
        //     payload: {
        //         dateStartShift: date
        //     }
        // })
        props.setState(date)


    };

    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <Grid container>
                    <KeyboardDatePicker
                        fullWidth
                        autoOk
                        inputVariant="outlined"
                        margin="normal"
                        // id="date-picker-dialog"
                        // label="Дата"
                        format="dd-MM-yy"
                        value={props.state}
                        onChange={date => handleDateChange(date)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}

// export default function PickDates(props: IDateProps) {
//     const classes = useStyles();
//
//     // The first commit of Material-UI
//     const [selectedDate, setSelectedDate] = React.useState<Date | null>(
//         new Date(),
//     );
//
//     const handleDateChange = (date: Date | null) => {
//         setSelectedDate(date);
//     };
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
//                         // id="date-picker-dialog"
//                         // label="Дата"
//                         format="dd-MM-yy"
//                         value={selectedDate}
//                         onChange={handleDateChange}
//                         KeyboardButtonProps={{
//                             'aria-label': 'change date',
//                         }}
//                     />
//                 </Grid>
//             </MuiPickersUtilsProvider>
//         </div>
//     );
// }
