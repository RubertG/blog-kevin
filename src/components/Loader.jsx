import React from 'react'

function Loader({ isColorSecondary }) {
   return (
      <span
         className={`loader ${isColorSecondary ? "loader-secondary" : ""}`}
      ></span>
   )
}

export default Loader