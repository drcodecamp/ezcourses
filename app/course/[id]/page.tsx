import React from 'react'

// Let's assume this is the course item type
type CourseItem = {
  imageUrl: string
  price: string
  description: string
}

interface CourseComponentProps {
  item: CourseItem
}

const CourseComponent: React.FC<CourseComponentProps> = (props) => {
  return (
    <div className="course-item">
      <img className="course-thumb" src={''} alt="Course Thumbnail" />
      <p className="course-price">1234</p>
      <button className="cta-button">Buy Now</button>
      <p className="course-description">asdasdasd</p>
    </div>
  )
}

export default CourseComponent
