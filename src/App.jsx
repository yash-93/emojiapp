import { useEffect, useState } from 'react';

import { EmojiContext } from './context';
import Home from './Home';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [allEmojis, setAllEmojis] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    fetch(import.meta.env.VITE_EMOJI_API_URL)
    .then(res => res.json())
    .then(data => {
      setAllEmojis(data);
    })
    .catch(err => console.log(err))
  }, []);

  return (
    <EmojiContext.Provider value={{
      allEmojis,
      offset,
      setOffset,
      limit: 10
    }}>
      <Home/>
    </EmojiContext.Provider>
  )
}

export default App
