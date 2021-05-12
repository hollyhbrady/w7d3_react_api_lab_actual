import React from 'react';
import ChartContainer from '../containers/ChartContainer';

const SongDetail = ({song}) => {

  return(
    <SongDetail
    key={song.id.attributes["im:id"]}
    title={song["im:name"].label}
    artist={song["im:artist"].label}
    image={song["im:image"][1].label}
    audio={song.link[1].attributes.href}
    />
  )
    
}
export default SongDetail;