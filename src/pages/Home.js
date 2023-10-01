import Topbar from "../components/Topbar/Topbar"
import Sidebar from "../components/sidebar/Sidebar"
import Feeds from "../components/feeds/Feeds"
import Rightbar from "../components/rightBar/Rightbar"
import "./home.css"
function Home() {
  return (
    <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feeds />
          <Rightbar />
        </div>
    </>
  )
}

export default Home