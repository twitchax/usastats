import * as React from 'react';

export interface TitleProps { }

export class Title extends React.Component<TitleProps, {}> {
    render() {
        return <h1>USA Stats</h1>;
    }
}