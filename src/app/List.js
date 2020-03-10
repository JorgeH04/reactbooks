import React from 'react';
import Card from './Card';


const List = (props) => {
    return(
        <div className="list">
           {
               props.books.map((book, i) => {
                   return <Card
                         key={i}
                         image={book.volumeInfo.imageLinks.thumbnail}
                         title={book.volumeInfo.title}
                         author={book.volumeInfo.authors}
                         published={book.volumeInfo.publishedDate}
                   
                      />
              })
           }

        </div>
    )
}

export default List;