//const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();

const User = require("../models/user");
const Restaurant = require("../models/restaurant");

// describe("sanity check", function() {
//   it("should be 2", function() {
//     //assert.equal(2, 1+1);
//     expect(1 + 1).to.equal(2);
//   });
// });

describe("users", () => {
  //describe gets 2 arguments
  //1st is a string that prints to the console
  // 2nd is the steps of the test
  it("should be able to retrieve by id", async () => {
    //write something that you wish existed
    const theUser = await User.getById(3);
    // theUser.should.have.length(1);
    theUser.should.be.an.instanceOf(User);
  });

  it("should error if no user by id", async () => {
    const theUser = await User.getById(276345);
    expect(theUser).to.be.null;
  });

  it("should update the user", async () => {
    //grab a user with selected id
    // update the email, save the user, regrab the user, expect new email value
    const theUser = await User.getById(2);
    theUser.email = "new@new.com";
    theUser
      .save()
      .then(async report => {
        const alsoTheUser = await User.getById(2);
        expect(alsoTheUser.email).to.equal("new@new.com");
      })
      .catch(() => {
        return null;
      });
  });
});

describe("restaurant model", () => {
  it("should be able to grab an array of restaurants", async () => {
    //write the code you wish existed
    const arrayOfRestaurants = await Restaurant.getAll();
    expect(arrayOfRestaurants).to.be.instanceOf(Array);
  });
});
