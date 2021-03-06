import React, { useState } from "react"
import { FaAngleDown } from "react-icons/fa"
import * as styles from "../../css/day.module.css"

const Day = ({ day, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  const toggleInfo = () => setShowInfo(oldValue => !oldValue)

  return (
    <article className={styles.day}>
      <h4>
        {day}
        <button className={styles.btn} onClick={toggleInfo}>
          <FaAngleDown />
        </button>
      </h4>
      {showInfo && <p>{info}</p>}
    </article>
  )
}

export default Day
