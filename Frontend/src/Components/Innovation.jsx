import React from 'react';
import '../Styles/Innovation.css';
import part1 from '../assets/newpart1.png';
import part2 from '../assets/part2.png';
import part3 from '../assets/part3.png';
const InnovationCards = () => {
  const cards = [
    {
      title: 'Digital Customer Experience',
      image: part1,
      bgColor: '#1a1a1a',
      textColor: '#ffffff'
    },
    {
      title: 'Automation',
      image: part2,
      bgColor: '#000000',
      textColor: '#ffffff'
    },
    {
      title: 'Cloud Solutions',
     image: part3,
      bgColor: '#030303',
      textColor: '#ffffff'
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%)',
      padding: '80px 40px',
      fontFamily: '"IBM Plex Sans", system-ui, sans-serif'
    }}>
     
      
      <div className="innovation-header">
        <h1 className="innovation-title">Engineering Digital Excellence</h1>
        <p className="innovation-description">
          At Vyoobam Tech, we combine innovation, strategy, and technology to deliver scalable digital solutions that drive measurable business growth. From customer-focused digital experiences to intelligent automation and cloud transformation, we help organizations adapt, evolve, and lead in a rapidly changing digital world.
        </p>
      </div>
      
      <div className="cards-container">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="innovation-card"
            style={{ 
              backgroundColor: card.bgColor,
              color: card.textColor 
            }}
          >
             <img 
              src={card.image} 
              alt={card.title}
              className="card-image"
            />
            <h3 className="card-title">{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InnovationCards;