import React, {useEffect, useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, {BaseTextFieldProps, TextFieldProps} from '@material-ui/core/TextField';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                // margin: theme.spacing(2),
                // width: '34ch',
            },
        },
    }),
);

interface ITextFieldProps extends BaseTextFieldProps{
    valueProps?: any;
}

export default function TextFieldInput(props: ITextFieldProps) {
    const classes = useStyles();
    const [state, setState] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    // useEffect(() => {
    //     const existState = localStorage.getItem('state') || JSON.stringify('')
    //     props.setState.startShift.route(JSON.parse(existState))
    // }, [])
    //
    // // useEffect(() => {
    // //     fetch('https://jsonplaceholder.typicode.com/todos/1')
    // //         .then(response => response.json())
    // //         .then(json => {
    // //             console.log(json)
    // //             setRouteNum(json.completed)
    // //         })
    // // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('state', props.state.startShift.route)
    // }, [props.state.startShift.route])
    //
    console.log(props.valueProps)


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                fullWidth
                label={props.label}
                placeholder={props.placeholder}
                helperText={props.helperText}
                type={props.type}
                variant="outlined"
                color="primary"
                onChange={handleChange}
                value={state}
            />
        </form>
    );
}
// fullWidth
// // id="outlined-basic"
// label="Маршрут"
// placeholder="Номер"
// // helperText="Номер"
// type="number"
// variant="outlined"
// color="primary"
// onChange={handleChange}
// value={state}
