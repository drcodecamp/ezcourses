'use client'

import classes from './page.module.css'
import React from 'react'

import thumbImage from '@/assets/thumb-demo.jpg'
import Image from 'next/image'
import Share from '@/app/watch/_components/share'
import Thanks from '@/app/watch/_components/thanks'
import Like from '@/app/watch/_components/like'
import DropdownMenu from '@/shared/dropdown/dropdown'

type Props = {
  params: {
    slug: string
  }
}

let arrLength = 20
let arrVal = 0
let mock = [...new Array(arrLength)].map((x) => arrVal)

const menuItems = [
  { label: 'Option 1', onClick: () => alert('Option 1 clicked') },
  { label: 'Option 2', onClick: () => alert('Option 2 clicked') },
  { label: 'Option 3', onClick: () => alert('Option 3 clicked') },
]

const WatchPage: React.FC<Props> = ({ params }) => {
  console.log(params)
  return (
    <>
      <div className={classes.video}>
        <div className={classes.player}>
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            height="100%"
            referrerPolicy="strict-origin-when-cross-origin"
            src="https://www.youtube.com/embed/H6lDvpFVEmw?si=8rOkzdFmg9M1R41D&amp;start=1305"
            title="YouTube video player"
            width="100%"
          ></iframe>
        </div>
        <div className={classes.info}>
          <header className={classes.header}>
            <h1>How a "Real" Musician can use Suno AI generate music!</h1>
            <div className={classes.actions}>
              <DropdownMenu
                buttonComponent={<Like url={''} />}
                menuItems={menuItems}
              />
              <Like url={''} />
              <Share url={''} />
              <Thanks url={''} />
            </div>
          </header>
          <div>
            <h3>
              Welcome to your personnel safe space. Put on your headphones and
              disappear from this planet with me...
            </h3>
          </div>
          <div className={classes.channel}>
            <div className={classes.avatar}>AV</div>
            <div className={classes.specifications}>
              <h3 className={classes.name}>Doctor Code</h3>
              <h4 className={classes.subscribers}>11.7K subscribers</h4>
            </div>
          </div>
        </div>
        <aside className={classes.comments}>
          <h2>Comments</h2>
          <figure>
            <p>This is the best course Ever!!!</p>
          </figure>
        </aside>
      </div>
      <aside className={classes.explore}>
        <h2>Explore more</h2>
        {mock.map((a, i) => (
          <figure key={i} className={classes.figure}>
            <div className={classes.thumb}>
              <div className={classes.time}>
                <p>24:02</p>
              </div>
              <Image alt="video" src={thumbImage} />
            </div>
            <div className={classes.details}>
              <p className={classes.name}>
                How a "Real" Musician can use Suno AI generate
              </p>
              <p className={classes.author}>Doctor Code</p>
              <p className={classes.followers}>11K views 12 Hours ago</p>
            </div>
          </figure>
        ))}
      </aside>
    </>
  )
}

export default WatchPage
