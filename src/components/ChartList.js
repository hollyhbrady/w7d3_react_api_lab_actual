import React from 'react';
import ListItem from './ListItem';

const ChartList = ({songs}) => {

    const songsItems = songs.map((song, index) => {

        return <ListItem song={song} key={index} />
        

    })

    return(
            <ul>
            {songsItems}
            </ul>
    )
}
export default ChartList;