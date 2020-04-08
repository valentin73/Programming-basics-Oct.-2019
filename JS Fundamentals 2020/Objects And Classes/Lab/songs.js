function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList,
                this.name = name,
                this.time = time;
        }
    }

    let n = input.shift();
    let allSongs = []
    let wantedList = input[input.length - 1]

    for (let i = 0; i < n; i++) {
        let currentSong = input[i].split('_');
        let[type, name, time] = [currentSong[0], currentSong[1],currentSong[2]]
        
        let song = new Song(type, name , time);

        allSongs.push(song);
    }

    for (const song of allSongs) {
        if(song.typeList === wantedList || wantedList ==='all'){
            console.log(song.name);
        }
    }

    // ALTERNATIVE SOLUTION:

    // let wantedSongs = []
    // wantedSongs = allSongs.filter(matchingSongs);

    // function matchingSongs(song){
    //     if(song.typeList === wantedList || wantedList ==='all'){
    //         return song
    //     }
    // }
    // for (const song of wantedSongs) {
    //     console.log(song.name);
    // }
    
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )