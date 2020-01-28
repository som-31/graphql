import React from 'react';
import {graphql} from 'react-apollo';
import { getBookQuery } from '../queries/queries';
// import { getBooksQuery } from '../queries/queries';


class BookDetails extends React.Component{

    displayBooks(){
        const {book} = this.props.data ;
        if(book){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <p>All the books by this author:</p>
                    <ul className="other-books">
                         {book.author.books.map(item =>{
                         return <li key={item.id}>{item.name}</li>
                         })}
                    </ul>
                </div>
            );
        }else{
            return <div><h2>No Book Selected</h2></div>
        }
    }

    render(){
        console.log(this.props);
        return (
            <div id="book-details">
                {this.displayBooks()}
                <br />
            </div>
        );
    }

}

export default graphql(getBookQuery, {
    options : (props) => {
        return {
            variables : {
                id : props.bookId
            }
        }
    }
})(BookDetails)