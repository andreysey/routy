import React, {useEffect, useState} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField, {BaseTextFieldProps, TextFieldProps} from '@material-ui/core/TextField';
import {datePickerDefaultProps} from "@material-ui/pickers/constants/prop-types";

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

interface ITextFieldProps extends BaseTextFieldProps {
    state?: any;
    setState?: any;
    id?: any;
}

export default function TextFieldInput(props: ITextFieldProps) {
    const classes = useStyles();
    // const [state, setState] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setState(event.target.value)
    }

        // useEffect(() => {
        //     if (typeof props.id === "string") {
        //         const existState = localStorage.getItem(props.id) || JSON.stringify('')
        //         props.setState(JSON.parse(existState))
        //     }
        //
        // }, [])
        //
        //
        // useEffect(() => {
        //         localStorage.setItem({props.id}, props.state)
        //
        // }, [props.state])



    console.log(props)


    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                fullWidth
                id={props.id}
                label={props.label}
                placeholder={props.placeholder}
                helperText={props.helperText}
                type={props.type}
                variant="outlined"
                color="primary"
                onChange={handleChange}
                value={props.state}
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
