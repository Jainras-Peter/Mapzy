# Mapzy - Travel & Places Discovery Platform

A comprehensive travel platform for discovering places, planning trips, and exploring tourist attractions.

## Features

- 🏕️ **Campground Discovery** - Find and explore campgrounds
- 🗺️ **Place Explorer** - Search tourist attractions by city using Google Maps API
- 🚀 **Trip Planner** - Coming soon feature for comprehensive trip planning
- 👤 **User Authentication** - Google OAuth and local authentication
- 📝 **Reviews & Ratings** - User reviews for places and campgrounds

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Database
DB_URL=mongodb://localhost:27017/mapzy

# Session Secret
SECRET=your-super-secret-key-here

# Google OAuth
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# SerpAPI (for place search)
SERPAPI_KEY=your-serpapi-key

# MapTiler (for maps)
MAPTILER_API_KEY=your-maptiler-api-key
```

## Deployment on Vercel

### Prerequisites
1. MongoDB Atlas account (for production database)
2. Vercel account
3. All required API keys

### Steps to Deploy

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect it's a Node.js project

3. **Set Environment Variables in Vercel**
   - Go to your project dashboard on Vercel
   - Navigate to Settings > Environment Variables
   - Add all the environment variables from your `.env` file
   - Make sure to use your production MongoDB Atlas URL for `DB_URL`

4. **Update Google OAuth Callback URL**
   - In your Google Cloud Console, update the callback URL to:
   `https://your-app-name.vercel.app/auth/google/callback`

5. **Deploy**
   - Vercel will automatically deploy on every push to main branch
   - Or manually trigger deployment from the Vercel dashboard

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## API Endpoints

- `GET /` - Home page
- `GET /campgrounds` - List all campgrounds
- `GET /places` - Explore places (coming soon)
- `GET /trip-planner` - Trip planner (coming soon)
- `GET /login` - Login page
- `GET /register` - Registration page

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: Passport.js (Local + Google OAuth)
- **Templates**: EJS
- **Styling**: Bootstrap 5
- **Maps**: MapTiler
- **Image Storage**: Cloudinary
- **External APIs**: SerpAPI (Google Maps), Google OAuth

## Project Structure

```
├── app.js                 # Main application file
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies and scripts
├── models/               # Database models
├── routes/               # Route handlers
├── views/                # EJS templates
├── public/               # Static assets
├── middleware.js         # Custom middleware
└── utils/                # Utility functions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

ISC