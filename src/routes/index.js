// const {userlist,createUser} = require('../controller/user');
const controller = require('../controller'); 
module.exports = (app) => {
    // app.get('/', index);
    app
    .get('/api/users', controller.userslist)
    .post('/api/users',controller.createUser);

    app
    .get('/api/users/:id',controller.userlist)
    .put('/api/users/:id',controller.userUpdate)
    
}