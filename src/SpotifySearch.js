import React, { useEffect, useState } from 'react';
import SpotifyWebApi from './spotify-web-api';
import axios from 'axios';

const spotifyApi = new SpotifyWebApi();

const SpotifySearchComponent = ({ setTrack }) => {
  const [search, setSearch] = useState('');
  const [token, setToken] = useState('');
  // async function getToken() {
  //     try {
  //         const response = await fetch('https://accounts.spotify.com/api/token', {
  //             method: 'POST',
  //             headers: {
  //                 'Content-Type': 'application/x-www-form-urlencoded',
  //                 'Authorization': `Bearer ${btoa(`${process.env.REACT_APP_SPOTIFY_CLIENT_ID}:${process.env.REACT_APP_SPOTIFY_CLIENT_SECRET}`)}`,
  //             },
  //             body: 'grant_type=client_credentials',
  //         });

  //         if (!response.ok) {
  //             throw new Error('Error al obtener token de acceso');
  //         }
  //         const data = await response.json();
  //         return data.access_token;
  //     } catch (error) {
  //         console.error(error);
  //     }
  // }

  const clientId = '';
  const clientSecret = '';
  const redirectUri = 'http://:/';
  const authorizationCode = '----';

  const getSpotifyToken = async() => {
    const authEndpoint = 'https://accounts.spotify.com/api/token';

    const data = new URLSearchParams();
    data.append('grant_type', 'client_credentials');

    fetch(authEndpoint, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret),
      },
    }).then(response => {
      // Si la solicitud es exitosa, el token de acceso estará en la propiedad 'access_token'
      return response.json();
    }).then(data => {
      console.log(`Token de acceso: ${data.access_token}`);
      setToken(data.access_token);
    }).catch(error => {
      console.error('No se pudo obtener el token de acceso:', error);
    });
  };

  const handleSearch = async () => {
    await getSpotifyToken()
    console.log(token);
    spotifyApi.setAccessToken(token);
    // Realiza la consulta a la API de Spotify
    console.log("Hola");
    spotifyApi.searchTracks(search)
      .then(response => {
        setTrack(response.tracks.items);
      })
      .catch(error => {
        console.log(error);
      });
    // spotifyApi
    // const response = await spotifyApi.searchTracks(search);
    // setTrack(response.tracks.items);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a song"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SpotifySearchComponent;
