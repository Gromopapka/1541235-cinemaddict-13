import {createElement} from "../util";

const getWatchListAmount = (films) => {
  return films.filter((el) => el.isNeedToWatch).length;
};

const getWatchedFilmsAmount = (films) => {
  return films.filter((el) => el.isWatched).length;
};

const getFavoriteFilmsAmount = (films) => {
  return films.filter((el) => el.isFavorite).length;
};

const createMainMenu = (films) => {
  return `<nav class="main-navigation">
    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      <a href="#watchlist" class="main-navigation__item">Watchlist <span class="main-navigation__item-count">${getWatchListAmount(films)}</span></a>
      <a href="#history" class="main-navigation__item">History <span class="main-navigation__item-count">${getWatchedFilmsAmount(films)}</span></a>
      <a href="#favorites" class="main-navigation__item">Favorites <span class="main-navigation__item-count">${getFavoriteFilmsAmount(films)}</span></a>
    </div>
    <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>

  <ul class="sort">
    <li><a href="#" class="sort__button sort__button--active">Sort by default</a></li>
    <li><a href="#" class="sort__button">Sort by date</a></li>
    <li><a href="#" class="sort__button">Sort by rating</a></li>
  </ul>`;
};

export default class MainMenu {
  constructor(filmsList) {
    this._filmsList = filmsList;
    this._element = null;
  }

  getTemplate() {
    return createMainMenu(this._filmsList);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}

