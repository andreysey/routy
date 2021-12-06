import * as React from "react";
import Button from '@mui/material/Button';
import {ArrowBackIosRounded} from "@mui/icons-material";
import {Link as RouterLink} from 'react-router-dom';

interface ITextButtonBack {
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export default function TextButtonBack(props: ITextButtonBack) {

    return (
            <Button
                component={RouterLink} to="/"
                startIcon={<ArrowBackIosRounded/>}
                onClick={props.onClick}
            >
                Назад
            </Button>
    )
}
