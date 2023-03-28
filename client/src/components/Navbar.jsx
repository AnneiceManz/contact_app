import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/BlueTechtonicaWord.png";
import contact_squares from "../assets/contact_squares.jpg";
import { Menu, Image } from "semantic-ui-react";

function MyNavBar(props) {
  return (
    <>
      <Menu widths={3}>
        <Menu.Item>
          <Image
            size="small"
            src={contact_squares}
            className="d-lg-inline-block"
            alt="React Bootstrap logo"
          />
        </Menu.Item>
        <Menu.Item>
          <h1>Techtonica Directory</h1>
        </Menu.Item>
        <Menu.Item position="right">
          Signed in as: <a href="#login">Anneice Manzanares</a>
        </Menu.Item>
      </Menu>
    </>
  );
}

export default MyNavBar;
