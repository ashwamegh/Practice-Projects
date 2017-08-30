// state argument is not an application state, is the only
// state, this reducer is responsible for

export default function(state = null, action){

  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state
}
