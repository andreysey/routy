import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            // margin: theme.spacing(1),
            // marginBottom: theme.spacing(5),
            // minWidth: 120,
            // minWidth: '19.5ch',
            // maxWidth: '33.5ch',
            // width: '33.5ch',
        },
        selectEmpty: {
            // marginTop: theme.spacing(2),
        },
    }),
);

export default function SelectLoco(props: any) {
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        props.setState(event.target.value as string);
    };

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl} fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Локомотив</InputLabel>
                <Select
                    // autoWidth
                    labelId="simple-select-outlined-label"
                    // id="simple-select-outlined"
                    value={props.state}
                    onChange={handleChange}
                    label="Локомотив"
                    // fullWidth
                >
                    <MenuItem value="">
                        <em>Нет</em>
                    </MenuItem>
                    <MenuItem value={8}>ВЛ-8</MenuItem>
                    <MenuItem value={154}>ВЛ-11м</MenuItem>
                    <MenuItem value={134}>ВЛ-11/8</MenuItem>
                    <MenuItem value={40}>ВЛ-11м6</MenuItem>
                    <MenuItem value={102}>ЧС-2</MenuItem>
                    <MenuItem value={107}>ЧС-7</MenuItem>
                </Select>
                <FormHelperText>код лок-ва ---</FormHelperText>
            </FormControl>
        </div>
    );
}

