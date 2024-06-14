'use client'

import { IoCloseSharp } from 'react-icons/io5'
import classes from './coupons.module.css'
import { Coupon } from '@/types/coupon'

type Props = {
  coupons: Coupon[]
  removeCoupon(e: string): void
}

export default function Coupons({ coupons, removeCoupon }: Props) {
  return (
    <div>
      {coupons.map((coupon) => (
        <p className={classes.coupon} key={coupon.id}>
          {coupon.code}
          <button onClick={() => removeCoupon(coupon.id)}>
            <IoCloseSharp />
          </button>
        </p>
      ))}
    </div>
  )
}
