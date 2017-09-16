export default function test7(string) {
  //Write your solution here
  Object.defineProperty(String.prototype, string, {
    value(v) {
      console.log(v);
    }
  });
  //
  // return string.reverse();
}

