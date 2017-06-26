import superagent from 'superagent';

export default {
    get: (url, params, callback) => {
        superagent
        .get(url)
        .query(params)
        .set('Accept', 'application/json')
        .end((err,response) => {
            if (err) {
                callback({message: err}, null);
                return;
            }

            const confirmation = response.body.confirmation;
            if (confirmation != 'success') {
                callback({message: response.body.resource}, null);
                return;
            }

            callback(null, response.body.resource);
        });
    },
    post: (url, body, callback) => {
        superagent
        .post(url)
        .send(body)
        .set('Accept', 'application/json')
        .end((err, response) => {
            if (err) {
                callback({message: err}, null);
                return;
            }

            const confirmation = response.body.confirmation;
            if (confirmation != 'success') {
                callback({message: response.body.resource}, null);
                return;
            }

            callback(null, response.body.resource);
        });
    },
    put: () => {},
    delete: () => {},
}