import React, {JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal} from 'react';
import Button from '@mui/material/Button';
import {Link as RouterLink} from 'react-router-dom';

interface ITextButtonProps {
    name?: string;
    variant?: "text" | "outlined" | "contained" | undefined;
    color?: 'inherit'
        | 'primary'
        | 'secondary'
        | 'success'
        | 'error'
        | 'info'
        | 'warning'
        | string
    size?: "small" | "large" | "medium" | undefined;
    startIcon?: ReactElement<any, string | JSXElementConstructor<any>> | string | number | {} | ReactNodeArray | ReactPortal | boolean | null | undefined;
    to?: string | undefined;
    onClick?: React.MouseEventHandler<HTMLAnchorElement> | undefined
}

export default function TextButton(props: ITextButtonProps) {

    return (
            <Button
                sx={{minWidth: 250}}
                component={RouterLink}
                to={props.to || ''}
                variant={props.variant || "contained"}
                size={props.size || "large"}
                startIcon={props.startIcon}
                onClick={props.onClick}
            >
                {props.name || 'Button'}
            </Button>
    )
}
