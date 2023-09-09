import { componentRegistry } from "./component_registry";

type Block = {
    id: string;
    component: string;
    props: any;
    children: Block[];
};

export function RenderBlock({ block }: { block: Block; }) {
    const Component = componentRegistry.get(block.component)!;
    return (
        <Component {...block.props}>
            {block.children?.map((block) => (
                <RenderBlock key={block.id} block={block} />
            ))}
        </Component>
    );
};