//try catch of async await
const getUsers = async () => {
  try {
    const res = await fetch('http://httpstat.us/404');

    if (!res.ok) {
      throw new Error('Request Failed');
    }

    const data = await res.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getUsers();

//.catch in async await
const getPosts = async () => {
  const response = await fetch('http://httpstat.us/500');
  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.text();
  console.log(data);
};

getPosts().catch((error) => console.log(error));
