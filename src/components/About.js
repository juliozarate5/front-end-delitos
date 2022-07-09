import React from 'react';
import Card from './ui/Card';
import '../index.css';

export default function About() {
    return (
        <div className="container my-3">
            <div className="row row-cols-1 row-cols-md-3 g-4 needs-validation">
            <div className="col">
                <Card 
                    title={`¿Quienes somos?`}
                    texto={`HelmeIUD nace para ...`}
                    subtitle={`HelmeIUD`} 
                    src={`https://www.iudigital.edu.co/Noticias/PublishingImages/soy_iu_digital_517.jpg`}
                />
            </div>
            <div className="col">
                <Card 
                    title={`Proyecto`}
                    texto={`Ayudar en comunidad a estar prevenidos
                    por la ola de violencia que asota la ciudad en
                    los distintos sitios...`}
                    subtitle={`Unidos somos más`} 
                    src={`https://www.iudigital.edu.co/Noticias/PublishingImages/29062021_18.170_razones_517.jpg`}
                />
            </div>
            </div>
        </div>
    )
}
