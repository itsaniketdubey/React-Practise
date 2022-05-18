import React from "react";
import ReactDOM from "react-dom";
import './index.css';
function BookList(){
  return (
  <section className="booklist">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
  </section>

  ); 
}
const Book = () => {
  return (
  <article className="book">
    <Image/>
    <Title/>
    <Author/>
  </article>
  );
};
const Image = () => <img src="https://m.media-amazon.com/images/I/61RSWYZ-phL._AC_UY327_FMwebp_QL65_.jpg" />
const Title = () => <h1>Can't Hurt Me: Master Your Mind and Defy the Odds - Clean Edition</h1>
const Author = () => <h2>By: David Goggins </h2>
ReactDOM.render(<BookList/>, document.getElementById("root"));