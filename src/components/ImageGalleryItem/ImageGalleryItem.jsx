const ImageGalleryItem = ({ imageQuery }) => {
  return (
    <>
      {imageQuery.map(({ id, webformatURL, tags }) => (
        <li className="ImageGalleryItem" key={id}>
          <img
            src={webformatURL}
            alt={tags}
            className="ImageGalleryItem-image"
          />
        </li>
      ))}
    </>
  );
};

export default ImageGalleryItem;
