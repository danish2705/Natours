const Tour = require("../models/tourModel");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/userModel");
const Review = require("../models/reviewModel");
const AppError = require("../utils/appError");

exports.getOverview = catchAsync(async (req, res, next) => {
  // get tour data from collection
  const tours = await Tour.find();
  // build tempelate
  // render that tempelate using the tour data from step 1
  res.status(200).render("overview", {
    title: "All tours",
    tours,
  });
});

exports.getTour = catchAsync(async (req, res, next) => {
  const tour = await Tour.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    fields: "review rating user",
  });

  if (!tour) {
    return next(new AppError("There is no tour with that name", 404));
  }

  res.status(200).render("tour", {
    title: `${tour.name} Tour`,
    tour,
  });
});

// exports.getUser = (req, res) => {
//   const user = user.find();
//   res.status(200).render("overview", {});
// };

exports.getLoginForm = (req, res, next) => {
  res.status(200).render("login", {
    title: "Log into your account",
  });
};
