function createObjectManager() {
    const objects = {};

    function create(name, parentName) {
        if (parentName) {
            const parent = Object.assign({}, objects[parentName]);
            objects[name] = parent;
        } else {
            objects[name] = {};
        }
    }

    function set(name, key, value) {
        if (objects[name]) {
            objects[name][key] = value;
        }
    }

    function print(name) {
        if (objects[name]) {
            const obj = objects[name];
            let result = '';

            for (const key in obj) {
                result += `${key}:${obj[key]},`;
            }

            // Check if the object has a parent
            let parent = Object.getPrototypeOf(obj);
            while (parent) {
                for (const key in parent) {
                    if (obj[key] === undefined) {
                        result += `${key}:${parent[key]},`;
                    }
                }
                parent = Object.getPrototypeOf(parent);
            }

            console.log(result.slice(0, -1)); // Remove the last comma
        }
    }

    return {
        create,
        set,
        print
    };
}

const objectManager = createObjectManager();

function commands(arr){

arr.forEach(command => {
    const [action, ...params] = command.split(' ');

    if (action === 'create') {
        const [name, inherit, parentName] = params;
        objectManager.create(name, inherit === 'inherit' ? parentName : undefined);
    } else if (action === 'set') {
        const [name, key, value] = params;
        objectManager.set(name, key, value);
    } else if (action === 'print') {
        const [name] = params;
        objectManager.print(name);
    }
});
}
commands([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);
