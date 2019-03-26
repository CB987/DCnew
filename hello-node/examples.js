const db = require("./conn");

function getUserById(theID) {
  // const theID = 3;

  return db.any(`SELECT * from users where id=${theID}`);

  //in order to be able to .then and chain functions, function needs to contain 'return' (line 6)
  // getUserById(3).then(function(aUser) {
  //   console.log(aUser);
  //   getUserById(4).then(function(bUser) {
  //     console.log(bUser);
  //   });
  // });
  // .catch(function(error) {
  //error;
  // });
}
// getUserById(1).then(console.log);

function getUserByIdPublic(theID) {
  return db.any(`
        SELECT u.first_name, r.content 
        FROM users u
        INNER JOIN reviews r
        ON u.id 
        = r.user_id
        WHERE u.id = ${theID};
    `);
}
// getUserByIdPublic(1).then(console.log);

function userFaves(theID) {
  return db.any(`
        SELECT u.first_name, r.name
        FROM users u
        INNER JOIN favorites f
        ON u.id = f.user_id
        INNER JOIN restaurants r
        ON f.restaurant_id = r.id
        WHERE u.id = ${theID}; 
    `);
}
userFaves(1).then(console.log);
