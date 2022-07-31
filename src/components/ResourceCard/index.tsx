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
    <CustomPopup data={data}>
      <CardBgContainer>
        <IconTitleRow>
          <IconContainer>
            <Icon alt="source-logo" src={data.icon_url} />
          </IconContainer>
          <div>
            <Title>{data.title}</Title>
            <Subtitle>{data.category}</Subtitle>
          </div>
        </IconTitleRow>
        <Description as={"a"} href={data.link}>
          {data.link}
        </Description>
        <Description>{data.description}</Description>
      </CardBgContainer>
    </CustomPopup>
  );
};

export default ResourceCard;
