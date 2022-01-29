// @ts-nocheck

import axios from "axios";

export const refresh = (accessToken, refreshToken, callback) => {
  const data = { accessToken, refreshToken };
  axios.get('/refresh', data)
  .then(res => {
    callback(res);
  })
  .catch(err => {
    console.log(err.response);
  });
}

  