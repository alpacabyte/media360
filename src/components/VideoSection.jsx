import WhoAreWe from "./WhoAreWe";
import youngVideo from "../assets/young.mp4";

function VideoSection() {
  return (
    <div className="header-video-container">
      <video
        src={youngVideo}
        autoPlay
        loop
        muted
        playsInline
        data-src={youngVideo}
      ></video>
      <div className="tint"></div>
      <WhoAreWe />
    </div>
  );
}

export default VideoSection;
