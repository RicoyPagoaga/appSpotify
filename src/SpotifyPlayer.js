import React from 'react';
import SpotifyPlayer from 'react-spotify-player';

const size = {
  width: '100%',
  height: 300,
};

const view = 'list'; // or 'coverart'
const theme = 'black'; // or 'white'

const SpotifyPlayerComponent = ({ uri }) => (
  <SpotifyPlayer
    uri={uri}
    size={size}
    view={view}
    theme={theme}
  />
);

export default SpotifyPlayerComponent;
