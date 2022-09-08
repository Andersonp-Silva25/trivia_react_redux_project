const url = 'https://opentdb.com/api_token.php?command=request';

const fetchApi = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const { token } = data;
  const tokenApi = token;
  localStorage.setItem('token', tokenApi);
  return tokenApi;
};

export default fetchApi;
