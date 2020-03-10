import React, { Component }  from 'react';
import SearchArea from './SearchArea';
import List from './List';
import  request  from 'superagent';


class Books extends Component {
    constructor(props){
        super(props);
        this.state = {
            books: [],
            searchField: '',
            sort: ''
        }
    }

    
   searchBook =  (e) => {
    e.preventDefault();
    request
    .get("https://www.googleapis.com/books/v1/volumes")
    .query({q: this.state.searchField})
    .then((data) => {
        console.log(data);
        //const cleanData = this.cleanData(data)
        this.setState({ books: [...data.body.items] })

      })
    }

  
    handleSearch = (e) => {
        this.setState({ searchField: e.target.value })
    }

   
    
    
    handleSort = (e) => {
        this.setState({ sort: e.target.value })
    }
    
    cleanData = (data) => {
        const cleanedData = data.body.items.map((book) => {
            if(book.volumeInfo.hasOwnProperty('publishedDate') === false){
                book.volumeInfo['publishedDate'] = '0000';
            }
            else if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
                book.volumeInfo['imageLinks'] = {thumbnail: 'data:image/jpeg;base64,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'}
    
            }
    
            return book;
        })
    
        return cleanedData;
    }
    
    
  

    render(){

        const sortedBooks = this.state.books.sort((a, b) => {
            if(this.state.sort === 'Newest') {
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate)
            }
            else if(this.state.sort === 'Oldest') {
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate)
            }
        })
    
        return(
            <div>
               <SearchArea searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
               <List books={this.state.books} />
            </div>

        );
    }

}

export default Books;