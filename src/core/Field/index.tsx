import React from "react";


type Props = {
    name: string;
};

const Field:React.FC<Props> = (props:Props) => {
    const {
        name
    } = props;

    return (
        <React.Fragment>
            {name}
        </React.Fragment>
    );
};


export type {Props as FieldProps}

export {Field};