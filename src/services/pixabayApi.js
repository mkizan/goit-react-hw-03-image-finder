function getData(query, page, per_page = 12) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '21953239-920783d9236e07918df0be6ca';
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`;
  return fetch(url).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Нет изображений по вашему запросу ${query}`),
    );
  });
}

const api = { getData };

export default api;

// .finally(() => this.setState({ loading: false }));
//   axios
//     .get(url)
//     .then(fetchData => this.setState({ images: fetchData.data.hits }))
//     .catch(error => this.setState({ error }))
//     .finally(() => this.setState({ loading: false }));
