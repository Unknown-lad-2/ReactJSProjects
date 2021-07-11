import React from 'react'
import Home from './MyProjects/Home'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import AllInfos from './MyProjects/AllInfos'

function App() {

  return (
    <div className="container">
        <div className="header text-center m-5">
            <h1>🔽 All My Projects: 🔽</h1>
        </div>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          {AllInfos.map(data => <div key={data.id}>
              <Home title={data.title} subtitle={data.subtitle} img={data.img} link={data.link}/>
            </div>)}
        </div>
    </div>
  )
}

export default App