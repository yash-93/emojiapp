import { useEffect } from 'react';
import propTypes from 'prop-types';

import { capitalize } from '../utils';

const styles = {
  cardContainer: `
    w-80
    bg-[#313134]
    text-[#A0A0A1]
    rounded
    p-2
    flex
    m-1
  `,
  emojiSection: `
    w-1/4
    flex
    flex-col
    items-center
    justify-center
    rounded
  `,
  emoji: `
    opacity-0
    text-3xl
  `,
  emojiCharCode: `
    text-[0.6rem]
    mt-2
  `,
  emojiDetailsSection: `
    w-3/4
    flex
    flex-col
    justify-center
    pl-4
  `,
  emojiCategory: `
    font-normal
    text-xs
  `,
  emojiName: `
    text-xl
    text-[#f2f4f6]
    font-bold
  `,
  emojiGroup: `
    font-normal
    text-xs
  `
}

export default function Card({emoji}) {

  useEffect(() => {
    document.getElementById(emoji.htmlCode[0]).innerHTML = emoji.htmlCode[0];
    document.getElementById(emoji.htmlCode[0]).style.opacity = 1;
  }, []);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.emojiSection}>
        <div className={styles.emoji} id={emoji.htmlCode[0]}>{emoji.htmlCode[0]}</div>
        <label className={styles.emojiCharCode}>{emoji.htmlCode[0]}</label>
      </div>
      <div className={styles.emojiDetailsSection}>
        <label className={styles.emojiCategory}>{emoji.category}</label>
        <label className={styles.emojiName}>{capitalize(emoji.name)}</label>
        <label className={styles.emojiGroup}>{emoji.group}</label>
      </div>
    </div>
  )
}

Card.propTypes = {
  emoji: propTypes.object.isRequired
}