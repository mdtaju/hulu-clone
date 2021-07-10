import Footer from '../components/Footer';
import Header from '../components/Header';
import Nab from '../components/Nab';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
  return (
    <div className=''>
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
