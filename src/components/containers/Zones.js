import React, { Component } from 'react';
import Zone from '../presentation/Zone';
import superagent from 'superagent';

class Zones extends Component {
    constructor() {
        super();

        this.state = {
            zone: {
                name: '',
                zipCodes: '',
                numComments: ''
            },
            list: [
            ]
        }
    }

    componentDidMount() {
        superagent
        .get('/api/zone')
        .query(null)
        .set('Accept', 'application/json')
        .end((err,response) => {
            if (err) {
                alert('ERROR : ' + err);
                return;
            }
            let results = response.body.resource;

            this.setState({
                list: results
            });

            console.log(JSON.stringify(this.state))
        });
    }

    updateZone(event) {
        let updatedZone = Object.assign({}, this.state.zone);
        updatedZone[event.target.id] = event.target.value;

        this.setState({
            zone: updatedZone
        });
    }

    submitZone(event) {
        // console.log('submit zone: ' + JSON.stringify(this.state.zone));
        let updateList = Object.assign([], this.state.list);
        updateList.push(this.state.zone);

        this.setState({list: updateList});
    }

    render() {
        const listItems = this.state.list.map((zone, i) => {
            return(
                <li key={i}><Zone {...zone} /></li>
            );
        });

        return(
            <div>
                <h2>Yik Yak</h2>
                <ol>
                    {listItems}
                </ol>

                <input id="name" onChange={this.updateZone.bind(this)} type="text" placeholder="Name" className="form-control" /><br/>
                <input id="zipCodes" onChange={this.updateZone.bind(this)} type="text" placeholder="Zip Code" className="form-control" /><br/>
                <button onClick={this.submitZone.bind(this)} className="btn btn-danger">Add Zone</button>
            </div>
        );
    }
}

export default Zones;