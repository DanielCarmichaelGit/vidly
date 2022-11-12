import React, { Component } from 'react';
import Pagination from './common/pagination';
import ListGroup from './common/listGroup';
import { paginate } from '../utils/paginate';
import { getGenres } from '../services/fakeGenreService';
import MoviesTable from './moviesTable';
import _ from 'lodash';
const { getMovies } = require('../services/fakeMovieService');

class MovieList extends Component {
    state = {
        movies: [],
        pageSize: 4,
        currentPage: 1,
        genres: [],
        selectedGenre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
        sortColumn: {path: "title", order: "asc"}
    };

    getPagedData = () => {
        const { pageSize, currentPage, selectedGenre, movies:allMovies, sortColumn} = this.state;
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const movies = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: movies}
    }

    componentDidMount() {
        const genres = [{name: "All Genres"}, ...getGenres()]
        this.setState({ movies: getMovies(), genres: genres, selectedGenre: genres[0]});
    }

    handleDelete = movie => {
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
    }

    handleLike = movie => {
        const movies = this.state.movies.map(m => {
            if (movie._id === m._id && m.liked === false) {
                m.liked = true;
                return m;
            }
            else if (movie._id === m._id && m.liked === true) {
                m.liked = false;
                return m;
            }
            return m
        });

        this.setState({ movies });
    }

    handlePageChange = page => {
        this.setState({ currentPage: page });
    }

    handleGenreSelect = genre => {
        this.setState({ selectedGenre: genre, currentPage: 1});
    }

    handleSort = sortColumn => {
        this.setState({ sortColumn })
    }

    render() {
        const { pageSize, currentPage, sortColumn} = this.state;
        const {length: count} = this.state.movies;
        const { totalCount, data: movies } = this.getPagedData();
        
        if (count === 0) return <h1>There are no movies</h1>;
        return (
            <div className="row">
                <div className="col-3">
                    <ListGroup
                        items={this.state.genres}
                        selectedItem={this.state.selectedGenre}
                        onItemSelect={this.handleGenreSelect}
                    />
                </div>
                <div className="col">
                    <p>Showing {totalCount} movies.</p>
                    <MoviesTable
                        movies={movies}
                        sortColumn={sortColumn}
                        onLike={this.handleLike}
                        onDelete={this.handleDelete}
                        onSort={this.handleSort}

                    />
                    <Pagination
                        itemsCount={ totalCount }
                        pageSize={ pageSize }
                        onPageChange={ this.handlePageChange }
                        currentPage={ currentPage }
                    />
                </div>
            </div>
        );
    }
}
 
export default MovieList;