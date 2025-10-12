// models/tripPlanner.js
const mongoose = require("mongoose");

const tripPlannerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  tripName: {
    type: String,
    required: true
  },
  destination: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  transportOptions: [{
    type: {
      type: String, // bus, train, flight, car
      enum: ['bus', 'train', 'flight', 'car']
    },
    provider: String,
    price: Number,
    duration: String,
    departureTime: String,
    arrivalTime: String
  }],
  accommodationOptions: [{
    name: String,
    type: String, // hotel, hostel, airbnb
    price: Number,
    rating: Number,
    address: String,
    amenities: [String]
  }],
  returnOptions: [{
    type: {
      type: String,
      enum: ['bus', 'train', 'flight', 'car']
    },
    provider: String,
    price: Number,
    duration: String,
    departureTime: String,
    arrivalTime: String
  }],
  totalBudget: Number,
  status: {
    type: String,
    enum: ['draft', 'planned', 'booked', 'completed'],
    default: 'draft'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
tripPlannerSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("TripPlanner", tripPlannerSchema);
