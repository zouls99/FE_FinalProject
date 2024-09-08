export const ACTIONS = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_MOVIES: 'SET_MOVIES',
    SET_SELECTED_MOVIE: 'SET_SELECTED_MOVIE',
    CLEAR_SEARCH: 'CLEAR_SEARCH',
    SET_INITIAL_MOVIES: 'SET_INITIAL_MOVIES'
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_SEARCH_TERM:
            return { ...state, searchTerm: action.payload };
        case ACTIONS.SET_MOVIES:
            return { ...state, movies: action.payload };
        case ACTIONS.SET_SELECTED_MOVIE:
            return { ...state, selectedMovie: action.payload };
        case ACTIONS.CLEAR_SEARCH:
            return { ...state, searchTerm: '', movies: state.initialMovies, selectedMovie: null };
        case ACTIONS.SET_INITIAL_MOVIES:
            return { ...state, initialMovies: action.payload };
        default:
            return state;
    }
};
