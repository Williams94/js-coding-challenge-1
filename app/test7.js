export default function test7(string) {
  //Write your solution here
  Object.assign(String.prototype, {
    reverse() {
      return this.split("").reverse().join("");
    }
  });
  //
  return string.reverse();
}

