// routes/places.js
const express = require("express");
const router = express.Router();
const { getJson } = require("serpapi");
const Place = require("../models/place");

// Landing page for Explore with search form
router.get("/", (req, res) => {
  res.render("place", { city: null, places: [], message: null });
});

// Search endpoint by query (?city=...)
router.get("/search", (req, res) => {
  const city = (req.query.city || "").trim();
  if (!city) {
    return res.render("place", { city: null, places: [], message: "Please enter a city to explore." });
  }
  return res.redirect(`/places/${encodeURIComponent(city)}`);
});

// Fetch tourist places for a given city
router.get("/:city", async (req, res) => {
  const city = req.params.city;

  try {
    // Check cached data first
    let places = await Place.find({ city });

    if (places.length === 0) {
      console.log(`Fetching new tourist places for ${city}...`);

      await getJson(
        {
          engine: "google_maps",
          q: `tourist attractions in ${city}`,
          hl: "en",
          api_key: process.env.SERPAPI_KEY,
        },
        async (json) => {
          const results =
            json.local_results?.map((p) => ({
              name: p.title,
              category: p.type,
              rating: p.rating,
              reviews: p.reviews,
              address: p.address,
              lat: p.gps_coordinates?.latitude,
              lon: p.gps_coordinates?.longitude,
              thumbnail: p.thumbnail,
              city,
            })) || [];

          if (results.length === 0) {
            return res.render("place", {
              city,
              places: [],
              message: "No tourist spots found.",
            });
          }

          await Place.insertMany(results);
          console.log(`Saved ${results.length} new places for ${city}`);
          return res.render("place", { city, places: results, message: null });
        }
      );
    } else {
      console.log(`Loaded cached places for ${city}`);
      return res.render("place", { city, places, message: null });
    }
  } catch (err) {
    console.error(err);
    return res.render("place", {
      city,
      places: [],
      message: "Error fetching tourist places.",
    });
  }
});

module.exports = router;
