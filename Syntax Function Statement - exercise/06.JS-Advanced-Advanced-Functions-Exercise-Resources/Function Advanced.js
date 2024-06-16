function createObjectManager(){

    const object = {};

    function create(name, parentName){
        if ( parentName){
            const parent = Object.assign({}, object[parentName]);
            object[name] = parent;
        }else {
            object[name] = {};
        }

    }
    function set(name, key, value){
        if ( object[name]){
            object[name][key] = value;
        }

    }
    function print(name){
        if ( object[name]){
            const obj = object[name];
            result = '';
            for ( const key in obj){
                result += `${key}:${obj[key]},`;
            }
            let parent = Object.getPrototypeOf(obj);
            while ( parent){
                for ( const key in parent){
                    if ( obj[key] === undefined){
                        result +=`${key}:${parent[key]},`;
                    }
                }
                parent = Object.getPrototypeOf(parent);
            }
            console.log(result.slice(0, -1));
        }

    }
    return {
        create,
        set,
        print
    };
}
const objectManager = createObjectManager();


function cars(arr){
    for ( let command of arr){
        let [action,...params] = command.split(' ');

        if ( action === 'create'){
            const [ name, inherit,parentName] = params;
            objectManager.create(name, inherit==='inherit' ? parentName:undefined);
        }else if ( action === 'set'){
            const [name, key, value] = params;
            objectManager.set(name, key, value);
        }else if ( action === 'print'){
            const [ name ] = params;
            objectManager.print(name)
        }
    }

}
cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']);