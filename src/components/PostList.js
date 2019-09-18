import React, { Component } from 'react';
import Post from "./Post";

class PostList extends Component {

    componentDidMount(){
    }

    render() {

        return (
            <div className = "container col-4">
                {
                    this.props.tweetss.map((e,i) => <Post value = {e} key = {'hola' + i} />)
                } 
            </div>
        );
    }
}

export default PostList;