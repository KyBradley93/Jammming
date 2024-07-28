import React from 'react';
import Styles from '/Users/lisadodd/Desktop/Codecademy/Code Projects/Jammming/react-jammming-project/src/Spotify.module.css'

export function Spotify() {

    const songs = [
        {
            id: 1,
            name: "Artist 1",
            song: "Song 1",
            album: "Album 1"
        },
        {
            id: 2,
            name: "Artist 2",
            song: "Song 2",
            album: "Album 2"
        },
        {
            id: 3,
            name: "Artist 3",
            song: "Song 3",
            album: "Album 3"
        }
    ];

    return (
        <div>
            <ul>
                {songs.map((song) => {
                    return <div>
                                <li>
                                    <h3>{song.name}</h3>
                                    <p>{song.song} | {song.album}</p>
                                </li>
                            </div>
                })}
            </ul>
            <button className={Styles.SpotifySubmit} type="submit">Save To Playlist</button>
        </div>
    )
}