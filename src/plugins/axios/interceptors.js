const isTokenKey = "token";

function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    //some params here, like apikey
  });
  return config;
}

function setToken(req) {
  const isAuthUrl = req.url.includes("login");
  // const isLoginUrl = req.config.url.includes("login");

  if (!isAuthUrl) {
    const token = localStorage.getItem(isTokenKey);
    req.headers["x-access-token"] = token;
  }
  return req;
}

function setTokenOnLogin(res) {
  const isLoginUrl = res.config.url.includes("login");

  if (isLoginUrl) {
    const token = res.data.token;
    localStorage.setItem(isTokenKey, token);
  }

  return res;
}

function getClearResponse(res) {
  return res.data;
}

function onError(err) {
  console.dir(err);
  return Promise.reject(err);
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
  axios.interceptors.request.use(setToken);
  axios.interceptors.response.use(setTokenOnLogin);
  axios.interceptors.response.use(getClearResponse, onError);
}
