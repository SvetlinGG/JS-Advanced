function solution(){

    let str = '';

    const append = (string) => (str += string);
    const removeStart = (index) => (str = str.slice(index));
    const removeEnd = (index) => (str = str.slice(0, -index));
    const print = () => console.log(str);

    let result = {
        append,
        removeStart,
        removeEnd,
        print
    }
    return result;

}
let firstZeroTest = solution()
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
