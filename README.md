# 🗺️Mapzy

**Mapzy** is a web application built with **Node.js**, **Express**, **MongoDB**, and **EJS** that helps tourists discover and share places. Users can add details about locations, including photos, descriptions, price, and more. Other users can rate and review those places, making it easier for travelers to plan trips.

---

## Features

- **User Authentication**
  - Secure login/register system using Passport.js
- **Add a Place**
  - Title, description, location, price
  - Upload multiple photos (stored via Cloudinary)
- **View Places**
  - Explore posts added by other users
- **Ratings & Reviews**
  - Star rating system
  - User reviews for each post
- **Interactive Map**
  - Uses MapTiler to display location on a map
- **Responsive UI**
  - Built with Bootstrap for mobile-friendliness

---

## Technologies Used

- **Frontend**: HTML, CSS, EJS, Bootstrap
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js
- **Image Storage**: Cloudinary
- **Maps**: MapTiler API

---

## Installation

 # 1. Clone the repository
    

      git clone https://github.com/Jainras-Peter/Mapze.git
    


  # 2. Install dependencies
    npm install

# 3. Setup Environment Variables
    # Create a .env file and add the following:
    DB_URL=your_mongo_connection_string
    CLOUDINARY_CLOUD_NAME=your_cloudinary_name
    CLOUDINARY_KEY=your_cloudinary_api_key
    CLOUDINARY_SECRET=your_cloudinary_secret
    MAPTILER_API_KEY=your_maptiler_api_key
    SECRET=your_session_secret

# 4. Run the development server
    npm start

# 5. Open in browser
    http://localhost:3000

---

## Deployment

You can access the live app here:  
**[Mapze - Live Site](https://mapzy.onrender.com)**

---

# License

This project is open-source and available under the MIT License.


