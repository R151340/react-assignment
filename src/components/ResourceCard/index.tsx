import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { ResourceType } from "../../config/customTypes";
import CustomPopup from "../CustomPopup";
import {
  CardBgContainer,
  IconTitleRow,
  IconContainer,
  Icon,
  Title,
  Subtitle,
  Description,
} from "./styledComponents";

type CustomProps = { data: ResourceType };

const ResourceCard = ({ data }: CustomProps) => {
  return (
    <CardBgContainer>
      <IconTitleRow>
        <IconContainer>
          <Icon alt="source-logo" src={data.icon_url} />
        </IconContainer>
        <div>
          <Title>{data.title}</Title>
          <Subtitle>{data.category}</Subtitle>
        </div>
        <CustomPopup data={data}>
          <span className="more-info">
            <Tippy content="more info">
              <i className="fa-solid fa-circle-info"></i>
            </Tippy>
          </span>
        </CustomPopup>
      </IconTitleRow>
      <Description as={"a"} href={data.link}>
        {data.link}
      </Description>
      <Description>{data.description}</Description>
    </CardBgContainer>
  );
};

export default ResourceCard;
