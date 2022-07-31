import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import nxtLogo from "../../assets/nxt-logo.svg";
import profilePic from "../../assets/profile-photo.png";
import routes from "../../config/routeConstants";
import { notifySuccessToast } from "../../config/toastNotify";
import {
  AddButton,
  FlexRow,
  HeaderBgContainer,
  ProfilePhoto,
  WebsiteLogo,
} from "./styledComponents";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

type CustomProps = { activeRoute: string };

const Header = ({ activeRoute }: CustomProps) => {
  const history = useHistory();

  const navigateToAddResourcesPage = () => history.push(routes.addResources);
  const logout = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
    notifySuccessToast("Logout successful!");
  };

  return (
    <HeaderBgContainer>
      <Link to={routes.home}>
        <WebsiteLogo alt="website-logo" src={nxtLogo} />
      </Link>
      <FlexRow>
        {activeRoute === routes.home && (
          <Tippy content="Add a resource">
            <AddButton onClick={navigateToAddResourcesPage}>
              <i className="fa-solid fa-plus mr-8px"></i>
              ADD
            </AddButton>
          </Tippy>
        )}
        <Tippy content="Logout">
          <ProfilePhoto alt="profile-pic" src={profilePic} onClick={logout} />
        </Tippy>
      </FlexRow>
    </HeaderBgContainer>
  );
};

export default Header;
