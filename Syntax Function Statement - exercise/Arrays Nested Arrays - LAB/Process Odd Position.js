function process(arr){

    let result = arr.filter((el, ind) => ind % 2 ===1)
                    .map(el => el * 2)
                    .reverse();
                    console.log(result);

}
process([10, 15, 20, 25]);
process([3, 0, 10, 4, 7, 3])