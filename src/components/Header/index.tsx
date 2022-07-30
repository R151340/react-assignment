import Cookies from "js-cookie";
import { Link, NavLink, useHistory } from "react-router-dom";
import nxtLogo from "../../assets/nxt-logo.svg";
import profilePic from "../../assets/profile-photo.png";
import routes from "../../config/routeConstants";
import toastNotify from "../../config/toastNotify";
import {
  AddButton,
  FlexRow,
  HeaderBgContainer,
  ProfilePhoto,
  WebsiteLogo,
} from "./styledComponents";

type CustomProps = { activeRoute: string };

const Header = ({ activeRoute }: CustomProps) => {
  const history = useHistory();

  const navigateToAddResourcesPage = () => history.push(routes.addResources);
  const logout = () => {
    toastNotify("Signed out..!", "success");
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <HeaderBgContainer>
      <Link to={routes.home}>
        <WebsiteLogo alt="website-logo" src={nxtLogo} />
      </Link>
      <FlexRow>
        {activeRoute === routes.home && (
          <AddButton onClick={navigateToAddResourcesPage}>
            <i className="fa-solid fa-plus mr-8px"></i>
            ADD
          </AddButton>
        )}
        <ProfilePhoto alt="profile-pic" src={profilePic} onClick={logout} />
      </FlexRow>
    </HeaderBgContainer>
  );
};

export default Header;
