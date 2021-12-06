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
    // const [value, setValue] = React.useState<Date | null>(
    //     new Date('2014-08-18T21:11:54'),
    // );

    const handleChange = (newValue: Date | null) => {
        // setValue(newValue);
        props.setState(newValue)
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns} locale={ru}>
            <DateTimePicker
                // label="Date&Time picker"
                value={props.state}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    );
}
