import logo from './logo.svg';
import {useEffect, useState} from 'react'
import './App.css';

function App() {

    const [gifs, setGifs] = useState([]);
	
    useEffect(() => {
		function getGifData() {
			const url = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=cats&limit=25&rating=G&lang=en`;

			fetch(url)
				.then((res) => res.json())
				.then((res) => {
					console.log('We have data!', res.data);
                    // we are not worrying about rendering - we just want to test that the api key is operational
					setGifs(res.data);
				})
				.catch(console.error);
		}
		getGifData();
	}, []);


  return (
    <div className="App">
      <header className="App-header">
        <h1>Testing Netlify Deployment</h1>
        {
            gifs.map(gif=><img key={gif.id} src={gif.images.downsized_medium.url} />)
        }
      </header>
    </div>
  );
}

export default App;
