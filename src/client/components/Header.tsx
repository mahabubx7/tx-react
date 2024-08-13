import { Link } from 'react-router-dom';

export default () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/404-test">404 Test</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
