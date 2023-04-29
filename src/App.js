import React, { useState } from 'react';
import './App.css';
import SpotifySearch from './SpotifySearch';
import SpotifyTrackList from './SpotifyTrackList';
import SpotifyPlayer from './SpotifyPlayer';
import SpotifyWebApi from './spotify-web-api';

const spotifyApi = new SpotifyWebApi();

function App() {
    const [tracks, setTracks] = useState([]);
    const [uri, setUri] = useState('');

    const handleSetTrack = (tracks) => {
        setTracks(tracks);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>My Spotify Player</h1>
            </header>
            <main>
                <SpotifySearch setTrack={handleSetTrack} />
                <SpotifyTrackList tracks={tracks} setUri={setUri} />
                {uri && <SpotifyPlayer uri={uri} />}
            </main>
        </div>
    );
}

export default App;