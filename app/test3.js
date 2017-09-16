export default function test3(numMax) {
    let sequence = [];
    if (numMax !== undefined && numMax !== 0) {
        for (let i = 0; i < numMax; i++) {
            let prev = 0;
            sequence.push(prev + i);
            prev = i;
        }
        return sequence
    } else  {
        return sequence;
    }
}
