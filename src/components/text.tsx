import { registerComponent } from "../lib/component_registry";

export function Text({ text = "World" }) {
    return <p>Hello {text}</p>;
}

registerComponent(Text, {
    // validation required
});