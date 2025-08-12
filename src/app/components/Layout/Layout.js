// src/app/components/Layout/Layout.js
import Header from './Header';
import Footer from './Footer'; // 1. Import the new Footer
import FloatingShapes from '../ui/FloatingShapes';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <FloatingShapes />
      <Footer /> {/* 2. Use the new Footer component */}
    </>
  );
};

export default Layout;