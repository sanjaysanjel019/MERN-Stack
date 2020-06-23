const users = [
    {id:41,name:"John Preacher",address:"Copenhagen"},
    {id:322,name:"Phil} Johen",address:"New York  "},
    {id:43,name:"Kevin Durant",address:"Kathmandu"},
    {id:4212,name:"Natasha Portman",address:"New Delhi"},
    {id:56,name:"Anne Lawrence",address:"Jakarta"},
    {id:63,name:"Jennifer Hatheway",address:"Manila"},
    {id:87,name:"Bhuvan Bam",address:"Jhapa"},
    {id:8,name:"Carry Minati",address:"Californiia"},
    {id:99,name:"Loudey Prasad",address:"Mumbai"},
    {id:10,name:"MOhan Judaro",address:"Ohio"}
]

//For Each Demonstration
// users.forEach((user,i)=>{
//     console.log(user.name,i);
// });


//Filter Demonstrations
// const userNameList = [];
// const boss = users.filter(user=> {
//     if(user.id>40){
//         return (user.name)
//         }
// })

// console.log(boss);


// Map Demomstation
const userNames = users.map((user,i) => {
    return(i,user.name)
   })

   const userName = users.map((user,i)=>user.name);
   console.log(userName);



// const mappedUser = users.map(user=>{
//    user.filter(m=>{
//        return m.id>40;
//    })
// })

console.log(mappedUser);

const newUsers = users.filter(function(user)
{
    return (user.id>40)
})

console.log(newUsers);


   