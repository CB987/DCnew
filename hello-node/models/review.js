const db = require("./conn");
const Restaurant = require("./restaurant");

class Review {
  constructor(id, score, content, restaurant_id, user_id) {
    //i want this.whatevs to be camelcase bc my properties should follow js style
    this.id = id;
    this.score = score;
    this.content = content;
    this.restaurantId = restaurant_id;
    this.userId = user_id;
  }

  static getById(id) {
    return db.one(`select * from reviews where id=${id}`).then(reviewData => {
      return new Review(
        reviewData.id,
        reviewData.score,
        reviewData.content,
        reviewData.restaurant_id,
        reviewData.user_id
      );
    });
  }

  static getAll() {
    //   get reviews() {
    return db.any(`select * from reviews`).then(arrayOfReviews => {
      return arrayOfReviews.map(reviewData => {
        return new Review(
          reviewData.id,
          reviewData.score,
          reviewData.content,
          reviewData.restaurant_id,
          reviewData.user_id
        );
        //if you want to have console.logs, then you need the variable declarations and console.log variable.
      });
    });
  }
}

module.exports = Review;
