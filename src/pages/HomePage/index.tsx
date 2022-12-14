import { useEffect, useState } from "react";
import CustomPagination from "../../components/CustomPagination";
import FailureView from "../../components/FailureView";
import Header from "../../components/Header";
import LoadingView from "../../components/LoadingView";
import ResourceCard from "../../components/ResourceCard";
import Tabs from "../../components/Tabs";
import routes from "../../config/routeConstants";
import tabs from "../../config/tabConstants";
import { DataState } from "../../context/DataContextProvider";
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
  const [activeTab, setActiveTab] = useState(tabs.resources);
  const [apiStatus, setApiStatus] = useState(apiConstants.inProgress);
  const [searchInput, setSearchInput] = useState("");

  const { resources, setResources, fetchAgain, setFetchAgain } = DataState();
  const [activePage, setActivePage] = useState(0);

  const fetchResourcesData = async () => {
    setApiStatus(apiConstants.inProgress);
    try {
      const URL =
        "https://media-content.ccbp.in/website/react-assignment/resources.json";
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setResources(data);
        setFetchAgain(false);
        setApiStatus(apiConstants.success);
      } else throw new Error("Something went wrong");
    } catch (err: any) {
      setApiStatus(apiConstants.failure);
    }
  };

  useEffect(() => {
    fetchAgain ? fetchResourcesData() : setApiStatus(apiConstants.success);
  }, []);

  let searchResults = resources.filter((item) =>
    Object.values(item).some((val) =>
      val.toLowerCase().includes(searchInput.toLowerCase())
    )
  );
  searchResults = searchResults.filter(
    (item) =>
      activeTab === tabs.resources ||
      (activeTab === tabs.requests && item.tag === tabs.requests) ||
      (activeTab === tabs.users && item.tag === tabs.users)
  );

  const SuccessView = () => (
    <>
      <div className="vh-70-overflow-scroll">
        <CardsContainer>
          {searchResults
            .slice(activePage * 9, (activePage + 1) * 9)
            .map((item) => (
              <ResourceCard key={item.id} data={item} />
            ))}
        </CardsContainer>
      </div>
      {searchResults.length > 9 && (
        <CustomPagination
          activePage={activePage}
          setActivePage={setActivePage}
          totalLength={searchResults.length}
        />
      )}
    </>
  );

  const renderViewBasedOnApiStatus = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return <SuccessView />;
      case apiConstants.inProgress:
        return <LoadingView />;
      default:
        return <FailureView retryMethod={fetchResourcesData} />;
    }
  };

  return (
    <FullVH>
      <Header activeRoute={routes.home} />
      <HomePageContainer>
        <Tabs
          activeTab={activeTab}
          changeTab={setActiveTab}
          setActivePage={setActivePage}
        />
        <SearchBarWrapper>
          <i className="fa-solid fa-magnifying-glass"></i>
          <SearchBox
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={(e: any) => setSearchInput(e.target.value)}
          />
        </SearchBarWrapper>
        {renderViewBasedOnApiStatus()}
      </HomePageContainer>
    </FullVH>
  );
};

export default HomePage;
