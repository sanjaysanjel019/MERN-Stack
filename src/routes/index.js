const controller = require('../controller');
const {
    auth
} = require('../middleware/auth');
module.exports = (app) => {

    app
        .get('/api/users', controller.userslist)
        .post('/api/users', auth, controller.createUser);

    app
        .get('/api/users/:id', controller.userlist)
        .put('/api/users/:id', auth, controller.userUpdate)
        .delete('/api/users/:id', auth, controller.deleteUser)

    //User Login part
    app
        .post('/api/login', auth, controller.userLogin);

}