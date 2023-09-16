import React from "react";
import Registry from "../lib/component_registry";


export function Box() {
    return (
        <>
            <p>This is a box with a child</p>
            {/* {children} */}
        </>
    );
}

Registry.set(Box, {});