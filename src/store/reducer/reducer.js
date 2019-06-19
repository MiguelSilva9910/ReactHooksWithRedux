const INICIAL_STATE = {
    data: [
        'React Native',
        'ReactJS',
        'NodeJS'
    ],
};

const courses = (state = INICIAL_STATE, action) => {
    switch(action.type){
        case 'ADD_COURSE':
            return { ...state, data: [ ...state.data, action.title]};
        default:
            return state;
    }
}

export default courses;
