import classes from './chip.module.css'
import React, {PropsWithChildren} from 'react'

type Props = React.HTMLAttributes<HTMLElement> &
    PropsWithChildren & {
    isSelected: boolean | undefined
}

export const Chip: React.FC<Props> = ({children, isSelected, ...props}) => {
    return (
        <div
            className={`${classes.chip} ${
                isSelected ? classes.selected : undefined
            } `}
            {...props}
        >
            {children}
        </div>
    )
}

export default Chip
