import React , {   useEffect , useState } from 'react';
import axios from "axios";
import {Header, Icon, List} from 'semantic-ui-react';

export const Books = () => {

    const [books, setBooks] = useState([]);

    useEffect( ( )=> {
        axios.get("https://localhost:5001/api/books/")
            .then( (response) => {
                setBooks(response.data)
                
            })
            .catch((err) =>
            {
                console.log(err)
            })
    },[])

    console.log(books);
    return (
        <div className="container">
            <Header as="h1">
            <Icon name='home'  />
            Haji E-Books

            </Header>

            <List>
                {books.map((book) => {
                    return (
                        <List.Item key={book.id} icon='book' content={book.title} />
                    )
                })}
        
            </List>
        </div>
    )
}
