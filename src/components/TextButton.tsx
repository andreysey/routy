import React, {JSXElementConstructor, ReactElement, ReactNodeArray, ReactPortal} from 'react';
import Button from '@mui/material/Button';
import {Link as RouterLink} from 'react-router-dom';

// Component https://material-ui.com/components/buttons/
// API https://material-ui.com/api/button/

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         button: {
//             margin: theme.spacing(1),
//             minWidth: '30ch',
//         },
//     }),
// );

interface IButtonProps {
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
    onClick?: any
}

export default function TextButton(props: IButtonProps) {
    // const classes = useStyles();

    return (
            <Button
                sx={{minWidth: 250}}
                // className={classes.button}
                component={RouterLink}
                to={props.to || ''}
                variant={props.variant || "contained"}
                // color={"primary"}
                // color={props.color || "primary"}
                size={props.size || "large"}
                startIcon={props.startIcon}
                onClick={props.onClick}
                // fullWidth
            >
                {props.name || 'Button'}
            </Button>
    );
}
