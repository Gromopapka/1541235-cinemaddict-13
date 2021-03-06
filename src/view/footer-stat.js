import {createElement} from "../util";

const createFooterStat = (amount) => {
  return `<p>${amount} movies inside</p>`;
};

export default class FooterStat {
  constructor(amount) {
    this._amount = amount;

    this._element = null;
  }

  getTemplate() {
    return createFooterStat(this._amount);
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
