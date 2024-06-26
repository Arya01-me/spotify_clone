export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: 'BQDJZYno1pUh3-PFoLKf19k0hpgdlEvBE3IrhXIT-EX6zob-qWZg_ibgKiNONrud335oUJzs9pZnhcP_i-_FQozHu2XrTcnOFIGFjgn1E7FnCqSdZcr_Jcf6_X3I8NDbTjLJLBsIH6DGio6INEr9NrjlOrWZ4CEPkvMj1xuNeR_6WdJL--1fYmenZjSkhlwVz2IDJ-3DCH0ukG684RWh',

};
const reducer = (state, action) => {
console.log(action);

switch(action.type) {
    case 'SET_USER':
    return {
        ...state, 
        user: action.user
    };

    case 'SET_TOKEN':
    return {
        ...state,
        token : action.token
    };
    case 'SET_PLAYLISTS' :
        return {
            ...state,
            playlists: action.playlists
        };

    default:
        return state;
}
}

export default reducer;
