import "./Share.css";
import profile1 from "../../resources/images/profile1.png";
import { FcGallery } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
import { BsEmojiSmileFill } from "react-icons/bs";
import { PiTagSimpleFill } from "react-icons/pi";

export default function Share() {
  return (
    <div className="shareContainer">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={profile1} alt="" />
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareBottomItem">
            <FcGallery className="shareIcon" />
            <span className="shareBottomText">Photo/Video</span>
          </div>
          <div className="shareBottomItem">
            <ImLocation2 className="shareIcon" />
            <span className="shareBottomText">Location</span>
          </div>
          <div className="shareBottomItem">
            <PiTagSimpleFill className="shareIcon" />
            <span className="shareBottomText">Tag</span>
          </div>
          <div className="shareBottomItem">
            <BsEmojiSmileFill className="shareIcon" />
            <span className="shareBottomText">Feelings</span>
          </div>
            <button className="shareButton">Post</button>
        </div>
      </div>
    </div>
  );
}
