import React from 'react';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export default function AppBarMain(props: {title: string}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="sticky">
                <Container maxWidth={'sm'}>
                    <Toolbar>
                        {/*<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
                        {/*    <MenuIcon/>*/}
                        {/*</IconButton>*/}
                        <Typography variant="h6" className={classes.title}>
                            {props.title}
                        </Typography>
                        {/*<Button color="inherit">ico</Button>*/}
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
