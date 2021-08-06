import React, { Component, Fragment } from 'react';
// import axios from 'axios';
// import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import pixabayApi from '../../services/pixabayApi';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';

class ImageGallery extends Component {
  state = {
    page: 1,
    images: [],
    error: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    const { page } = this.state.page;
    const prevSearchQuery = prevProps.searchQuery;
    const currentSearchQuery = this.props.searchQuery;

    if (prevSearchQuery !== currentSearchQuery) {
      this.setState({ status: 'pending' });

      setTimeout(() => {
        pixabayApi
          .fetchImages(currentSearchQuery, page)
          .then(data => {
            const { hits } = data;
            this.setState({
              images: hits,
              status: 'resolved',
            });
          })
          .catch(error => this.setState({ error, status: 'rejected' }));
      }, 2000);
    }
  }

  render() {
    const { images, error, status } = this.state;
    const { searchQuery } = this.props;

    if (status === 'idle') {
      return <p>Введите название темы картинок</p>;
    }

    if (status === 'pending') {
      return (
        <Loader
          type="Grid"
          color="#00BFFF"
          height={80}
          width={80}
          timeout={5000}
          className="loader"
        />
      );
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <Fragment>
          <ul className="ImageGallery">
            <ImageGalleryItem imageQuery={images} />
          </ul>
          {images.length < 1 ? (
            <p>{`Нет изображений по вашему запросу "${searchQuery}"`}</p>
          ) : (
            <Button />
          )}
        </Fragment>
      );
    }
  }
}

export default ImageGallery;
