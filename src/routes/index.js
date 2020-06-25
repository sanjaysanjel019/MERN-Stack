const controller = require('../controller');
module.exports = (app) => {

    app
        .get('/api/users', controller.userslist)
        .post('/api/users', controller.createUser);

    app
        .get('/api/users/:id', controller.userlist)
        .put('/api/users/:id', controller.userUpdate)
        .delete('/api/users/:id', controller.deleteUser)

}