import Link from 'next/link'
import classes from './free-courses.module.css'

const courses = [1, 2, 3, 4, 5, 6, 7, 8]

export const FreeCourses = () => {
    return (
        <section className={classes.courses}>
            {courses.map((course) => {
                return (
                    <figure key={course}>
                        <Link href={`/watch/123`}>
                            <img
                                className={classes.thumb}
                                src="https://i.ytimg.com/vi/eI1M9Lznj5I/hq720.jpg?sqp=-oaymwE2CNAFEJQDSFXyq4qpAygIARUAAIhCGAFwAcABBvABAfgB_gmAAtAFigIMCAAQARhfIF8oXzAP&rs=AOn4CLDdR8sVG2p3mws-clKv6DjMwrAWaw"
                                alt="video thumbnail"
                            />
                            <figcaption>
                                How a "Real" Musician can use Suno AI generate
                                music!
                            </figcaption>
                        </Link>
                        <Link href={`/author/123`}>
                            <p className={classes.author}>Doctor Code</p>
                        </Link>
                        <p>11K view 12 Hours ago</p>
                        <p className={classes.time}>24:20</p>
                    </figure>
                )
            })}
        </section>
    )
}

export default FreeCourses
