const getDataFromForm = () => {
  const requestObj = {
  };
  return requestObj;
};

const buildRequestURL = (requestData) => {
  const url = `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[${requestData.categories}]`;
  return url;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;

  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const data = getDataFromForm();
  const url = buildRequestURL(data);
  await requestJoke(url); // 500 error ooopsie woopsie
  console.log("done");
};

processJokeRequest();