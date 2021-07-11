/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style.css'

function Home(props) {
    
    return (
        <div className="card mb-5">
            <img className="card-img-top" src={props.img} alt="projects" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text pb-2">{props.subtitle}</p>
                <a href={props.link}>View Project</a>
            </div>
        </div>
    )
}

export default Home