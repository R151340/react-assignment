import { useEffect, useState } from "react";
import Header from "../../components/Header";
import ResourceCard from "../../components/ResourceCard";
import Tabs from "../../components/Tabs";
import ResourceType from "../../config/resourceType";
import routes from "../../config/routeConstants";
import tabConstants from "../../config/tabConstants";
import {
  HomePageContainer,
  FullVH,
  CardsContainer,
  SearchBarWrapper,
  SearchBox,
} from "./styledComponents";

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
  const [searchInput, setSearchInput] = useState("");

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

  // title: string;
  // icon_url: string;
  // link: string;
  // description: string;
  // category: string;
  // tag: string;
  // id: string;

  let searchResults = resourcesData.filter((item) =>
    Object.values(item).some((val) =>
      val.toLowerCase().includes(searchInput.toLowerCase())
    )
  );

  searchResults = searchResults.filter(
    (item) =>
      activeTab === tabConstants.resources ||
      (activeTab === tabConstants.requests &&
        item.tag === tabConstants.requests) ||
      (activeTab === tabConstants.users && item.tag === tabConstants.users)
  );

  return (
    <FullVH>
      <Header activeRoute={routes.home} />
      <HomePageContainer>
        <Tabs activeTab={activeTab} changeTab={setActiveTab} />
        <SearchBarWrapper>
          <i className="fa-solid fa-magnifying-glass"></i>
          <SearchBox
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
          />
        </SearchBarWrapper>
        <CardsContainer>
          {searchResults.map((item) => (
            <ResourceCard key={item.id} data={item} />
          ))}
        </CardsContainer>
      </HomePageContainer>
    </FullVH>
  );
};

export default HomePage;
