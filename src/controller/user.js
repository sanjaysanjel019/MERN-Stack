exports.userslist = (req,res)=>{
    // res.send('Multiple Users list');
    res.render('index',{title:'Hey',msg:'Nora Fateh'});
}

exports.createUser = (req,res)=>{
    res.send('Usere Created');
}

exports.userlist = (req,res)=>{
     
    res.send('User list');
}

exports.userUpdate = (req,res)=>{
     
    res.send('User Update');
}