import "./App.css";
import useSkills from "./useSkills";
import Header from "./common/Section/Header";
import Experience from "./common/Section/Experience";
import { Unit } from "./styled";
import RepositoriesPage from "./features/RepositoriesPage";
import { Footer } from "./common/Section/Footer";

function App() {
  const skills = useSkills();

  return (
    <Unit>
      <Header
        link="https://i.postimg.cc/bv5M2vg3/photo2.jpg"
        caption="MY NAME IS"
        title="Kacper Lewko"
        leadParagraph="👨🏻‍💻 Im a passionate Frontend Developer in love with React,currently
        looking for new job opportunities."
      />
      <Experience skills={skills.mySkills} />
      <RepositoriesPage />

      <Footer
        caption="LET'S TALK!"
        title="k.lewkosga@gmail.com"
        leadParagraph="I'm always open to new projects whenever I have the time. If you have a website, dashboard or a mobile app in mind and need help making your ideas come to life, feel free to contact me!"
      />
    </Unit>
  );
}

export default App;
