import React, {useCallback, ReactNode} from "react";
import {
    useForm,
    Mode,
    FormProvider
} from "react-hook-form";


type Props = {
    children?: ReactNode;
    mode?: Mode;
    className?: string;
    onSubmit?: (data:any) => void;
};

const Form:React.FC<Props> = (props:Props) => {
    const {
        className,
        mode,
        children,
        onSubmit
    } = props;

    const formProps = useForm({
        mode
    });

    const handleSubmit = useCallback((data:any) => {
        if(onSubmit) {
            onSubmit(data);
        }
    }, [onSubmit]);

    return (
        <FormProvider {...formProps}>
            <form
              className={className}
              onSubmit={formProps.handleSubmit(handleSubmit)}>
                {children}
            </form>
        </FormProvider>
    );
};


export type {Props as FormProps};

export {Form};