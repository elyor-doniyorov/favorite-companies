const ADD_DATA = 'top-sellers/details/ADD_DATA';
// const DISPLAY_DATA = 'top-sellers/details/DISPLAY_DATA';

const defaultState = {};

const detailsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_DATA:
      return action.payload;
    default:
      return state;
  }
};

export const addData = (payload) => ({
  type: ADD_DATA,
  payload,
});

export const loadData = async (symbol) => {
  let response1 = [];
  let response2 = [];

  const endpointProfile = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=433fe75a22056f72b4e335b0627761a8`,
  );
  response1 = await endpointProfile.json();

  const endpointChart = await fetch(
    `https://financialmodelingprep.com/api/v3/historical-chart/1hour/${symbol}?apikey=433fe75a22056f72b4e335b0627761a8`,
  );
  response2 = await endpointChart.json();

  const data = { response1, response2: response2.slice(0, 10) };
  return data;
};

export default detailsReducer;
