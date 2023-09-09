import './App.css';
import { Text } from "./components/text";
import { RenderContent } from "./lib/render_content";

type Block = {
    id: string;
    component: string;
    props: any;
    children: Block[];
};

type Content = {
    blocks: Block[];
};

function App() {
    const content: Content = {
        blocks: [
            // block
            {
                id: crypto.randomUUID(),
                component: "Text",
                props: {
                    text: "Foo"
                },
                children: []
            },
            {
                id: crypto.randomUUID(),
                component: "Text",
                props: {
                    text: "Baz"
                },
                children: []
            },
        ]
    };


    return (
        <>
            <Text text="Bar" />
            <RenderContent content={content} />
        </>
    );
}

export default App;
