import WhoAreWe from "./WhoAreWe";
import youngVideo from "../assets/young.mp4";

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
        src={youngVideo}
      ></video>
      <div className="tint"></div>
      <WhoAreWe />
    </div>
  );
}

export default VideoSection;
