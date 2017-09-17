export default function test3(numMax) {
  let sequence = [];
  if (numMax !== undefined && numMax !== 0) {
    for (let i = 0; i < numMax; i++) {
      sequence.push(i);
      if (i !== 0 && i !== 1) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
      }
    }
    return sequence
  } else {
    return sequence;
  }
}
