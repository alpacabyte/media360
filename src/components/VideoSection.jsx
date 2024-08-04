import WhoAreWe from "./WhoAreWe";

function VideoSection() {
  return (
    <div className="header-video-container">
      <video
        data-src="./src/assets/young.mp4"
        autoPlay="autoplay"
        loop="loop"
        muted="muted"
        defaultmuted=""
        playsInline=""
        src="./src/assets/young.mp4"
      ></video>
      <div className="tint"></div>
      <WhoAreWe />
    </div>
  );
}

export default VideoSection;
