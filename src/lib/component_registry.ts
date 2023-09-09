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
    if (componentRegistry.has(component.name)) return;
    componentRegistry.set(component.name, component);
}
