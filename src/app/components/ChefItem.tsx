/* eslint-disable @next/next/no-img-element */
import React from 'react';
import './chefItem.css';

const ChefItem = ({ item }: {
    item: {
        id: number;
        name: string;
        photo: string;
        position: string;
        delay: string;
    }
}) => {
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="member" data-aos="zoom-in" data-aos-delay={item.delay}>
                <img src={item.photo} alt="chef" className='img-fluid' />

                <div className="member-info">
                    <div className="member-info-content">
                        <h4>{item.name}</h4>
                        <span>{item.position}</span>
                    </div>
                    <div className="social">
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-facebook"></i></a>
                        <a href=""><i className="bi bi-instagram"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChefItem;
