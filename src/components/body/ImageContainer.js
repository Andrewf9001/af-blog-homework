function ImageContainer(props) {
  return (
    <div className="image-wrapper">
      <img src={props.image} />
    </div>
  );
}

export default ImageContainer;
