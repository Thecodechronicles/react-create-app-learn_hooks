
const notesReducer = (state, action) => {
    switch (action.type) {
        case 'POPULATE_NOTES':
            return action.notes
        case 'ADD_NOTES':
            return [
                ...state,
                action.notes
            ]
        case 'REMOVE_NOTES':
            return state.filter((note) => (note.title !== action.title))
        default:
            state
    }
}

export default notesReducer;