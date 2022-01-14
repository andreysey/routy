import React, {useEffect} from 'react';
import TextField, {BaseTextFieldProps} from '@mui/material/TextField';

interface ITextFieldProps extends BaseTextFieldProps {
    state?: any;
    setState?: any;
    id?: any;
}

export default function TextFieldInput(props: ITextFieldProps) {

    const state = props.state;
    const setState = props.setState;

    // useEffect(() => {
    //
    //     const data = localStorage.getItem(`${props.id}`)
    //
    //     if (data) {
    //         setState(JSON.parse(data))
    //     }
    //
    // }, [])
    //
    // useEffect(() => {
    //
    //     localStorage.setItem(`${props.id}`, JSON.stringify(state))
    //
    // })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    return (
        <form  noValidate autoComplete="off">
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
                value={state}
            />
        </form>
    );
}
