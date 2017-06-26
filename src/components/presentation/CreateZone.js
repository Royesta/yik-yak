import React, {Component} from 'react';

class CreateZone extends Component {
    constructor() {
        super();
        this.state = {
            zone: {

            }
        }
    }

    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;

        this.setState({
            zone: updatedZone
        });
    }

    submitZone(event) {
        let updated = Object.assign({}, this.state.zone);
        this.props.onCreate(updated);
    }

    render() {
        return(
            <div>
                <h3>Create Comment</h3>
                <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" className="form-control" /><br/>
                <input id="zipCodes" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" className="form-control" /><br/>
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
            </div>
        );
    }
}

export default CreateZone;