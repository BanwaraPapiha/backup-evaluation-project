import { Outlet, Link } from "react-router-dom";

const Header = () => {
    return (
        <>
        <nav>
          <ul>
            <li>
              <Link to="/">Home / CRUD  Multi Step Form</Link>
            </li>
            <li>
              <Link to="/charts">Charts</Link>
            </li>
            <li>
              <Link to="/bounty">Bounty</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
  
        <Outlet />
      </>
  
    );
}

export default Header;