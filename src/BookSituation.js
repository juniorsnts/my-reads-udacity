import React from 'react';
import ListBooks from './ListBooks';

function BookSituation(props) {
    const situations = ["Currently Reading", "Want to Read", "Read"];
    return (
        <div className="bookshelf">
            {situations.map((situation, index) => (
                <div key={index}>
                    <h2 className="bookshelf-title">{situation}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {props.books.map(book => (
                                ((book.shelf === 'currentlyReading' && situation === 'Currently Reading') && (
                                    <ListBooks key={book.id} book={book} onUpdateBook = {props.onUpdateBook}/>
                                )) ||
                                ((book.shelf === 'wantToRead' && situation === 'Want to Read') && (
                                    <ListBooks key={book.id} book={book} onUpdateBook = {props.onUpdateBook} />
                                )) ||
                                ((book.shelf === 'read' && situation === 'Read') && (
                                    <ListBooks key={book.id} book={book} onUpdateBook = {props.onUpdateBook} />
                                ))
                            ))}
                        </ol>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BookSituation;