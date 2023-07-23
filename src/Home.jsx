import { useContext } from 'react';

import { EmojiContext } from './context';
import Card from './components/Card';
import Pagination from './components/Pagination';

const styles = {
  emojisContainer: `
    flex
    justify-center
    pt-4
    flex-wrap
  `,
}

export default function Home() {
  const contextValue = useContext(EmojiContext);
  console.log(contextValue.offset, contextValue.limit)

  return (
    <>
      <div className={styles.emojisContainer}>
        {
          contextValue.allEmojis.splice(contextValue.offset, contextValue.limit).map((emoji, index) => <Card key={index} emoji={emoji} />)
        }
      </div>
      <Pagination />
    </>
  )
}
