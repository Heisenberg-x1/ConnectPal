import "./topbar.css";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillWechat } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import Pikachu from "../../resources/images/pikachu.png";

export default function Topbar() {
  return (
    <div>
      <div className="topBarContainer">
        <div className="topBarleft">
          <span className="logo">ConnectPal</span>
        </div>
        <div className="topBarMiddle">
          <div className="searchBar">
            <AiOutlineSearch className="searchIcon" />
            <input
              placeholder="Search for friend, post or video"
              className="searchInput"
            />
          </div>
        </div>
        <div className="topBarRight">
          <div className="topBarLinks">
            <span className="topBarLink">Homepage</span>
            <span className="topBarLink">Timeline</span>
          </div>
          <div className="topBarIcons">
            <div className="topBarIconItem">
              <BsFillPersonFill />
              <span className="topBarIconBadge">1</span>
            </div>
            <div className="topBarIconItem">
              <AiFillWechat />
              <span className="topBarIconBadge">2</span>
            </div>
            <div className="topBarIconItem">
              <IoMdNotifications />
              <span className="topBarIconBadge">1</span>
            </div>
          </div>
          <img src={Pikachu} alt="" className="topBarProfile" />
        </div>
      </div>
    </div>
  );
}
