import classes from './full.module.css'
import {FC} from 'react'

type Props = {
    courses: CourseItem[]
}

type CourseItem = {
    thumb: string
    title: string
    author: string
    price: number
}

const Full: FC<Props> = ({courses}) => {
    return (
        <article>
            {courses &&
                courses.map((course) => {
                    return (
                        <figure className={classes.item}>
                            <div className={classes.info}>
                                <div>
                                    <img src={course.thumb} alt={course.title}/>
                                </div>
                                <div>
                                    <p className="bold">{course.title}</p>
                                    <p>course by {course.author}</p>
                                </div>
                            </div>
                            <div className={classes.price}>
                                <h3>₪{course.price}</h3>
                                <div className={classes.remove}>remove</div>
                            </div>
                        </figure>
                    )
                })}
        </article>
    )
}
export default Full
