import { Container, H1, Section, Ul, Li, Span } from "./styled";

const Experience = ({ skills }) => {

  return (
    <Container>
      <Section>
        <H1>My skills includes </H1>
      </Section>
      <Ul>
      {skills && skills.map((skill) => (
        <Li
        >
          {skill}
        </Li>
      ))}
      </Ul>
    </Container>
  );
};

export default Experience;
