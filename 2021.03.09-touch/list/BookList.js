import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";

import BookItem from "./BookItem";
import NYT from "./NYT2";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  componentDidMount() {
    this._refreshData();
  }

  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };

  _addKeysToBooks = books => {
    // Takes the API response from the NYTimes,
    // and adds a key property to the object
    // for rendering purposes
    return books.map(book => {
      return Object.assign(book, { key: book.title });
    });
  };

  _refreshData = () => {
    var books = NYT.fetchBooks(); 
    this.setState({ data: this._addKeysToBooks(books) });
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.data} renderItem={this._renderItem} />
      </View>
    );
  }

  _renderItem = ({ item }) => {
    return (
      <BookItem
        coverURL={item.book_image}
        title={item.key}
        author={item.author}
      />
    );
  };

}

const styles = StyleSheet.create({ container: { flex: 1, paddingTop: 22 } });

export default BookList;
