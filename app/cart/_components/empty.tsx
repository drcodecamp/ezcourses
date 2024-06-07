import Link from 'next/link'
import {appRoutes} from '@/constants/routes'
import {PiShoppingCartDuotone} from 'react-icons/pi'
import classes from './empty.module.css'

const Empty = () => {
    return (
        <figure className={classes.cart}>
            <PiShoppingCartDuotone size={128}/>
            <p>
                Your cart is empty, keep
                <span>
          <Link href={appRoutes.home}>explore</Link>
        </span>
            </p>
        </figure>
    )
}
export default Empty
