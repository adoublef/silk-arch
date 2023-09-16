type Foo = {
    // capital
    name: string;
};

export const componentRegistry = new Map<string, React.FC<any>>();
export function registerComponent<
    T extends React.FC
    >(component: T, args: {
        // some validation here for args here
    }) {
    console.log("hi");
    if (componentRegistry.has(component.name)) return;
    componentRegistry.set(component.name, component);
}

class Registry {
    componentRegistry = new Map<string, React.FC<any>>();

    set<
        T extends React.FC
        >(component: T, args: {
            // some validation here for args here
        }) {
        console.log("hi");
        if (componentRegistry.has(component.name)) return;
        componentRegistry.set(component.name, component);
    }

    get(key: string) {
        return componentRegistry.get(key);
    }
}

console.log("hi");

export default new Registry();