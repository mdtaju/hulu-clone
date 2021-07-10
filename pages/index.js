import Footer from '../components/Footer';
import Header from '../components/Header';
import Nab from '../components/Nab';
import Results from '../components/Results';
import Title from '../components/Title';
import requests from '../utils/requests';
import { useRouter } from 'next/router';

export default function Home({ results }) {
  const router = useRouter()

  const GetRouterPath = () => {
    let ActualPath = router.query.genre || null;

    if(ActualPath === 'fetchTrending') {
      return '| Trending'
    } else if (ActualPath === 'fetchActionMovie') {
      return '| Action Movie'
    } else if (ActualPath === 'fetchTopRated') {
      return '| Top Rated'
    } else if (ActualPath === 'fetchComedyMovies') {
      return '| Comedy Movies'
    } else if (ActualPath === 'fetchHorrorMovies') {
      return '| Horror Movies'
    } else if (ActualPath === 'fetchRomanceMovies') {
      return '| Romance Movies'
    } else if (ActualPath === 'fetchMystery') {
      return '| Mystery'
    } else if (ActualPath === 'fetchSciFi') {
      return '| Sci-fi'
    } else if (ActualPath === 'fetchWestern') {
      return '| Western'
    } else if (ActualPath === 'fetchAnimation') {
      return '| Animation'
    } else if (ActualPath === 'fetchTV') {
      return '| Tv Movies'
    } else {
      return '| Trending'
    }
    
  }
  return (
    <div>
      <Title title={`Hulu-Clone ${GetRouterPath()}`}/>
      <Header />
      <Nab />
        <Results requests={results}/>
        <Footer />
    </div>
  )
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url}`)
  .then(res => res.json())
  return {
    props: {
      results: request.results
    }
  }
}
