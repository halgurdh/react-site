const endPoint = 'https://api.schiphol.nl/public-flights/flights?includedelays=false&page=0&sort=%2BscheduleTime';

const headers = () => {
  const h = new Headers();
  
  h.append('Content-Type', 'application/json');
  h.append('app_id', 'ff874bf4');
  h.append('app_key', '26a786c158b469199964934e7ea0c45e');
  h.append('ResourceVersion', 'v4');

  return h;
}

const request = (method, path, body) => {
  const url = `${endPoint}${path}`;
  const options = {method, headers: headers()};

  if(body) {
    options.body = JSON.stringify(body);
  }
  
  fetch(new Request(url, options));
}

const Api = {
  get(path) {
    return request('Get', path);
  },
  post(path, data = {}) {
    return request('Post', path, data);
  }
};

export default Api;