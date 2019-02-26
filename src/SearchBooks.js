import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksApi from './BooksAPI';
import ListBooks from './ListBooks';
import { debounce } from 'lodash';

class SearchBooks extends Component {

    state = {
        query: '',
        books: [],
        booksExist: false
    }

    queryBook = debounce(() => {
        if (this.state.query !== '') {
            BooksApi.search(this.state.query).then(books => {
                if (books && books.length > 0) {
                    let booksState = books;
                    for (let i of this.props.books) {
                        let index = booksState.findIndex(obj => obj.id === i.id);
                        if (index >= 0) {
                            booksState[index] = i;
                        }
                    }
                    this.setState({ books: booksState, booksExist: true });
                } else {
                    this.setState({ booksExist: false })
                }
            })
        } else {
            this.setState({ books: [], booksExist: false })
        }
    }, 1000);

    changeInput = event => {
        this.setState({ query: event.target.value });
        this.queryBook();
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search"></Link>
                    <div className="search-books-input-wrapper">
                        <input value={this.state.query} onChange={this.changeInput} type="text" placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    {!this.state.booksExist && (
                        <h1 style={{color: 'gray'}}>No Books</h1>
                    )}
                    <ol className="books-grid">
                        {this.state.books.map(book => (
                            <ListBooks key={book.id} book={book} onUpdateBook={this.props.onUpdateBook} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}
export default SearchBooks;