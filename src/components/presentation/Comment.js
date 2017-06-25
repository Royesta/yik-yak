import React, { Component } from 'react';
import styles from './style';

class Comment extends Component {
    render() {
        const style = styles.zone;

        return(
                        <div>
                            <p style={{fontSize: 20, fontWeight:400}}>{this.props.body}</p>
                            <span style={{fontWeight: 200}}>{this.props.username}</span>
                            <span style={{fontWeight: 200,marginLeft: 12, marginRight: 12}}>|</span>
                            <span style={{fontWeight: 200}}>{this.props.created_at}</span>

                            <hr />
                        </div>
                    
        );
    }
}

export default Comment;