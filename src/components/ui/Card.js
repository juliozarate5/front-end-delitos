import React from 'react'

export default function Card(props) {
    const {title, texto, subtitle, src} = props;
    console.log(title)
    return (
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{texto}</p>
            <p className="card-text"><small class="text-muted">{subtitle}</small></p>
        </div>
        <img src={src} className="card-img-bottom" alt=""/>
    </div>
    )
}
