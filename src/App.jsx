import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class App extends Component {
  state = {
    searchQuery: '',
    loading: false,
  };

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    const { searchQuery, loading } = this.state;
    return (
      <div>
        {loading && <h1>Загружаем...</h1>}
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ToastContainer autoClose={3000} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
}

export default App;
