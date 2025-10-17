import React from 'react'
import clsx from "clsx";

const App = () => {
  const classes = clsx(
    "Container bg-metro-silver text-metro-yellow"
  )

  return (
    <div>
      <div className={classes}>
        <p>Hello World</p>
      </div>
    </div>
  )
}

export default App