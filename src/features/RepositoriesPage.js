import RepositoriesList from "./Repositories";
import { Content } from "./styled";
import Loading from "./Loading";
import useRepositoriesData from "./Repositories/useRepositoriesData";

const RepositoriesPage = () => {
  const { repositoriesData } = useRepositoriesData();

  switch (repositoriesData.status) {
    case "pending":
      return <Loading />;
    case "succes":
      return (
        <Content>
          {repositoriesData.data && repositoriesData.data.map((repository) => (
              <RepositoriesList 
                key={repository.id} 
                title={repository.name}
                descriptions={repository.descriptions}
                linkPage={repository.html_url}
                linkRepositories={repository.owner.html_url}
              />
            ))}
        </Content>
      );
  }
};

export default RepositoriesPage;
