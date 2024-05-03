/**
 * Module dependencies
 */

// ...


/**
 * employee/signin.js
 *
 * Signin employee.
 */
module.exports = async function signin(req, res) {
 console.log(req.body)

//   sails.log.debug('TODO: implement');
  return res.ok();

};
// var user = await Users.findOne({email:req.body.email,password:req.body.password,repeatpassword:req.body.repeatpassword})

// // sails.log.debug('TODO: implement');
// // return res.ok();
// console.log(user)
// if(req.body.email === 'admin@indstack.com' &&
// req.body.password === 'Admin@678'){
//   if(user){
//   return res.send({
//     status:true,
//      data:user,
//     {
//       // name:"Anil Katta",
//       // email:"admin@indtasck.com",
//       // city:"Hyderabad"
//     },
//     message:"Registration Successful"
//   })
// }
// else{
//   return res.send({
//     status:false,
//     message:"Enter proper email/password"
  
//   })
// }



// const Users = require('./path/to/Users'); // Import the Users model or adjust the import path accordingly

// module.exports = async function signin(req, res) {
//     try {
//         // Find user based on provided email and password
//         var user = await Users.findOne({
//             email: req.body.email,
//             password: req.body.password,
//             repeatpassword: req.body.repeatpassword // Note: this may not be a typical use case, consider if you really need to check repeatpassword
//         });

//         if (user) {
//             // If user is found, send success response
//             return res.send({
//                 status: true,
//                 data: user,
//                 message: "Signin Successful"
//             });
//         } else {
//             // If user is not found, send error response
//             return res.send({
//                 status: false,
//                 message: "Invalid email/password combination"
//             });
//         }
//     } catch (error) {
//         // Handle any unexpected errors
//         console.error("Error occurred during sign-in:", error);
//         return res.status(500).send({
//             status: false,
//             message: "An error occurred during sign-in"
//         });
//     }
// };