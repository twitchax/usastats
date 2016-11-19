import * as React from "react";

export interface SelectorProps { compiler: string; framework: string; }

export class Selector extends React.Component<SelectorProps, {}> {
    render() {
        return <div> this is where the selector goes</div>;
    }
}