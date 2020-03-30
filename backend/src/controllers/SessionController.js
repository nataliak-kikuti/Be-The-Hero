const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { id } = request.body;
        const on = await connection('ongs')
        .where('id', id)
        .select0('name')
        .first();

        if(!ongs){
            return response.status(400).jason({error: ' No ONG found with this ID'});
        }
        return response.json(ong);
    }
}