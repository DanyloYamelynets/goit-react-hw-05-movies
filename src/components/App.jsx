import { Suspense, lazy } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Loader from './Loader/Loader';
import { BtnStyled, Container } from './AppStyled';
// import { Layout } from './Layout/Layout';
const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Cast = lazy(() => import('components/Cast/Cast'));

export const App = () => {
  return (
    <div>
      <Container>
        <Link to="/">
          <BtnStyled>Home</BtnStyled>
        </Link>
        <Link to="/movies">
          <BtnStyled>Movies</BtnStyled>
        </Link>
      </Container>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} /> (// Layout)
            {/* <Route index element={<Home />} /> */}
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:id" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<h1>Error 404</h1>} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
