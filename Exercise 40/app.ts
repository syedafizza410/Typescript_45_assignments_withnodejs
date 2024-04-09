function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if(tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}


let album1 = make_album("Fizza", "Album title 1");
let album2 = make_album("Aisha", "Album title 2");
let album3 = make_album("Zunnar", "Album title 3" , 10);

console.log(album1);
console.log(album2);
console.log(album3);