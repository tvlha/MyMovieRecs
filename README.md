# MyMovieRecs 🎥

I don't watch a lot of movies because I can never find anything I like, so I decided to build a React-based web app for finding movies based on my watch history. This is powered by TMDB and OpenAI APIs for the movie database and the AI-powered recommendations. Users can explore trending movies, add their favorites, and receive personalized recommendations on what they like to watch.

## Features
- **Trending Movies**: View the latest trending movies with posters and titles.
- **Search Functionality**: Dynamically search for movies using TMDB's API.
- **Favorites**: Add/remove movies to/from your favorites list.
- **AI-Powered Recommendations**: Get personalized movie recommendations based on your favorites, powered by OpenAI's GPT.

## Technologies Used
- **React**: Frontend framework.
- **TMDB API**: Movie database and search functionality.
- **OpenAI API**: Personalized AI-powered movie recommendations.
- **TailwindCSS**: Styling for the dark-themed UI.

## Setup Instructions
> I do intend to deploy this application once I spend some more time refining it and adding all of the functionality that users would want to see.

1. Clone the repository:
   ```bash
   git clone https://github.com/tvlha/MyMovieRecs
   cd MyMovieRecs
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file in the root directory with the following:
   ```bash
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   REACT_APP_OPENAI_API_KEY=your_openai_api_key
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Features to Implement
- **Better UI**
- **Improved AI recommendations with additional metadata**
- **Log-in feature to save favorites**
- **Movie posters with AI recommendations**
- **Live deployment**

## Contributing
Feel free to fork the repository and submit a pull request for any enhancements!

## License
This project is licensed under the MIT License.
