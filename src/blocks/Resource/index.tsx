import React from "react";


type Props = {
    name: string;
};

const Resource:React.FC<Props> = (props:Props) => {
    const {
        name
    } = props;

    return (
        <React.Fragment>
            Resource {name}
        </React.Fragment>
    );
};


export type {Props as ResourceProps};

export {Resource};