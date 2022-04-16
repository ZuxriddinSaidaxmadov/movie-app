import React from "react";
import Loader from "./Loader";
import Movies from "./Movies";
import Search from "./Search";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=e5379922&s=iron")
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search }));
    this.setState({ loading: false });
  }

  searchMovi = (str, type, page) => {
    this.setState({ loading: true });

    fetch(
      `http://www.omdbapi.com/?apikey=e5379922&s=${str}&page=${page}${
        type === "all" ? "" : `&type=${type}`
      }`
    )
      .then((respons) => respons.json())
      .then((data) => this.setState({ movies: data.Search }));
    this.setState({ loading: false });
    console.log(page);
  };

  render() {
    return (
      <div>
        <Search
          searchMovi={this.searchMovi}
          movies={this.state.movies}
          loading={this.state.loading}
        />
        {/* {!this.state.loading ? (
          <Movies movies={this.state.movies} />
        ) : (
          <Loader />
        )} */}
      </div>
    );
  }
}

export default Main;
