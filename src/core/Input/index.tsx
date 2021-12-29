import React, {useCallback, ChangeEvent} from "react";


type Props = {
    name: string;
    value?: any;
    onChange?: (value:any) => void;
};

const Input:React.FC<Props> = (props:Props) => {
    const {
        name,
        value,
        onChange
    } = props;

    const handleChange = useCallback((e:ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(e.target.value);
        }
    }, [onChange]);

    return (
        <input
          name={name}
          value={value}
          onChange={handleChange} />
    );
};


export type {Props as InputProps};

export {Input};