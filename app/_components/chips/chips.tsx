import Chip from '@/shared/chip/chip'
import classes from './chips.module.css'
import {chips} from '@/mock/chips'

const Chips = () => {
    return (
        <div className={classes.chips}>
            {chips.map((chip) => (
                <Chip isSelected={chip === chips[1]} key={chip}>
                    {chip}
                </Chip>
            ))}
        </div>
    )
}

export default Chips
