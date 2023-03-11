import React , { useContext , useEffect} from 'react'
import Monkey from '../context/UseContext'

const BottomLevelComponent = () => {
    const data = useContext(Monkey)

    useEffect(() => {
        data.update()
    }, [data])
  return (
    <div>
        this state name is {data.state}
    </div>
  )
}

export default BottomLevelComponent
