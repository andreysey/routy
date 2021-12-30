import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


export default function SelectLoco(props: any) {

    const handleChange = (event: SelectChangeEvent) => {
        props.setState(event.target.value as string);
    };

    return (
        <div>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-outlined-label">Локомотив</InputLabel>
                <Select
                    labelId="simple-select-outlined-label"
                    value={props.state}
                    onChange={handleChange}
                    label="Локомотив"
                    autoWidth
                >
                    <MenuItem value="">
                        <em>Нет</em>
                    </MenuItem>
                    <MenuItem value={'ВЛ 8'}>ВЛ-8</MenuItem>
                    <MenuItem value={'ВЛ 11м'}>ВЛ-11м</MenuItem>
                    <MenuItem value={'ВЛ 11/8'}>ВЛ-11/8</MenuItem>
                    <MenuItem value={'ВЛ 11м6'}>ВЛ-11м6</MenuItem>
                    <MenuItem value={'ЧС 2'}>ЧС-2</MenuItem>
                    <MenuItem value={'ЧС 7'}>ЧС-7</MenuItem>
                </Select>
                <FormHelperText>код лок-ва ---</FormHelperText>
            </FormControl>
        </div>
    );
}

