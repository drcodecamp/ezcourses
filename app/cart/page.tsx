'use client'

import Empty from '@/app/cart/_components/empty'
import {NameInput} from '@/shared/input/name'
import {Button} from '@/shared/button/button'
import {courseList} from '@/mock/course-list'
import Full from '@/app/cart/_components/full'
import {RiCoupon3Fill} from 'react-icons/ri'
import Coupons from '@/app/cart/_components/coupons'
import Text from '@/shared/typography/text'
import classes from './page.module.css'
import {IoTicket} from 'react-icons/io5'
import {FC, PropsWithChildren, useState} from 'react'
import {Coupon} from '@/types/coupon'

const CartPage: FC<PropsWithChildren> = () => {
    const [coupons, setCoupons] = useState<Coupon[]>([
        {id: '1', code: 'DISCOUNT10', discount: 10},
        {id: '2', code: 'SAVE20', discount: 20},
    ])

    const addCoupon = (coupon: Coupon) => {
        setCoupons([...coupons, coupon])
    }

    const removeCoupon = (id: string) => {
        setCoupons(coupons.filter((coupon) => coupon.id !== id))
    }

    const totalCartPrice = () => {
        return courseList.reduce(
            (totalPrice, course) => totalPrice + course.price,
            0
        )
    }
    return (
        <>
            <Text variant="h1" size="xxl">
                Shopping Cart
            </Text>
            <section className={classes.cart}>
                <div className={classes.courses}>
                    <Text variant="h2" size="lg">
                        {courseList.length} items in your cart
                    </Text>
                    <br/>
                    <hr/>
                    {courseList.length > 0 ? <Full courses={courseList}/> :
                        <Empty/>}
                </div>
                <div className={classes.info}>
                    <Text variant="h2" size="lg">
                        Total:
                    </Text>
                    <Text size="xxl" bold>
                        ₪{totalCartPrice()}
                    </Text>
                    <Button height={50} variant="solid" ripple>
                        Checkout
                    </Button>
                    <hr/>
                    <p className={classes.coupon}>
                        <RiCoupon3Fill/>{' '}
                        <Text size="md" bold>
                            coupons:
                        </Text>
                    </p>
                    <Coupons coupons={coupons} removeCoupon={removeCoupon}/>
                    <NameInput
                        placeholder="Enter Coupon"
                        fullWidth
                        endContent={<IoTicket/>}
                    />
                    <Button
                        height={50}
                        variant="bordered"
                        onClick={() => {
                            addCoupon({
                                id: Math.random().toString(),
                                code: 'UNIQKE1990',
                                discount: 10,
                            })
                        }}
                    >
                        Apply
                    </Button>
                </div>
            </section>
        </>
    )
}

export default CartPage
