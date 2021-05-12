import React, { useEffect, useState } from 'react';
import ChartList from '../components/ChartList';
import SongDetail from '../components/SongDetail';

const ChartContainer = () => {

    const [songs, setSongs] = useState([]);

    const getSongs = function() {
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(songs => setSongs(songs.feed.entry))
    }

    useEffect(() => {
        getSongs();
    }, [])


    return (
        <div>
            <ChartList songs={songs} />
            <SongDetail />
        </div>
    )
}

export default ChartContainer;