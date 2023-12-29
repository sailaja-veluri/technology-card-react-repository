// Write your code here.
import './index.css'

const CCBPCourseCard = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <h1 className="courseHeader">{title}</h1>
      <p className="coursePara">{description}</p>
      <img src={imgUrl} alt={title} className="cardimage" />
    </li>
  )
}
export default CCBPCourseCard
