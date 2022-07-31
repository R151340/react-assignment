import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { faker } from "@faker-js/faker";
import { ResourceType } from "../../config/customTypes";
import "./index.css";

type CustomProps = {
  children: JSX.Element;
  data: ResourceType;
};

const CustomPopup = ({ children, data }: CustomProps) => (
  <Popup
    trigger={children}
    position="top center"
    modal={true}
    className="popup-content"
  >
    <div className="popup-modal-bgcontainer">
      <img
        alt="random-pic"
        src={data.icon_url}
        className="modal-content-photo"
      />
      <h1 className="content-title">{data.title}</h1>
      <p>{faker.lorem.paragraphs(5, "\n")}</p>
      <br />
      <p>{faker.lorem.paragraphs(3, "\n")}</p>
      <br />
      <p>{faker.lorem.paragraphs(4, "\n")}</p>
      <br />
      <p>{faker.lorem.paragraphs(3, "\n")}</p>
      <br />
      <p>{faker.lorem.paragraphs(2, "\n")}</p>
      <br />
      <p>{faker.lorem.paragraphs(4, "\n")}</p>
    </div>
  </Popup>
);

export default CustomPopup;
