import 'date-fns';
import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker
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
    id?: any;
}


export default function PickDates(props: IDateProps) {
    const classes = useStyles();

    const handleDateChange = (date: Date | null) => {
        props.setState(date)
    };

    useEffect(()=>{

        const data = localStorage.getItem(`${props.id}`)

        if(data){
            props.setState(JSON.parse(data))
        }

    },[])

    useEffect(()=>{

        localStorage.setItem(`${props.id}`, JSON.stringify(props.state.toString()))

    })

    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
                <Grid container>
                    <KeyboardDatePicker
                        fullWidth
                        autoOk
                        inputVariant="outlined"
                        margin="normal"
                        id={props.id}
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
