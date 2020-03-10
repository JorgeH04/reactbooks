


   const { volumeInfo } = props.info;
   const { title, authors, subtitle, publishedata } = props.info.volumeInfo;
   const thumbNail = volumeInfo.hasOwnProperty('imageLinks');
   const publishYear = volumeInfo.hasOwnProperty('publishedDate');



  


    searchBook =  (e) => {
        e.preventDefault();
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchField}`)

        .then((data) => {
           console.log(data);
           this.setState({ books: [...data.body.items] })
            })
  }
    