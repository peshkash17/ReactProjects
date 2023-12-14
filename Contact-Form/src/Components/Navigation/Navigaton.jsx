import React from 'react'
import styles from "./Navigation.module.css"

export default function Navigaton() {
  return (
    <nav className={`${styles.navigation} container`}>
    <div className="logo">
      <img src="/public/images/Frame 2 1.png" alt="do some coding logo" />
    </div>

    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
  </nav>
  )
}
