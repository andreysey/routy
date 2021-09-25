import React, {useEffect} from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import TextField, {BaseTextFieldProps} from '@material-ui/core/TextField';


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

    const state = props.state;
    const setState = props.setState;

    useEffect(() => {

        const data = localStorage.getItem(`${props.id}`)

        if (data) {
            setState(JSON.parse(data))
        }

    }, [])

    useEffect(() => {

        localStorage.setItem(`${props.id}`, JSON.stringify(state))

    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState(event.target.value)
    }

    console.log(state)

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
                value={state}
            />
        </form>
    );
}
