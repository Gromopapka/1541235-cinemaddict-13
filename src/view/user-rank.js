import {createElement} from "../util";

const createUserRank = (userRank) => {

  return `<section class="header__profile profile">
    ${userRank === 0 ? `` : `<p class="profile__rating">${userRank}</p>`}
    <img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
  </section>`;
};

export default class UserRank {
  constructor(userRank) {
    this._userRank = userRank;
    this._element = null;
  }

  getTemplate() {
    return createUserRank(this._userRank);
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
