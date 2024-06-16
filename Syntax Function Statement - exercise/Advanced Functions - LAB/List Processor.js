function list(arr){

    const result = {
        value: [],
        add(string){
            this.values.push(string)
        },
        remove(string){
            this.values =  this.values.filter(el => el !== string)
        },
        print(){
            console.log(this.values.join(','));
        },
    };
    arr.forEach(line => {
       const [ command, value] = line.split(' ');
       result[command](value); 
    });
}
list(['add hello', 'add again', 'remove hello', 'add again', 'print']);