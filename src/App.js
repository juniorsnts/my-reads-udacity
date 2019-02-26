import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Home from './Home';
import SearchBooks from './SearchBooks';
import DetailsBook from './DetailsBook';
import { Route } from 'react-router-dom';
class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount(){
    BooksAPI.getAll().then(books => (
      this.setState({books: books})
    ))
  }

  onQueryBooks = (books) => { // query of search
    console.log(books);
    
  };  

  onUpdateBook = (book, shelf) => {
    let books = [...this.state.books];
    let indexBook = books.indexOf(book);
    if(indexBook >= 0){
      books[indexBook] = {...books[indexBook], shelf: shelf};
      this.setState({books});      
    } else {
      book.shelf = shelf;
      this.setState((oldState)=>({
        books: oldState.books.concat([book])
      }))
    }
    BooksAPI.update(book, shelf);
  };

  render() {
    return (
      <div className="app">
        <Route path="/" exact render = {() => (
          <Home books = {this.state.books} onUpdateBook = {this.onUpdateBook}/>
        )} />

        <Route path="/search" render = {() => (
          <SearchBooks queryBooks = {this.onQueryBooks} books = {this.state.books} onUpdateBook = {this.onUpdateBook} />
        )} />

        <Route path="/details/:id" component={DetailsBook}/>

      </div>
    )
  }
}

export default BooksApp
