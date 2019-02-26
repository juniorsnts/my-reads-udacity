import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ListBooks extends Component {
    changeSelect = (event) => {
        this.props.onUpdateBook(this.props.book, event.target.value);
    }

    render() {
        const { book } = this.props;  
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <Link to={`/details/${book.id}`} className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : 'No thumbnail'})` }}></Link>
                        <div className="book-shelf-changer">
                            <select onChange={this.changeSelect} defaultValue={book.shelf ? book.shelf : 'none'}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    {book.authors && book.authors.length > 0 && (
                        book.authors.map((author, index) => (
                            <div className="book-authors" key={index}>{author}</div>
                        ))
                    )}
                </div>
            </li>
        )
    }
}

export default ListBooks;