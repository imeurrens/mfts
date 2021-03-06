/*
import React from 'react';

import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';

import {
    AppBar as MaterialAppBar,
    Toolbar,
    IconButton,
    withStyles,
    WithStyles,
    Theme,
    createStyles,
} from '@material-ui/core';

import { Menu as MenuIcon } from '@material-ui/icons';

import helixSvg from '@assets/svg/helix-contredanse.svg';

type MenuLinkProps = {
    path: string;
    label: string;
    active: boolean;
};

type AppBarProps = {
    title: string;
    lang: string;
    onMenuOpenRequest?: () => void;
    // menuLinks: MenuLinkProps[];
};

const styles = (theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        flex: {
            flex: 1,
        },
        menuButton: {
            marginLeft: -5,
            marginRight: 0,
        },
    });

export type AppBarWithStylesProps = AppBarProps & WithStyles<typeof styles>;
export type AppBarWithRouterProps = AppBarProps & RouteComponentProps<{}>;

export const AppBarComponent: React.FC<AppBarWithStylesProps & AppBarWithRouterProps> = props => {
    const { classes, history, lang, onMenuOpenRequest } = props;
    //const currentPath = props.location.pathname;

    return (
        <div className={classes.root}>
            <MaterialAppBar elevation={0} position="fixed" style={{ backgroundColor: 'transparent' }}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={() => {
                            if (onMenuOpenRequest) {
                                onMenuOpenRequest();
                            } else {
                                history.push('/');
                            }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                        onClick={() => {
                            history.push(`/${lang}/menu`);
                        }}
                    >
                        <img src={helixSvg} style={{ fill: 'white' }} />
                    </IconButton>

                    <div id="app-bar-portal-ctn" />
                </Toolbar>
            </MaterialAppBar>
        </div>
    );
};

export const AppBarMui = withStyles(styles)(withRouter(AppBarComponent));
*/
