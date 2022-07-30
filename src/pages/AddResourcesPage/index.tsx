import Header from "../../components/Header";
import routes from "../../config/routeConstants";

const AddResourcesPage = () => {
  return (
    <div>
      <Header activeRoute={routes.addResources} />
      <h1>ADD RESOURCES</h1>
    </div>
  );
};

export default AddResourcesPage;
