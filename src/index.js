module.exports = function check(str, bracketsConfig) {
    let myMap = new Map();

    let count = {};
    for (let i of bracketsConfig) {
        myMap.set(`${i[0]}`, `${i[1]}`);
        if (i[0] === i[1]) {
            count[i[0]] = 0;
        }
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let item = str[i];

        if (myMap.has(item) && myMap.get(item) === item) {
            if (count[item] % 2 === 0) {
                stack.push(item);
            } else {
                if (myMap.get(stack.pop()) !== item) {
                    return false;
                }
            }
            count[item]++;
        } else if (myMap.has(item) && item !== '|') {
            stack.push(item);
        } else {
            if (myMap.get(stack.pop()) !== item) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
