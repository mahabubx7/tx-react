import { LayoutProps } from '@client/shared';

const ErrorPage: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <div>{children}</div>

      <p>
        <a href="/">go to homepage!</a>
      </p>
    </main>
  );
};

export default ErrorPage;
