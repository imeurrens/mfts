import React from 'react';
import { State as MenuState } from 'react-burger-menu';
import { RouteComponentProps, withRouter } from 'react-router';

import './side-menu.scss';

import contredanseLogo from '@assets/images/logo-contredanse.png';
import ConnectedLangSelector from '@src/components/lang-selector';
import { Button, Toolbar } from '@material-ui/core';

// To not bundle svg
const Menu = require('react-burger-menu/lib/menus/pushRotate');

type Props = {
    isOpen: boolean;
    onStateChange?: (state: MenuState) => void;
    lang: string;
} & RouteComponentProps<any>;

type State = {};

const defaultProps = {
    isOpen: false,
};

const menuItems = {
    home: {
        label: { fr: 'Accueil', en: 'Home' },
        route: '/',
    },
    about: {
        label: { fr: 'A propos', en: 'About' },
        route: '/{lang}/about',
    },
    menu: {
        label: { fr: 'Menu', en: 'Menu' },
        route: '/{lang}/menu',
    },
    list: {
        label: { fr: 'Contenu', en: 'Content' },
        route: '/{lang}/page-list',
    },
    account: {
        label: { fr: 'Login', en: 'Login' },
        route: '/{lang}/login',
    },
};

/*
const menuRoutes = {
    home: (lang: string) => history.push(`/`),
    helix: (lang: string) => history.push(`/${lang}/menu`),
    'page-list': (lang: string) => history.push(`/${lang}/page-list`),
    about: (lang: string) => history.push(`/${lang}/about`),
}*/

export class SideMenu extends React.PureComponent<Props, State> {
    static defaultProps = defaultProps;

    constructor(props: Props) {
        super(props);
    }

    initRoutes(lang: string) {}

    render() {
        const { isOpen, onStateChange } = this.props;

        const { lang } = this.props;

        return (
            <Menu
                width={300}
                isOpen={isOpen}
                onStateChange={onStateChange}
                pageWrapId={'page-wrap'}
                outerContainerId={'outer-container'}
            >
                {Object.entries(menuItems).map(([key, menu]) => {
                    const label = lang === 'fr' ? menu.label.fr : menu.label.en;
                    return (
                        <a
                            className="menu-item"
                            key={key}
                            onClick={() => {
                                this.props.history.push(
                                    menu.route.replace('{lang}', lang)
                                    //'/'
                                );
                            }}
                        >
                            {label}
                        </a>
                    );
                })}

                <ConnectedLangSelector>
                    {({ nextLang, updateLang, currentLang }) => (
                        <>
                            <Button color="inherit">{currentLang}</Button>

                            <Button color="inherit" onClick={() => updateLang(nextLang)}>
                                {nextLang}
                            </Button>
                        </>
                    )}
                </ConnectedLangSelector>

                <img src={contredanseLogo} />
            </Menu>
        );
    }
}

export default withRouter(SideMenu);
