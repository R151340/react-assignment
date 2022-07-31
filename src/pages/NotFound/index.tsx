import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { AddButton } from "../../components/Header/styledComponents";
import routes from "../../config/routeConstants";
import { FullVH } from "../HomePage/styledComponents";
import {
  NotFoundCard,
  NotFoundHeading,
  NotFoundImg,
  NotFoundText,
} from "./styledComponents";

const NotFound = () => (
  <FullVH>
    <Header activeRoute={routes.home} />
    <NotFoundCard>
      <NotFoundImg
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
      />
      <NotFoundHeading>Page Not Found</NotFoundHeading>
      <NotFoundText>
        We are sorry, the page you requested could not be found.
      </NotFoundText>
      <br />
      <Link to={routes.home}>
        <AddButton>Go to Home Page</AddButton>
      </Link>
    </NotFoundCard>
  </FullVH>
);

export default NotFound;
