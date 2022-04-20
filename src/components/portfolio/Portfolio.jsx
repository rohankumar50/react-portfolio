import React from 'react'
import './portfolio.css'
import Portfolio1 from '../../assets/portfolio1.jpg'
import Portfolio2 from '../../assets/portfolio2.jpg'
import Portfolio3 from '../../assets/portfolio3.jpg'
import Portfolio4 from '../../assets/portfolio4.jpg'
import Portfolio5 from '../../assets/portfolio5.png'
import Portfolio6 from '../../assets/portfolio6.jpg'

function Portfolio() {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className='container portfolio_container'>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio1} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio2} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio3} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio4} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio5} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Portfolio6} alt="" />
                    </div>
                    <h3>This is portfolio item title</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/rohankumar50" className='btn' target='_blank' rel="noreferrer">Github</a>
                        <a href="https://www.behance.net/rohankumar10" className='btn btn-primary' target='_blank' rel="noreferrer">Live Demo</a>
                    </div>
                </article>
            </div>

        </section>
    )
}

export default Portfolio