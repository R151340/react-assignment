import tabConstants from "../../config/tabConstants";
import { SingleTab, TabsContainer } from "./styledComponents";

type CustomProps = {
  activeTab: string;
  changeTab: React.Dispatch<React.SetStateAction<string>>;
};

const Tabs = ({ activeTab, changeTab }: CustomProps) => {
  return (
    <TabsContainer>
      <SingleTab
        active={activeTab === tabConstants.resources}
        onClick={() => changeTab(tabConstants.resources)}
      >
        Resources
      </SingleTab>
      <SingleTab
        active={activeTab === tabConstants.requests}
        onClick={() => changeTab(tabConstants.requests)}
      >
        Requests
      </SingleTab>
      <SingleTab
        active={activeTab === tabConstants.users}
        onClick={() => changeTab(tabConstants.users)}
      >
        Users
      </SingleTab>
    </TabsContainer>
  );
};

export default Tabs;
