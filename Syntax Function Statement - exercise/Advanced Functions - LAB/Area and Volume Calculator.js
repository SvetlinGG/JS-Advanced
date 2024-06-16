function calculator(area, volume, string){

    let data = JSON.parse(string);

    function calc(obj){
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(volume.call(obj));
        return { area:areaObj, volume:volumeObj};
    }
    return data.map(calc)


}
let result = calculator(area, vol, `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}]`)
    console.log(result);
   