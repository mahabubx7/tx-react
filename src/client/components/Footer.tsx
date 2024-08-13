import { Link } from 'react-router-dom';

export default () => {
  return (
    <footer>
      <p>
        &copy; 2024 - All rights reserved by{' '}
        <Link to={'https://github.com/mahabubx7'} target="_blank">
          @mahabubx7
        </Link>
      </p>
    </footer>
  );
};
