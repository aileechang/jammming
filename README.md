# JAMMMING: Create and Save Playlists with Spotify

JAMMMING is a web application that lets you search for songs using the Spotify API and build custom playlists. You can then save those playlists directly to your Spotify account.

## Features

- **Effortlessly search for songs**: Find any song by simply typing a search term.
- **Craft personalized playlists**: Create custom playlists to suit your mood or occasion.
- **Seamless integration with Spotify**: Seamlessly transfer your curated playlists to your Spotify account.

## Technologies Used

- **React**: For user-friendly and responsive interface.
- **Spotify API**: To power song searches and playlist management.
- **CSS**: To define the visual style and layout of the application.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/jammming.git
   cd jammming
   ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Start the development server**:

    ```bash
    npm start
    ```

### Setting Up Spotify Authentication

1. Register your application on the Spotify Developer Dashboard.

2. Get your Client ID and set the Redirect URI to `http://localhost:3000`.

3. Createa file name name `Spotify.js` inside the `src/util` directory and add your credentials:

    ```JavaScript
    const clientId = 'YOUR_SPOTIFY_CLIENT_ID';
    const redirectUri = 'http://localhost:3000';
    let accessToken;

    const Spotify = {
    // ... existing function definitions for getAccessToken, search, and savePlaylist
    };

    export default Spotify;
    ```

### Usage
1. **Search for songs**: Enter a search term in the search bar and press enter.

2. **Add songs to the  playlist**: Click the "+" button next to a song to add it to your playlist.

3. **Save playlist to Spotify**: Enter a name for your playlist and click the "Save to Spotify" button.
