function movies(input = []) {
    let moviesList = [];

    for (const line of input) {
        let currentCommand = line.split(' ');
        if (currentCommand.includes('addMovie')) {
            let index = currentCommand.indexOf('addMovie');
            let movieName = currentCommand.slice(index + 1).join(' ');
            moviesList.push({ name: movieName });

        }
    }
    for (let i = 0; i < input.length; i++) {
        let currentCommand = input[i].split(' ');

        if (currentCommand.includes('directedBy')) {
            let index = currentCommand.indexOf('directedBy');
            let currentMovie = currentCommand.slice(0, index).join(' ');
            let currentInfo = currentCommand.slice(index + 1).join(' ');
            for (const existingMovie of moviesList) {
                if (existingMovie.name === currentMovie) {
                    existingMovie.director = currentInfo;
                }
            }
        } else if (currentCommand.includes('onDate')) {
            let index = currentCommand.indexOf('onDate');
            let currentMovie = currentCommand.slice(0, index).join(' ');
            let currentInfo = currentCommand.slice(index + 1).join(' ');
            for (const existingMovie of moviesList) {
                if (existingMovie.name === currentMovie) {
                    existingMovie.date = currentInfo;
                }
            }
        }

    }

    for (const movie of moviesList) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }

}
movies([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
)