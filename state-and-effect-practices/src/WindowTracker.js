import React from 'react'

export default function WindowTracker() {
    const [windowWidth,setWindowWidth] =React.useState(window.innerWidth)

    React.useEffect(function(){
        window.addEventListener("resize", function(){
            // console.log("resize")
            setWindowWidth(window.innerWidth)
        })
    },[])

        
  return (
    <h1>
    Window width: {windowWidth}
    </h1>
  )
}