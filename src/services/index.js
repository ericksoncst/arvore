import axios from 'axios';

async function getBooks() {
  const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=Query&maxResults=40&startIndex=41`);
  return response.data;
}

export default getBooks;