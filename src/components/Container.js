import React from 'react';
import {getLastPartOfUrl} from '../utils/url';
import PhotoGrid from './PhotoGrid';
import {FLICKR_PUBLIC_FEED_URL, SUFFIX_MEDIUM_500, SUFFIX_SMALL_240, SUFFIX_LARGE_1024,SUFFIX_MEDIUM_640x640,SUFFIX_SMALL_320} from '../constants/flickr'
import $ from 'jquery';
import {InfoElement} from './DefaultInfoElement';

//import 'whatwg-fetch';

const styles = {
    root : {
        display : 'flex',
        flexWrap : 'wrap',
        justifyContent : 'space-around',
    },
    gridList : {
        //width: 500,
        //height: 400,
        overflowY : 'auto',
        marginBottom : 24,
    },
};


class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            photos : [],
            loading : true,
            columns : 2
        };
    }

    componentDidMount() {
        $.getJSON(FLICKR_PUBLIC_FEED_URL)
            .done(response => {
                this.setState({
                    photos : response.items.map(item => ({
                        title : item.title,
                        id : getLastPartOfUrl(item.link),
                        link : item.link,
                        src : item.media.m.replace(SUFFIX_SMALL_240, SUFFIX_SMALL_320),
                        bigSrc : item.media.m.replace(SUFFIX_SMALL_240, SUFFIX_LARGE_1024),
                        author : item.author,
                        created : item.published,
                        tags : item.tags
                    }))
                });
            })
            .fail(() => {
                console.log('error');
            })
            .always(() => {
                this.setState({
                    loading : false
                })
            });
    }

    handlerRequest = (response) => {
        console.log(response.items);
        this.setState({
            photos : response.items
        })
    }

    render() {
        const { photos, loading, columns } = this.state;
        const loadingElement = <div>Loading ... </div>;


        return (
            <div>
                <div className={styles.sizeButtons}>
                    {this.getColumnsElement([1, 2, 3, 5])}
                 </div>
                <br/>
                <br/>

                <br/>
                {loading ? loadingElement : null}
                <div style={styles.root}>
                    {this.getList()}
                </div>
                <PhotoGrid photos={photos} columns={columns} InformationElement={InfoElement}/>
            </div>
        );
    }

    getColumnsElement(columns) {
        return columns.map(value =>
            <button key={value} href="#" onClick={this.onClick(value).bind(this)}>{value}</button>
        );
    }

    getList() {
        if (!this.state.photos) return null;
        return <div>

        </div>
    }

    onClick(value) {
        return function () {
            this.setState({
                columns : value
            })
        };

    }

    onChangeSlider(e, value) {
        this.setState({
            cols : +(value * 10).toFixed(0)
        })
    }
}

export default Container;