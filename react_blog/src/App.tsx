import { useState, useEffect } from 'react';
import { Props } from './types/News';
import { NewsItem } from './components/NewsItem';
import { api } from './api';
import './App.css';

function App() {
  const [news, setNews] = useState<Props | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setLoading(true);
    let json = await api.getAllNews();
    setLoading(false);
    setNews(json);
  }
  

  return (
    <div>
      <hr />
      <main>
        {loading && 
          <div className='load'>Carregando...</div>
        }
        {!loading && news &&
          <>
            <div>Total de notícias: {news.totalResults}</div>
            {news.results.map((item, index) => (
              <NewsItem data={item} />
            ))}
          </>
        }
        {!loading && !news &&
          <>
            <div className='setError'>Tente novamente mais tarde.</div>
            <button className='buttonError' onClick={loadNews}>Recarregar</button>
          </>
        }
      </main>
    </div>
  )
}

export default App
// https://newsdata.io/api/1/news?apikey=pub_137378a678b009e233cd6402c00d1c3a60878&category=technology&country=br&language=pt