import React from 'react';
import { PageOverlay } from '@src/components/page-overlay';
import { SearchBox } from '@src/components/search-box';
import { IJsonPage } from '@data/json/data-pages';
import PageList from '@src/components/page-list';
import { withRouter } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import LocalDataRepository from '@src/models/repository/local-data-repository';

type PageListContainerProps = {
    dataRepository: LocalDataRepository;
    videosBaseUrl: string;
    lang: 'en' | 'fr';
} & RouteComponentProps<any>;

type PageListContainerState = {
    pages: IJsonPage[];
    lang: 'en' | 'fr';
    selectedPage?: IJsonPage;
    searchFragment?: string;
};

class PageListContainer extends React.Component<PageListContainerProps, PageListContainerState> {
    constructor(props: PageListContainerProps) {
        super(props);

        this.state = {
            pages: this.props.dataRepository.getAllPages(),
            lang: this.props.lang,
        };
    }

    updateSearch = (e: React.SyntheticEvent<HTMLInputElement>) => {
        e.preventDefault();
        e.persist();
        const fragment = e.currentTarget.value;
        const pages = this.props.dataRepository.findPages(fragment, this.props.lang);
        this.setState({
            pages: pages,
            searchFragment: fragment,
        });
    };

    openPage = (page: IJsonPage) => {
        this.props.history.push(`/page/${page.page_id}`);
        /*
        this.setState((prevState): HomeContainerState => ({
            ...prevState,
            selectedPage: page,
        }));
        */
    };

    closePage = () => {
        this.setState(
            (prevState): PageListContainerState => ({
                ...prevState,
                selectedPage: undefined,
            })
        );
    };

    render(): JSX.Element {
        const { pages, selectedPage } = this.state;
        const searchBoxStyle = {
            position: 'fixed',
            top: '70px',
            right: '25px',
            width: '150px',
        } as React.CSSProperties;

        return (
            <PageOverlay>
                <PageList
                    baseUrl={this.props.videosBaseUrl}
                    pages={pages}
                    lang={this.state.lang}
                    onSelected={page => this.openPage(page)}
                />
                {selectedPage === undefined && (
                    <div style={searchBoxStyle}>
                        <SearchBox onChange={this.updateSearch} />
                    </div>
                )}
            </PageOverlay>
        );
    }
}

export default withRouter<PageListContainerProps & RouteComponentProps<any>>(PageListContainer);
