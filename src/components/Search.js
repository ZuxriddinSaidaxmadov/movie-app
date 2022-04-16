import React from "react";
import Button from "@mui/material/Button";
import Movies from "./Movies";
import Loader from "./Loader";
import Pagination from "@mui/material/Pagination";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "iron",
      type: "all",
      page: "2",
    };
  }

  handlStaped = (e) => {
    this.setState({ page: e.target.firstChild.data });
    console.log(e.target);
  };

  handlStap = (e) => {
    this.setState({ page: e.target.firstChild.data });
    this.props.searchMovi(this.state.search, this.state.type, this.state.page);
    console.log(e.target);
  };

  hendlerSearch = (e) => {
    this.setState({ search: e.target.value });
  };

  hendleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovi(
        this.state.search,
        this.state.type,
        this.state.page
      );
      this.setState({ page: 1 });
    }
  };
  hendleFiltr = (e) => {
    this.setState({ type: e.target.name });
  };

  render() {
    return (
      <div className="searchInput">
        <input
          id="standard-basic"
          onKeyDown={this.hendleKey}
          value={this.state.search}
          onChange={this.hendlerSearch}
          placeholder="Search"
        />
        <Button
          variant="contained"
          disableElevation
          onClick={() => {
            this.props.searchMovi(
              this.state.search,
              this.state.type,
              this.state.page
            );
            this.setState({ page: 1 });
            console.log(this.state.page);
          }}
          sx={{ fontSize: "20px", marginBottom: "30px" }}
        >
          Search movies
        </Button>
        <div className="radioGroup">
          <label className="categoriya">
            <input
              className="with-gap"
              name="all"
              type="radio"
              daya-type="all"
              onChange={this.hendleFiltr}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label className="categoriya">
            <input
              className="with-gap"
              name="movie"
              type="radio"
              daya-type="movie"
              onChange={this.hendleFiltr}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label className="categoriya">
            <input
              className="with-gap"
              name="series"
              type="radio"
              datatype="series"
              onChange={this.hendleFiltr}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>

        {!this.props.loading ? (
          <Movies movies={this.props.movies} />
        ) : (
          <Loader />
        )}

        <Pagination
          sx={{ backgroundColor: "white", textAlign: "center" }}
          count={10}
          color="primary"
          onChange={this.handlStaped}
          onClick={this.handlStap}
        />
      </div>
    );
  }
}

export default Search;
