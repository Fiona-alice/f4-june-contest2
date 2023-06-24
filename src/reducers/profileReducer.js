// profileReducer.js

const initialState = {
    userProfile: null,
    isLoading: false,
    error: null,
  };
  
  const profileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PROFILE_REQUEST':
        return {
          ...state,
          isLoading: true,
          error: null,
        };
      case 'FETCH_PROFILE_SUCCESS':
        return {
          ...state,
          userProfile: action.payload,
          isLoading: false,
          error: null,
        };
      case 'FETCH_PROFILE_FAILURE':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default profileReducer;
  