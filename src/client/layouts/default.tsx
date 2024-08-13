import Footer from '@client/components/Footer';
import Header from '@client/components/Header';
import { LayoutProps } from '@client/shared';

const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default DefaultLayout;
