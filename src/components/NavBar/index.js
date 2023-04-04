import { Link } from "react-router-dom";
import { Nav } from "./style";

const NavBar = () => {
  return (
    <Nav id="navbar">
      <h1>Contatos</h1>
      <hr style={{width:'98%'}}/>
      <div>
        <div>
          <Link to='/'>Cadastro Contato</Link>
        </div>
        <div>
          <Link to='/lista'>Lista Contatos</Link>
        </div>
      </div>
    </Nav>
  );
}

export default NavBar;
