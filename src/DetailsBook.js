import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import *as BooksAPI from './BooksAPI';

class DetailsBook extends Component {
    state = {
        detailsBook: {}
    }
    componentDidMount() { // details of book
        BooksAPI.get(this.props.match.params.id).then(details => {
            this.setState({ detailsBook: details })
        }).then(() => console.log(this.state.detailsBook))
    }
    render() {
        const { detailsBook } = this.state;
        return (
            <div>
                <Link to="/" className="close-search"></Link>
                <div className="book-details">
                    <div style={{ width: 128, height: 193, backgroundImage: `url(${detailsBook.imageLinks ? detailsBook.imageLinks.thumbnail :'No Thumbnail'})` }}></div>
                    <h2>{detailsBook.title}</h2>                    
                </div>
                <div className="description">
                    <span style={{ fontSize: '22px', fontWeight: 'bold' }}>Description</span>
                    <hr />
                    <p>{detailsBook.description}</p>
                </div>
                <div className="features">
                    <span style={{ fontSize: '22px', fontWeight: 'bold' }}>Features</span>
                    <hr/>
                    <h3>Authors</h3>
                    {detailsBook.authors && detailsBook.authors.length > 0 && (
                        detailsBook.authors.map((author, index) => (
                            <span key={index}>{author}<br></br></span>
                        ))
                    )}    
                    <h3>Published Date</h3>
                    <span>{detailsBook.publishedDate}</span>       
                    <h3>Categories</h3>
                    {detailsBook.categories && detailsBook.categories.length > 0 && (
                        detailsBook.categories.map((categorie, index) => (
                            <span key={index}>{categorie}<br></br></span>
                        ))
                    )}    
                    <h3>See Google Play</h3>
                    <a rel="noopener noreferrer" target="_blank" href={detailsBook.infoLink}>{detailsBook.title} in Google Play</a>
                    <h3>Publisher</h3>
                    <span>{detailsBook.publisher}</span>
                </div>
            </div>
        )
    }
}
export default DetailsBook;