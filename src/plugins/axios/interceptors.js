function setParams(config) {
  const params = config.params || {};
  config.params = Object.assign(params, {
    //some params here, like apikey
  });
  return config;
}

export default function (axios) {
  axios.interceptors.request.use(setParams);
}
