import Chips from '@/app/_components/chips/chips'
import SideNavigator from '@/shared/side-nav/side-nav'
import FreeCourses from '@/shared/free-courses/free-courses'
import classes from './page.module.css'
import React, {FC, PropsWithChildren} from 'react'

const Home: FC<PropsWithChildren> = () => {
    return (
        <main className={classes.container}>
            <SideNavigator/>
            <article className={classes.courses}>
                <Chips/>
                <FreeCourses/>
            </article>
        </main>
    )
}
export default Home
