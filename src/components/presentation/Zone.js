import React, { Component } from 'react';
import styles from './style';

class Zone extends Component {
    render() {
        const style = styles.zone;

        return(
                        <div style={style.container}>
                            <h2 style={style.header}>
                                <a style={style.title} href="#">{this.props.name}</a>
                            </h2>
                            <span className="detail">{this.props.zipCodes}</span> <br />
                            <span className="detail">{this.props.numComments} comments</span>
                        </div>
                    
        );
    }
}

export default Zone;