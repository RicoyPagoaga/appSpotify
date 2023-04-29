import React from 'react';

const SpotifyTrackListComponent = ({ tracks, setUri }) => (
    <div style={{ height: '400px', overflowY: 'scroll' }}>
      <table>
        <thead>
          <tr>
            <th>Nombre:</th>
            <th>Artista:</th>
            <th>Accion:</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => (
            <tr key={track.id}>
              <td>{track.name}</td>
              <td>{track.artists[0].name}</td>
              <td><button onClick={() => setUri(track.uri)}>Play</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    // <ul>
    //     {tracks.map((track) => (
    //         <li key={track.id}>
    //             {track.name} - {track.artists[0].name}{' '}
    //             <button onClick={() => setUri(track.uri)}>Play</button>
    //         </li>
    //     ))}
    // </ul>
);

export default SpotifyTrackListComponent;
