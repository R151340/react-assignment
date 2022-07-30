import tabs from "../../config/tabConstants";
import { SingleTab, TabsContainer } from "./styledComponents";

type CustomProps = {
  activeTab: string;
  changeTab: React.Dispatch<React.SetStateAction<string>>;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs = ({ activeTab, changeTab, setActivePage }: CustomProps) => {
  const onChangeTab = (tab: string) => {
    changeTab(tab);
    setActivePage(0);
  };
  return (
    <TabsContainer>
      <SingleTab
        active={activeTab === tabs.resources}
        onClick={() => onChangeTab(tabs.resources)}
      >
        Resources
      </SingleTab>
      <SingleTab
        active={activeTab === tabs.requests}
        onClick={() => onChangeTab(tabs.requests)}
      >
        Requests
      </SingleTab>
      <SingleTab
        active={activeTab === tabs.users}
        onClick={() => onChangeTab(tabs.users)}
      >
        Users
      </SingleTab>
    </TabsContainer>
  );
};

export default Tabs;
