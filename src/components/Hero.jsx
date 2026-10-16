import React from 'react'
import { ArrowDownRight, ArrowUpRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line"></span> CORPORATE GIFTING & BRANDED MERCHANDISE</div>
        <h1>Good swag.<br/><span>Great feeling.</span></h1>
        <p className="hero-intro">Make your brand something people can hold, use and remember.</p>
        <p className="hero-body">From thoughtful corporate gifts to employee welcome kits and event merchandise, we bring the right products, branding and execution together — without the usual back-and-forth.</p>
        <div className="hero-actions">
          <a className="button button-dark" href="#contact">Build your swag <ArrowUpRight size={17}/></a>
          <a className="text-link" href="#what-we-do">Explore what we do <ArrowDownRight size={17}/></a>
        </div>
        <div className="hero-note">
          <span className="avatar-stack"><i>S</i><i>G</i><i>+</i></span>
          <span><b>One partner, all the moving parts.</b><small>From first idea to final delivery.</small></span>
        </div>
      </div>
      <div className="hero-art">
        {/* <div className="art-label art-label-top"><span>YOUR BRAND,</span><b>IN REAL LIFE.</b></div> */}
        <div className="art-photo"><img src="assets/Sale.png" alt="Beautifully arranged gift boxes and thoughtful packaging"/></div>
        {/* <div className="floating-card card-note"><span className="note-icon"><Sparkles size={18}/></span><div><b>Made to mean more.</b><small>Thoughtful by design.</small></div></div> */}
        <div className="floating-card card-sticker"><span>SWAG</span><span>THAT STICKS ↗</span></div>
        <div className="art-scribble">✳</div>
        <div className="art-caption"><span>01 / 05</span><span>THE DETAILS MAKE THE DIFFERENCE</span></div>
      </div>
      <div className="hero-bottom"><span>BUILT AROUND YOUR BRAND</span><span>DESIGNED TO BE USED</span><span>COORDINATED WITH CARE</span><span>DELIVERED WITH INTENT</span></div>
    </section>
  )
}
