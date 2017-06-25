import React, { Component } from 'react';
import Comment from '../presentation/Comment';
import styles from './style';

class Comments extends Component {
    constructor() {
        super();

        this.state = {
            comment: {
                username: '',
                body: '',
                created_at: ''
            },
            list: []
        }
    }

    submitComment(event) {
        // console.log('submit comment: ' + JSON.stringify(this.state.comment));
        let updateList = Object.assign([], this.state.list);
        updateList.push(this.state.comment);

        this.setState({list: updateList});
    }
    
    updateUsername(event) {
        this.state.comment.username = event.target.value;  // katanya WRONG, tapi jalan

        // katanya TRUE, tapi kepanjangan
        // let updateComment = Object.assign({}, this.state.comment);
        // updateComment.username = event.target.value;

        // this.setState({
        //     comment: updateComment
        // });
    }

    updateComment(event) {
        this.state.comment.body = event.target.value;
    }

    updateCreatedAt(event) {
        this.state.comment.created_at = event.target.value;
    }

    render(){
        const listItems = this.state.list.map((comment, i) => {
            return(
                <li key={i}>
                    <Comment {...comment} />
                </li>
            );
        });

        const style = styles.comment;

        return(
            <div>
                <h2>Comments: Zone 1</h2>
                <div style={style.commentsBox}>
                    <ul style={style.listBox}>
                        {listItems}
                    </ul>

                    <input onChange={this.updateUsername.bind(this)} className="form-control" type="text" placeholder="Username" /><br/>
                    <input onChange={this.updateComment.bind(this)} className="form-control" type="text" placeholder="Comment" /><br/>
                    <input onChange={this.updateCreatedAt.bind(this)} className="form-control" type="text" placeholder="Created At" /><br/>
                    <button onClick={this.submitComment.bind(this)} className="btn btn-info" >Submit Comment</button>
                </div>
            </div>
        );
    }
}

export default Comments;