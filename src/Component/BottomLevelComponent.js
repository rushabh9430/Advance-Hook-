import React , {memo} from 'react'

const BottomLevelComponent = (props) => {
    console.info("BottomComponets")
  return (
    <div>
        <h1>BottomLevelComponent</h1>
        {props.BottomComponent}
    </div>
  )
}

export default memo(BottomLevelComponent)
