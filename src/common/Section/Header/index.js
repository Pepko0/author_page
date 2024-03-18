import {
  AutorInformations,
  Caption,
  LeadParagraph,
  H1,
  Image,
  Group,
} from "./styled.js";

const Header = () => (
  <AutorInformations>
    <Group>
      <Image src="https://i.postimg.cc/bv5M2vg3/photo2.jpg" />
    </Group>
    <Group>
      <Caption>MY NAME IS</Caption>
      <H1>Kacper Lewko</H1>
      <LeadParagraph>
        👨🏻‍💻 Im a passionate Frontend Developer in love with React,currently
        looking for new job opportunities.
      </LeadParagraph>
    </Group>
  </AutorInformations>
);

export default Header;
