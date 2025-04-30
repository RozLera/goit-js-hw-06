class StringBuilder {
  #value;
  constructor(initialValue) {
    this.#value = initialValue;
  }
  getValue() {
    return this.#value;
  }
  padEnd(str) {
    const result = this.#value + str;
    this.#value = result;
  }
  padStart(str) {
    const result = str + this.#value;
    this.#value = result;
  }
  padBoth(str) {
    const result = str + this.#value + str;
    this.#value = result;
  }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
