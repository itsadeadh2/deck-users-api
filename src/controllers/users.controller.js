const repository = require('../repository/users.repository');

exports.post = async (req, res, next) => {
    try {
        const { body: payload } = req;
        const user = await repository.postUser(payload);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}