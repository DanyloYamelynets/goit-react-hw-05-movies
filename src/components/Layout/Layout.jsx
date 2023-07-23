import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './LayoutStyled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

// export default Layout;
