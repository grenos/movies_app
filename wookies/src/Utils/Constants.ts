export enum Constants {
    home = 'Home',
    search = 'Search',
    selectedMovie = 'Movie',
    favorites = 'Favorites',
    heartEmpty = 'heart-outline',
    heartFilled = 'heart',
    back = 'chevron-back',
    trash = 'trash-outline',
    clean = 'close-outline',
}

export const headers = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer Wookie2019',
    },
};

export const endpoints = {
    base: 'https://wookie.codesubmit.io/',
    movies: 'movies',
    search: '?q=',
};
