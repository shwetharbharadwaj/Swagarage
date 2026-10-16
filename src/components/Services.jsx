import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { services as serviceItems } from './data.js'

export default function Services() {
  return (
    <section className="services section-pad" id="what-we-do">
      <div className="section-kicker"><span>02</span><span>WHAT WE DO</span></div>
      <div className="section-heading-row">
        <div><h2>Swag for every<br/><em>kind of moment.</em></h2></div>
        <p>One clear brief. A considered collection. The right details, taken care of.</p>
      </div>
      <div className="service-grid">
        {serviceItems.map((s, i) => (
          <article className={`service-card service-${i+1}`} key={s.n}>
            <div className="service-image">
              <img src={s.img} alt={s.title} loading="lazy"/>
              <span className="service-number">{s.n}</span>
              <span className="service-arrow"><ArrowUpRight size={19}/></span>
            </div>
            <div className="service-info"><span className="service-tag">{s.tag}</span><h3>{s.title}</h3><p>{s.text}</p></div>
          </article>
        ))}
      </div>
      <div className="services-bottom"><span>Have something else in mind?</span><a href="#contact">Tell us what you’re imagining <ArrowUpRight size={16}/></a></div>
    </section>
  )
}
