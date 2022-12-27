export default function booksReducer(state = [], action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return action.payload;
    case 'UPDATE_BOOK_SHELF_STATUS':
      let { currentlyReading: current, wantToRead:  want, read } = action.payload.data;

      return state.concat(current, want, read);
    case 'SEARCH_BOOK':
      console.log(action.payload,'action.payload;action.payload;action.payload;')
      return action.payload;
    default:
      return state;
  }
}
