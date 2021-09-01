import axios from "axios";


axios.defaults.baseURL = "https://localhost:5001/api";

const responseBody = (res) => res.data; 

const requests = {
    get : (url) => axios.get(url).then(responseBody),
    post : (url, body) => axios.post(url, body).then(responseBody),
    put : (url, body) => axios.put(url, body).then(responseBody),
    del : (url) => axios.delete(url).then(responseBody)
}


const Books = {
    list : () => requests.get("/books"),
    details : (id) => requests.get(`/books/${id}`),
    create : (book) => requests.post('/books', book),
    update : (book) => requests.put(`/books/${book.id}`, book),
    delete : (id) => requests.del(`/books/${id}`)
}
const Comments = {
    list : () => requests.get("/comments"),
    details : (id) => requests.get(`/comments/${id}`),
    create : (comment) => requests.post('/comments', comment),
    update : (comment) => requests.put(`/comments/${comment.id}`, comment),
    delete : (id) => requests.del(`/comments/${id}`)
}
const Reviews = {
    list : () => requests.get("/review"),
    details : (id) => requests.get(`/review/${id}`),
    create : (comment) => requests.post('/review', comment),
    update : (comment) => requests.put(`/review/${comment.id}`, comment),
    delete : (id) => requests.del(`/review/${id}`)
}

const exported ={
    Books,
    Comments,
    Reviews
};

export default exported;