//syntax issue somewhere over here

export const GET_REQUEST = "GET_REQUEST";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAILURE = "GET_FAILURE";

export function getRequest() {
  return {
    type: GET_REQUEST
  };
}

// Sends successful data response to reducer
export function getSuccess(data) {
  //data will be {films: }
  return {
    type: GET_SUCCESS,
    data
  };
}

// Sends the response error to the reducer
export function getFailure(error) {
  return {
    type: GET_FAILURE,
    error
  };
}

export function starWarsAction(data) {
  return async (dispatch) => {
    try {

      dispatch(getRequest());

      let dataObj = {}

      let dataArr = ['people', 'films', 'planets', 'species', 'starships', 'vehicles']

      await dataArr.forEach( aysnc (data) => {

        try {
          await fetch(`https://swapi.co/api/${data}`)
            .then(response => {
              return response.json()
            })
            .then(json => {
              dataObj[`${data}`] = json.results
              return null
            })
            .catch(error => {
              dispatch(getFailure(error))
            });
        }

        catch(e){
          console.log(e);
        }

      })

      dispatch(getSuccess(dataObj));

    }

    catch(e){
      console.log(e);
    }
  };
}
