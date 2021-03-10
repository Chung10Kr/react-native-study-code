const API_KEY = "73b19491b83909c7e07016f4bb4644f9:2:60667290";
const LIST_NAME = "hardcover-fiction";
const API_STEM = "https://api.nytimes.com/svc/books/v3/lists";



function fetchBooks() {
  const mockBooks = [
    {
      rank: 1,
      title: "GATHERING PREY",
      author: "John Sandford",
      book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9780399168796.jpg"
    },
    {
      rank: 2,
      title: "MEMORY MAN",
      author: "David Baldacci",
      book_image: "http://du.ec2.nytimes.com.s3.amazonaws.com/prd/books/9781455586387.jpg"
    }
  ];  
  return  mockBooks;
}

export default { fetchBooks: fetchBooks };
