

export const exercisesOptions = {
    method: 'GET',
    headers: {
      //process.env doesn't work !!!
      'X-RapidAPI-Key': 'ee6944cb0dmshc2773b356cd0baap1b2b36jsn43bee69c98b3',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}