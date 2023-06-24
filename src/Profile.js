import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Profile = () => {
  const userId = useSelector((state) => state.userId); // Assuming you have userId stored in Redux state
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch the user data from the API based on the saved user ID
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        // Update the user object in Redux state
        dispatch({ type: 'SET_USER', payload: data });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [userId, dispatch]);

  const user = useSelector((state) => state.user); // Assuming you have user object stored in Redux state

  return (
    <div>
      <h2>Profile</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          {/* Display other user information */}
        </div>
      )}
    </div>
  );
};

export default Profile;
