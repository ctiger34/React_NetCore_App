import {observable, action} from 'mobx';
import {createContext} from "react";
import axios from 'axios';
import Agent from '../Api/Agent';



const requestOne = Agent.Books.list();
const requestTwo = Agent.Comments.list();


class BookStore {
     books = [];
     comments = [];

     loadBooks = () => {
        axios.all([requestOne, requestTwo])
        .then(axios.spread((...responses) => {
            this.books.push(responses[0])
            this.comments.push(responses[1])
          })).catch(errors => {
            console.log(errors);
          })
    }
}

export default createContext(new BookStore());