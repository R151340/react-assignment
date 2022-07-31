import { faker } from "@faker-js/faker";
import { createContext, useContext, useState } from "react";
import { ResourceType } from "../config/customTypes";
import tabs from "../config/tabConstants";

type IncompleteResourceType = {
  title: string;
  link: string;
  description: string;
  img: string;
};

type DataContextType = {
  fetchAgain: boolean;
  resources: ResourceType[];
  setResources: React.Dispatch<React.SetStateAction<ResourceType[]>>;
  setFetchAgain: React.Dispatch<React.SetStateAction<boolean>>;
  addResource: (resourceObj: IncompleteResourceType) => void;
};

const DataContext = createContext<DataContextType>({
  resources: [],
  fetchAgain: true,
  setFetchAgain: () => {},
  addResource: (resourceObj) => {},
  setResources: () => {},
});

const DataContextProvider = ({ children }: { children: JSX.Element }) => {
  const [resources, setResources] = useState<ResourceType[]>([]);
  const [fetchAgain, setFetchAgain] = useState(true);

  const addResource = (resourceObj: IncompleteResourceType) => {
    const { title, link, description, img } = resourceObj;
    const newResource: ResourceType = {
      title,
      link,
      description,
      icon_url: img,
      category: faker.commerce.department(),
      tag: [tabs.requests, tabs.users][resources.length & 1],
      id: (resources.length + 1).toString(),
    };
    setResources([newResource, ...resources]);
  };

  return (
    <DataContext.Provider
      value={{
        resources,
        setResources,
        addResource,
        fetchAgain,
        setFetchAgain,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

export const DataState = () => useContext(DataContext);
