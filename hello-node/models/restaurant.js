const db = require("./conn");

class Restaurant {
  constructor(id, name, address, city, state, phone, menu, picture) {
    this.id = id;
    this.name = name;
    this.address = address;
  }

  static getAll() {
    //db.any returns 0 or more results in an array
    // but that's async, so we `return` the call to db.any
    return db
      .any(
        `
            SELECT * FROM restaurants
        `
      )
      .then(restaurants => {
        let bunchOfRestaurants = restaurants.map(oneRestaurant => {
          let r = new Restaurant(
            oneRestaurant.name,
            oneRestaurant.address,
            oneRestaurant.city,
            oneRestaurant.state,
            oneRestaurant.phone,
            oneRestaurant.menu,
            oneRestaurant.pic
          );
          return r;
        });
        return bunchOfRestaurants;
      });
  }
}

module.exports = Restaurant;
