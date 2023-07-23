import { useContext, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

import { EmojiContext } from '../context';

const styles = {
  paginationContainer: `
    mt-8
    bg-[#313134]
    flex
    justify-center
  `,
  pagination: `
    text-white
    flex
    justify-center
    items-center
  `,
  page: `
    m-3
  `,
  activePage: `
    flex
    justify-center
    items-center
    bg-green-500
    w-8
    h-8
    rounded-full
  `
}

export default function Pagination() {
  const contextValue = useContext(EmojiContext);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(contextValue.allEmojis.length / contextValue.limit));
  }, [contextValue]);

  return (
    <div className={styles.paginationContainer} >
      <ReactPaginate
        breakLabel='...'
        nextLabel={<AiOutlineRight size={20} />}
        // onPageChange={(e) => {
        //   console.log(e.selected + 1);
        // }}
        onClick={(e) => {
          console.log(e);
          if(e.isNext) contextValue.setOffset(contextValue.offset + contextValue.limit);
          else if(e.isPrevious) contextValue.setOffset(contextValue.offset - contextValue.limit);
          else {

            contextValue.setOffset(e.nextSelectedPage * contextValue.limit);
          }
        }}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel={<AiOutlineLeft size={20} />}
        renderOnZeroPageCount={null}
        containerClassName={styles.pagination}
        activeClassName={styles.activePage}
        pageClassName={styles.page}
      />
    </div>
  )
}
