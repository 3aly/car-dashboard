import React, { Fragment, useContext } from "react";
import { NavBar } from "../../components/navbar/navbar.component";
import { SideBar } from "../../components/sidebar/sidebar.component";
import "./home.styles.scss";
import { TabsContainer } from "../../components/tabscontainer/tabscontainer.component";
import profilepic from "../../Icons/grey-haired-senior-man-wears-transparent-glasses-white-sweater-stands-cools-hot-beverage-enjoys-pleasant-conversation-poses-against-purple-background.png";
import { InfoPiece } from "../../components/infopiece/infopiece";
import home from "../../Icons/Home/home.png";
import email from "../../Icons/Home/email.png";
import dob from "../../Icons/Home/birthday.png";
import male from "../../Icons/Home/male.png";
import { ThemeContex } from "../../context/theme.contex";

const tabs = [
  { name: "MyDetails", isActive: false },
  { name: "Profile", isActive: true },
  { name: "Password", isActive: false },
  { name: "Email", isActive: false },
  { name: "Notification", isActive: false },
];
const user = {
  name: "Man",
  where: { live: "Zuichi,Switzerland", address: "2445 Crosswind Drive" },
  email: { eml: "uihutofficial@gmail.com", big: true },
  dob: "07.12.195",
  gender: "Male",
};

export const Home = () => {
  const { theme } = useContext(ThemeContex);

  return (
    <div className="home-container" id={theme}>
      <h3>Settings</h3>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <TabsContainer tab={tab} />
        ))}
      </div>
      <div>
        <h3>Profile</h3>
        <p>Update your photo and personal details here.</p>
      </div>
      <div className="separator"></div>
      <div className="infos-holder">
        <InfoPiece title={"Live in"} content={user.where.live} icon={home} />
        <InfoPiece
          title={"Street Address"}
          content={user.where.address}
          icon={home}
        />
        <div className="container m-0 p-0">
          {" "}
          <InfoPiece
            title={"Email"}
            content={user.email.eml}
            icon={email}
            big={true}
          />
        </div>

        <InfoPiece title={"Date Of Birth"} content={user.dob} icon={dob} />

        <InfoPiece title={"Gender"} content={user.gender} icon={male} />
      </div>
      <div className="separator"></div>
      <div className="profile-container mx-0 ">
        <div className="de7k">
          {" "}
          <div className="me-5">
            <h4>Your photo</h4>
            <p>This will be displayed on your profile.</p>
          </div>
          <div c>
            {" "}
            <img src={profilepic} className="img-fluid rounded-circle"></img>
          </div>
        </div>

        <div className="">
          <span>Delete</span>

          <span style={{ color: "#b889f9" }}>Update</span>
        </div>
      </div>
      <div className="separator"></div>
      <div className="d-flex align-items-start">
        <h6>Social Profiles</h6>
        <div className="col offset-8">
          <InfoPiece content={"facebook.com"} />
          <InfoPiece content={"twitter.com/"} />
        </div>
      </div>
    </div>
  );
};
