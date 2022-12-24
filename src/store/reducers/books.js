export default function booksReducer(state = [], action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return action.payload;
    case 'UPDATE_BOOK_SHELF_STATUS':
      let current = action.payload.data.currentlyReading;
      let want = action.payload.data.wantToRead;
      let read = action.payload.data.read;

      return state.concat(current, want, read);
    case 'SEARCH_BOOK':
      console.log(action.payload,'action.payload;action.payload;action.payload;')
      return action.payload;
    default:
      return state;
  }
}
