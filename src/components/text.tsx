import Registry from "../lib/component_registry";

export function Text({ text = "World" }) {
    return <p>Hello {text}</p>;
}

Registry.set(Text, {});