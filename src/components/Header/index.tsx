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

const Header = ({ activeRoute }: CustomProps) => {
  return (
    <HeaderBgContainer>
      <WebsiteLogo alt="website-logo" src={nxtLogo} />
      <FlexRow>
        {activeRoute === routes.home && (
          <AddButton>
            <i className="fa-solid fa-plus mr-8px"></i>
            ADD
          </AddButton>
        )}
        <ProfilePhoto alt="profile-pic" src={profilePic} />
      </FlexRow>
    </HeaderBgContainer>
  );
};

export default Header;
