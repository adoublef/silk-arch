import { RenderBlock } from "./render_block";

type Block = {
    id: string;
    component: string;
    props: any;
    children: Block[];
};

type Content = {
    blocks: Block[];
};

export function RenderContent({ content }: { content: Content; }) {
    return (
        <>
            {content.blocks.map((block) => (
                <RenderBlock key={block.id} block={block} />
            ))}
        </>
    );
};