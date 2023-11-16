import Book from './components/Book.js';
import booksData from './booksData.js';

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
        {/*  {booksData.map((book) => (
          <Book book={book} /> //Each child in a list should have a unique "key" prop.
        ))}  */} 
         {booksData.map((book) => (
          <Book key={book.id} book={book} />
        ))} 
      </div>
    </div>
  );
}

export default App;