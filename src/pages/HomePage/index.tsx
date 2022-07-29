import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ResourceCard from "../../components/ResourceCard";
import Tabs from "../../components/Tabs";
import ResourceType from "../../config/resourceType";
import routes from "../../config/routeConstants";
import tabConstants from "../../config/tabConstants";
import { HomePageContainer, FullVH, CardsContainer } from "./styledComponents";

const apiConstants = {
  initial: "INITIAL",
  inProgress: "LOADING",
  success: "SUCCESS",
  failure: "FAILURE",
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(tabConstants.resources);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);
  const [resourcesData, setResourcesData] = useState<ResourceType[]>([]);

  const fetchResourcesData = async () => {
    setApiStatus(apiConstants.inProgress);
    try {
      const URL =
        "https://media-content.ccbp.in/website/react-assignment/resources.json";
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setResourcesData(data);
        setApiStatus(apiConstants.success);
      } else throw new Error("Something went wrong");
    } catch (err: any) {
      setApiStatus(apiConstants.failure);
    }
  };

  useEffect(() => {
    fetchResourcesData();
  }, []);

  const searchResults = resourcesData.filter((c) => c.tag === activeTab);

  return (
    <FullVH>
      <Header activeRoute={routes.home} />
      <HomePageContainer>
        <Tabs activeTab={activeTab} changeTab={setActiveTab} />
        <CardsContainer>
          {resourcesData.map((item) => (
            <ResourceCard key={item.id} data={item} />
          ))}
        </CardsContainer>
      </HomePageContainer>
    </FullVH>
  );
};

export default HomePage;
