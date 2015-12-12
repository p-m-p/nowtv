import {} from 'es6-promise';
import {} from 'whatwg-fetch';

export const TOGGLE_CALL_CHARGES = 'toggle-call-charges';
export const RECEIVE_BILL = 'receive-bill';

export function toggleCallCharges() {
  return { type: TOGGLE_CALL_CHARGES };
}

export function fetchBill() {
  return dispatch => {
    fetch('https://still-scrubland-9880.herokuapp.com/bill.json').then(
      response => response.json().then(json => dispatch({ type: RECEIVE_BILL, json }))
      // XXX Raise error action here
    );
  };
}
