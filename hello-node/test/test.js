//const assert = require('assert');
const chai = require("chai");
const expect = chai.expect;
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised).should();

const User = require("../models/user");
const Restaurant = require("../models/restaurant");
const Review = require("../models/review");

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
    // grab a user with id 2
    const theUser = await User.getById(2);
    // update the email
    theUser.email = "new@new.com";
    // save the user
    await theUser.save();
    const alsoTheUser = await User.getById(2);
    expect(alsoTheUser.email).to.equal("new@new.com");
    // theUser.save()
    //     .then(async (report) => {
    //         // console.log(report);
    //         // re-grab the user with id 2
    //         const alsoTheUser = await User.getById(2);
    //         // expect the email to be equal to the new value
    //         expect(alsoTheUser.email).to.equal('new3asdfadf@new.com');
    //     });
  });
});

describe("restaurant model", () => {
  it("should be able to grab an array of restaurants", async () => {
    //write the code you wish existed
    const arrayOfRestaurants = await Restaurant.getAll();
    expect(arrayOfRestaurants).to.be.instanceOf(Array);
  });
});

describe("reviews", () => {
  //can i get one review?
  it("should be able to retrieve a review by id", async () => {
    //hopes and dreams
    const thatReview = await Review.getById(2);
    expect(thatReview).to.be.an.instanceOf(Review);
  });
  //can i get all reviews?
  it("should be able to retrieve all reviews", async () => {
    const aBunchOfReviews = await Review.getAll();
    expect(aBunchOfReviews).to.be.an.instanceOf(Array);
    //and make sure each of them is an array
    //use a plain for loop, so that the exception does not get swallowed by a .forEach callback
    for (let i = 0; i < aBunchOfReviews.length; i++) {
      expect(aBunchOfReviews[i]).to.be.an.instanceOf(Review);
    }
  });
});

//can i get a review by user?
describe("users and reviews", () => {
  it("should be able to get reviews from a specific user", async () => {
    //grab a user by id 3
    const theUser = await User.getById(1);
    //then get all their reviews
    const theReviews = await theUser.reviews;
    //confirm that their reviews are in an array
    expect(theReviews).to.be.an.instanceOf(Array);
    console.log(theReviews);
    //and that they array is the correct length
    expect(theReviews).to.be.length(2);
    //and that each one is an instance of Review
    for (let i = 0; i < theReviews.length; i++) {
      expect(theReviews[i]).to.be.an.instanceOf(Review);
    }
  });
});
