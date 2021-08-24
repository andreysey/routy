import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import React from "react";
import AccessTimeIcon from '@material-ui/icons/AccessTime';
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

export default function PickTimes() {
    const classes = useStyles()

    // The first commit of Material-UI
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.root}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Grid container justifyContent="space-around">
                    <KeyboardTimePicker
                        fullWidth
                        ampm={false}
                        autoOk
                        inputVariant="outlined"
                        margin="normal"
                        id="time-picker"
                        // label="Время"
                        value={selectedDate}
                        onChange={handleDateChange}
                        KeyboardButtonProps={{
                            'aria-label': 'change time',
                        }}
                        keyboardIcon={<AccessTimeIcon/>}
                    />
                </Grid>
            </MuiPickersUtilsProvider>
        </div>
    );
}
