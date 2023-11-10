import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <div className="card__img">
          <img
            src="https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-1/394284702_2318937048290246_8348080904821943794_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sjB4NPTprQEAX_8-Ne8&_nc_ht=scontent.fhan5-2.fna&oh=00_AfAwTw4P0CwrBrWFjD5zvKfo71bm4PycrLSn0E04tviL6w&oe=6552DDF4"
            alt=""
          />
        </div>
        3<h2>Trần Hồng Quân</h2>
        <p>Sinh viên thiết kế Website</p>
        <p>1997</p>
        <div className="card__social">
          <a target="_black" href="https://www.facebook.com/bnoway169">
            <i className="fab fa-facebook-f" />
          </a>
          <a target="_black" href="">
            <i className="fab fa-youtube" />
          </a>
          <a target="_black" href="">
            <i className="fab fa-tiktok" />
          </a>
          <a target="_black" href="">
            <i className="fab fa-github" />
          </a>
        </div>
        <button>Contact me</button>
      </div>
    </>
  )
}

export default App
