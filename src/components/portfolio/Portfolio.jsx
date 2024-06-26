import React , {useState} from 'react';
import PropTypes from 'prop-types';

import img from '../../assets/images/layouts/portfolio.png'

Portfolio.propTypes = {
    data: PropTypes.array
};

function Portfolio(props) {

    const {data} = props;

    const [dataBlock] = useState(
        {
            subheading: 'Neo Great Line - Process',
            heading: `Take a look at our working process.`,
            
        }
    )
    return (
        <section className="portfolio">
                <div className="shape"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading"><span>{dataBlock.subheading}</span></h6>
                                <h3 className="heading pd">{dataBlock.heading}</h3>
                                    
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className="portfolio__left">
                                {
                                    data.map(idx => (
                                        <div key={idx.id} className="portfolio-box">
                                            <div className="step">Step {idx.id}</div>
                                            <div className="icon">
                                                <img src={idx.img} alt="NGL" />
                                                    
                                            </div>
                                            <div className="content">
                                                <h5 className="title">{idx.title}</h5>
                                                <p>{idx.desc}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                                
                            </div>
                        </div>



                        <div className="col-xl-6 col-md-6">
                            <div className="portfolio__right">
                                <div className="image" data-aos="fade-left" data-aos-duration="2000">
                                    <img src={img} alt="NGL" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
}

export default Portfolio;