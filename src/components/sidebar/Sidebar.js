import "./Sidebar.css";
import {ImFeed} from "react-icons/im";
import {BsFillBookmarkDashFill} from "react-icons/bs";
import {HiUserGroup} from "react-icons/hi";
import {BsQuestionSquareFill} from "react-icons/bs";
import {BsCalendar2EventFill} from "react-icons/bs";
import {BsPersonWorkspace} from "react-icons/bs";
import {BiSolidVideos} from "react-icons/bi";

// images
import pikachu from "../../resources/images/pikachu.png";


export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
            <ImFeed className="sideBarIcon" />
            <span className="sideBarListItemText">Home</span>
          </li>
          <li className="sideBarListItem">
            <BiSolidVideos className="sideBarIcon" />
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <HiUserGroup className="sideBarIcon" />
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BsFillBookmarkDashFill className="sideBarIcon" />
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <BsQuestionSquareFill className="sideBarIcon" />
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <BsCalendar2EventFill className="sideBarIcon" />
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <BsPersonWorkspace className="sideBarIcon" />
            <span className="sideBarListItemText">Jobs</span>
          </li>
        </ul>
        <br />
        <button className="sideBarButton">Show more</button>
        <br />
        <hr className="sideBarhr" />
        <br />
        <div className="friends">
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
          <div className="friend">
            <img src={pikachu} alt="friend" />
            <span className="friendName">Joe Doe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
