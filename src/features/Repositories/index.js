import { Section, Repositories, Title, Content, Link } from "./styled";

const RepositoriesList = ({
  title,
  descriptions,
  linkPage,
  linkRepositories,
}) => {
  return (
    <Repositories>
      <Title>{title}</Title>
      <Content>{descriptions}</Content>
      {`demo: `}
      <Link href={linkPage}>{linkPage}</Link><br/>
      {`Repo: `}
      <Link href={linkRepositories}>{linkRepositories}</Link>
    </Repositories>
  );
};

export default RepositoriesList;
