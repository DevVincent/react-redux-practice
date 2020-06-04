import { combineReducers } from 'redux';
//This is the REDUCER that stores ALL SONGS
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration : '4:05'},
        { title: 'Macarena', duration : '2:30'},
        { title: 'All Star', duration : '3:15'},
        { title: 'I Want it That Way', duration : '1:45'}
    ];
};
//This is the REDUCER that stores THE SELECTED SONG
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});