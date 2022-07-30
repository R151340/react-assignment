import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";
import nxtLogo from "../../assets/nxt-logo.svg";
import profilePic from "../../assets/profile-photo.png";
import routes from "../../config/routeConstants";
import {
  AddButton,
  FlexRow,
  HeaderBgContainer,
  ProfilePhoto,
  WebsiteLogo,
} from "./styledComponents";

type CustomProps = { activeRoute: string };

const Header = ({ activeRoute }: any) => {
  const history = useHistory();

  const navigateToAddResourcesPage = () => history.push(routes.addResources);
  const logout = () => {
    Cookies.remove("jwt_token");
    history.replace("/login");
  };

  return (
    <HeaderBgContainer>
      <WebsiteLogo alt="website-logo" src={nxtLogo} />
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
