import clsx from 'clsx'
import { ComponentProps } from 'react'

interface IHeadingProps extends ComponentProps<'p'> {
    text: string
}

export default function Heading({ text, className, ...rest }: IHeadingProps) {
    return (
        <p className={clsx('bold-heading', className)} {...rest}>
            {text}
        </p>
    )
}
