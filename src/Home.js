import React from 'react';
import BookSituation from './BookSituation';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookSituation books = {props.books} detailsBook = {props.bookDetails} onUpdateBook = {props.onUpdateBook}/>
            </div>
            <Link to="/search" className="open-search">
                <button></button>
            </Link>
        </div>
    )
}

export default Home;