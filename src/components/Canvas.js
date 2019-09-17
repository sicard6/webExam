import React, { Component } from 'react';
import PostList from "./PostList";

class Canvas extends Component {
    state = {

        menu: [],
        tofollow: [],
        trends: [],
        tweets: [],
        posts: [{
            title: 'title1',
            description: 'dmescription sadfsdafasdf asfdasdfsdf'
        },
        {
            title: 'title2',
            description: 'description sadfsdafasdf asfdasdfsdf'
        },
        {
            title: 'title3',
            description: 'description sadfsdafasdf asfdasdfsdf'
        }]
    }
    componentDidMount() {
        this.getInfo();
    }
    
    getInfo = () => {
        fetch('https://gist.githubusercontent.com/josejbocanegra/36d259fe4a9908c2bda367b5ee9f4ed6/raw/63f9d7c460d09cb22f4299b879b1b868159efff3/tweets.json')
            .then(resp => {
                resp.json().then(data => {
                    this.setState({
                        menu: data.menu,
                        tofollow: data.tofollow,
                        trends: data.trends,
                        tweets: data.tweets,
                    });
                });
            });
    }

    deletePost = (title) => {
        let x = this.state.posts;
        for (let i = 0; i < x.length; i++) {
            if (x[i].title === title) {
                x.splice(i, 1);
                this.setState({
                    tweets: x
                });
                return;
            }
        }
    }

    render() {
        //console.log(this.state.tweets);
        return (
            <div>
                
                <PostList tweetss={this.state.tweets} />
            </div>
        );
    }
}

export default Canvas;