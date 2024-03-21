import {
  Container,
  Caption,
  LeadParagraph,
  H1,
  Image,
  Group,
} from "./styled.js";

const Header = ({title, leadParagraph, caption, link}) => (
  <Container>
    <Group>
    <Image src={link} />
    </Group>
    <Group>
      <Caption>{caption}</Caption>
      <H1>{title}</H1>
      <LeadParagraph>
        {leadParagraph}
      </LeadParagraph>
    </Group>
  </Container>
);

export default Header;
