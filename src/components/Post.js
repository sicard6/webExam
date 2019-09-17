import React, { Component } from 'react';

class Post extends Component {

    state = {
        avatar: this.props.value.avatar,
        content: this.props.value.content,
        date: this.props.value.date,
        favs: this.props.value.favs,
        first_name: this.props.value.first_name,
        last_name: this.props.value.last_name,
        nick: this.props.value.nick,
        retweets: this.props.value.retweets,
    }

    handleLike = () => {
        this.setState({
            favs: this.state.favs + 1
        })
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <div className='card row' >
                    <div className='col-3'>
                        <img src={this.state.avatar} alt="avatar"/>
                    </div>
                    <div className='col-9'>
                        <div className="card-body">
                            <p><h5 class="card-title">{this.state.first_name}, {this.state.last_name}</h5> {this.state.nick}</p>
                            <p className="card-text">{this.state.content}</p>
                            <p className="card-text">{this.state.favs}</p>
                            <button onClick = {this.handleLike} className= 'btn btn-primary'>like</button>
                        </div>
                    </div>

                </div>
                <br />
            </div>
        );
    }
}

export default Post;