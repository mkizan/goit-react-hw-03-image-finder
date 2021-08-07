import React, { Component, Fragment } from 'react';
import Loader from '../Loader';
import pixabayApi from '../../services/pixabayApi';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../Button';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    largeImage: '',
    page: 1,
    error: '',
    showModal: false,
    isLoading: false,
    status: 'idle',
  };

  componentDidUpdate(prevProps) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({
        images: [],
        page: 1,
        status: 'pending',
      });

      this.fetchImages();
    } else if (this.state.page > 2) {
      console.log('this.state.page: ', this.state.page);
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  openModal = largeImage => {
    this.setState({ showModal: true, largeImage });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImage: '' });
  };

  fetchImages = () => {
    this.setState({ isLoading: true });

    setTimeout(() => {
      pixabayApi
        .getData(this.props.searchQuery, this.state.page)
        .then(data => {
          this.setState(prevState => ({
            images: [...prevState.images, ...data.hits],
            page: prevState.page + 1,
            status: 'resolved',
          }));
        })
        .catch(error => this.setState({ error, status: 'rejected' }))
        .finally(() => this.setState({ isLoading: false }));
    }, 100);
  };

  render() {
    const { images, error, isLoading, largeImage, showModal, status } =
      this.state;
    const { searchQuery } = this.props;

    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    if (status === 'idle') {
      return <p>Enter your request</p>;
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <p>{error.message}</p>;
    }
    if (status === 'resolved') {
      return (
        <Fragment>
          <ul className="ImageGallery">
            <ImageGalleryItem imageQuery={images} openModal={this.openModal} />
          </ul>
          {images.length === 0 && (
            <p>{`No images for your request "${searchQuery}"`}</p>
          )}
          {showModal && (
            <Modal closeModal={this.closeModal} largeImage={largeImage} />
          )}
          {isLoading && <Loader />}
          {shouldRenderLoadMoreButton && (
            <Button onPushButton={this.fetchImages} />
          )}
        </Fragment>
      );
    }
  }
}

export default ImageGallery;
