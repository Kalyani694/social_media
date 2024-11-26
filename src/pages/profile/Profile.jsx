import "./profile.css";
import Topbar from "../../componets/topbar/Topbar";
import Sidebar from "../../componets/sidebar/Sidebar";
import Feed from "../../componets/feed/Feed";
import Rightbar from "../../componets/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assetes/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assetes/person/7.jpeg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}