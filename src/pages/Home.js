import React, { Component } from 'react';
import { List, CartIcon, Input } from '../components';
import { getCategories } from '../services/api';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.fetchCategories();
  }

  async fetchCategories() {
    const categories = await getCategories();
    this.setState({ categories }, () => console.log(this.state));
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <CartIcon />
        <Input
          htmlFor="query-input"
          inputTestId="query-input"
        />
        <div data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </div>
        <List items={ categories } dataTestId="category" />
      </div>
    );
  }
}

export default Home;
