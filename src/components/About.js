import React from 'react'
import Card from './ui/Card'

export default function About() {
    return (
        <div className="container my-3">
            <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
                <Card 
                    title={`¿Quienes somos?`}
                    texto={`HelmeIUD nace para ...`}
                    subtitle={`HelmeIUD`} 
                    src={`https://www.iudigital.edu.co/Noticias/PublishingImages/soy_iu_digital_517.jpg`}
                />
            </div>
            <div class="col">
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
