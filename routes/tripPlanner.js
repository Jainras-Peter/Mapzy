// routes/tripPlanner.js
const express = require("express");
const router = express.Router();

// Trip Planner landing page - Coming Soon
router.get("/", (req, res) => {
  res.render("tripPlanner", { 
    title: "Trip Planner - Coming Soon",
    features: [
      {
        icon: "🚌",
        title: "Transportation",
        description: "Find buses, trains, flights, and other transport options to your destination"
      },
      {
        icon: "🏨",
        title: "Accommodation",
        description: "Discover hotels, hostels, and other places to stay"
      },
      {
        icon: "🎫",
        title: "Return Tickets",
        description: "Book round-trip tickets and plan your return journey"
      },
      {
        icon: "📅",
        title: "Date Planning",
        description: "Select your travel dates and get personalized recommendations"
      },
      {
        icon: "🗺️",
        title: "Route Optimization",
        description: "Get the best routes and travel times between destinations"
      },
      {
        icon: "💰",
        title: "Budget Planning",
        description: "Estimate costs for your entire trip including transport and accommodation"
      }
    ]
  });
});

module.exports = router;
