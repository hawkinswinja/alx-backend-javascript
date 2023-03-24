export default class Airport {
  constructor(name, code) {
    this._code = code;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  set name(val) {
    this._name = val;
  }

  set code(val) {
    this._code = val;
  }

  toString() {
    return `[${this._code}]`;
  }
}
