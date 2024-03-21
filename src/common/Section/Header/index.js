import {
  Container,
  Caption,
  LeadParagraph,
  H1,
  Image,
  Group,
  Button,
  Link,
} from "./styled.js";

const Header = ({ title, leadParagraph, caption, link }) => (
  <Container>
    <Group>
      <Image src={link} />
    </Group>
    <Group>
      <Caption>{caption}</Caption>
      <H1>{title}</H1>
      <LeadParagraph>{leadParagraph}</LeadParagraph>
      <Button>
        <Link href="mailto: k.lewkosga@gmail.com">
          <svg
            width="25"
            height="25"
            fill="none"
            stroke="#ffffff"
            stroke-linecap=""
            stroke-linejoin=""
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6z"></path>
            <path d="m2 8 7.501 6.001a4 4 0 0 0 4.998 0L22 8"></path>
          </svg>
          Hire Me
        </Link>
      </Button>
    </Group>
  </Container>
);

export default Header;
