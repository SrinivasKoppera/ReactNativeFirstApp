export const GET_USERS_DATA_SUCCESS = "GET_USERS_DATA_SUCCESS";
export const GET_USERS_DATA_LOADING = "GET_USERS_DATA_LOADING";
export const GET_USERS_DATA_FAILURE = "GET_USERS_DATA_FAILURE";

export const getUsersActionSucces = (usersData) => {
  return {
    type: GET_USERS_DATA_SUCCESS,
    payload: usersData,
  };
};

export const getUsersActionLoading = () => {
  return {
    type: GET_USERS_DATA_LOADING,
  };
};

export const getUsersActionFailure = (error) => {
  return {
    type: GET_USERS_DATA_FAILURE,
    payload: error,
  };
};

export const getUsersDetails = () => {
  return function (dispatch) {
    dispatch(getUsersActionLoading());
    try {
      const url = `https://reqres.in/api/users`;
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP ERROR! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          // setTimeout(() => {
          //   setUsersData(userData.concat(responseData.data));
          //   setIsRefresh(false);
          // }, 2000);
          dispatch(getUsersActionSucces(responseData.data));
          // setUsersData(responseData.data);
          // setIsRefresh(false);
        })
        .catch((error) => {
          dispatch(getUsersActionFailure(error));
          console.log("This is API Error from HomeScreen : ", error);
        });
    } catch (error) {
      dispatch(getUsersActionFailure(error));
    }
  };
};
