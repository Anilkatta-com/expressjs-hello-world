/**
 * Module dependencies
 */

// ...


/**
 * users/login.js
 *
 * Login users.
 */
module.exports = async function login(req, res) {

  var user = await Users.findOne({email:req.body.email,password:req.body.password})

  // sails.log.debug('TODO: implement');
  // return res.ok();
  console.log(user)
  // if(req.body.email === 'admin@indstack.com' &&
  // req.body.password === 'Admin@678'){
    if(user){
    return res.send({
      status:true,
       data:user,
      // {
      //   // name:"Anil Katta",
      //   // email:"admin@indtasck.com",
      //   // city:"Hyderabad"
      // },
      message:"Login Successful"
    })
  }
  else{
    return res.send({
      status:false,
      message:"Email/password does not match"
    
    })
  }

};
