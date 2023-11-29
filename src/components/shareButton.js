const ShareButton = ({ text, imgPath, platform, fetchMessage }) => {
  const shareMessage = () => {
    const message = encodeURIComponent(fetchMessage());
    if (platform === "whatsapp") {
      window.open(`whatsapp://send?text=${message}`);
    } else {
      window.open(`tg://msg?text=${message}`);
    }
  };

  return (
    <div onClick={shareMessage}>
      <div
        id={`${platform}_container`}
        className="border rounded share-button container"
      >
        <img
          width="65"
          height="65"
          id={`${platform}_share`}
          src={imgPath}
          alt={`${platform}-logo`}
        />
        <label>{text}</label>
      </div>
    </div>
  );
};

export default ShareButton;
