//bring in db connection
const db = require("./conn");
const Review = require("./review");
//need a user class
//Classes should start with Uppercase
class User {
  constructor(id, first_name, last_name, email, password) {
    this.id = id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.email = email;
    this.password = password;
  }
  static getById(id) {
    //.any always returns an array
    return db
      .one(`SELECT * from users where id=${id}`)
      .then(userData => {
        const userInstance = new User(
          //must use 'new' keyword when calling a JS constructor
          userData.id,
          userData.first_name,
          userData.last_name,
          userData.email,
          userData.password
        );
        return userInstance;
      })
      .catch(() => {
        return null;
      });
  }

  save() {
    //use .result when you might want a report about how many rows got affected
    return db.result(
      `
      update users set
        first_name='${this.firstName}',
        last_name='${this.lastName}',
        email='${this.email}',
        password='${this.password}'
      where id=${this.id}
    `
    );
    // .catch(() => {
    //   return null;
    // });
  }

  // getReviews() {
  get reviews() {
    return db
      .any(`SELECT * FROM reviews WHERE user_id = ${this.id}`)
      .then(arrayofReviews => {
        // return arrayofReviews.map(reviewData => {
        const arrayOfReviewInstances = [];

        arrayofReviews.forEach(data => {
          const newInstance = new Review(
            data.id,
            data.score,
            data.content,
            data.restaurant_id,
            data.user_id
          );
          arrayOfReviewInstances.push(newInstance);
        });

        return arrayOfReviewInstances;
      });
  }
}

// User.getById(3).then(user => {
//   console.log(user);
// });

//need to export user model
module.exports = User;
