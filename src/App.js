import "./App.css";
import useSkills from "./useSkills";
import Header from "./common/Section/Header";
import Experience from "./common/Section/Experience";
import { Unit } from "./styled";
import RepositoriesPage from "./features/RepositoriesPage";

function App() {
  const skills = useSkills();
  
  
  return (
    <Unit>
      <Header />
      <Experience 
        skills={skills.mySkills}
       />
       <RepositoriesPage />

    </Unit>
  );
}

export default App;
