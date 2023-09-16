import './App.css';
import Registry, { RenderContent } from "./lib/render_content";

type Block = {
    id: string;
    component: string;
    props: any;
    children: Block[];
};

type Content = {
    blocks: Block[];
};

const id = () => crypto.randomUUID();

function App() {
    const content: Content = {
        blocks: [
            // block
            {
                id: id(),
                component: "Text",
                props: {
                    text: "Foo"
                },
                children: []
            },
            {
                id: id(),
                component: "Text",
                props: {
                    text: "Baz"
                },
                children: []
            },
            {
                id: id(),
                component: "Text",
                props: {},
                children: [
                    // {
                    //     id: id(),
                    //     component: "Text",
                    //     props: {
                    //         text: "Baz"
                    //     },
                    //     children: []
                    // }
                ]
            },
        ]
    };


    return (
        <>
            {/* <Text text="Bar" /> */}
            <RenderContent content={content} />
        </>
    );
}

export default App;
