import React from 'react';

const HexagonDecoration = () => {
  return (
    <div style={{
      position: 'relative',top: 100,
      width: '100%',
      height: '100vh',
      background: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* TOP LEFT - Large Filled Hexagon with Inner Hexagon */}
      <svg style={{
        position: 'absolute',
        left: '30px',
        top: '30px'
      }} width="100" height="115" viewBox="0 0 100 115">
        {/* Outer hexagon - stroke only */}
        <polygon 
          points="50,5 90,30 90,80 50,105 10,80 10,30" 
          fill="none" 
          stroke="#262b65" 
          strokeWidth="2"
        />
        {/* Inner hexagon - filled */}
        <polygon 
          points="50,25 75,40 75,70 50,85 25,70 25,40" 
          fill="#6b6e8e"
        />
      </svg>

      {/* TOP CENTER - Medium Hexagon Outline */}
      <svg style={{
        position: 'absolute',
        left: '150px',
        top: '100px'
      }} width="80" height="92" viewBox="0 0 80 92">
        <polygon 
          points="40,5 70,22.5 70,69.5 40,87 10,69.5 10,22.5" 
          fill="none" 
          stroke="#5a5d7e" 
          strokeWidth="2"
        />
      </svg>

      {/* TOP RIGHT - Dotted Pattern Grid */}
      <svg style={{
        position: 'absolute',
        right: '50px',
        top: '20px'
      }} width="80" height="100" viewBox="0 0 80 100">
        {/* Create dotted grid pattern */}
        {[...Array(6)].map((_, row) => 
          [...Array(6)].map((_, col) => (
            <circle 
              key={`dot-${row}-${col}`}
              cx={col * 14 + 10} 
              cy={row * 14 + 10} 
              r="2" 
              fill="#4a4d6d"
            />
          ))
        )}
      </svg>

      {/* MIDDLE LEFT - Filled Large Hexagon */}
      <svg style={{
        position: 'absolute',
        left: '120px',
        top: '180px'
      }} width="90" height="104" viewBox="0 0 90 104">
        <polygon 
          points="45,5 82,27 82,77 45,99 8,77 8,27" 
          fill="#6b6e8e"
        />
      </svg>

      {/* MIDDLE CENTER - Circle */}
      <svg style={{
        position: 'absolute',
        left: '80px',
        top: '320px'
      }} width="60" height="60" viewBox="0 0 60 60">
        <circle 
          cx="30" 
          cy="30" 
          r="25" 
          fill="#5a5d7e"
        />
      </svg>

      {/* BOTTOM LEFT - Small Dotted Hexagon */}
      <svg style={{
        position: 'absolute',
        left: '20px',
        bottom: '150px'
      }} width="60" height="70" viewBox="0 0 60 70">
        <polygon 
          points="30,5 52,17.5 52,52.5 30,65 8,52.5 8,17.5" 
          fill="none" 
          stroke="#5a5d7e" 
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>

      {/* BOTTOM LEFT - Small Filled Circle */}
      <svg style={{
        position: 'absolute',
        left: '45px',
        bottom: '80px'
      }} width="40" height="40" viewBox="0 0 40 40">
        <circle 
          cx="20" 
          cy="20" 
          r="15" 
          fill="#5a5d7e"
        />
      </svg>

      {/* RIGHT TOP - Large Golden Hexagon with Gradient Fill */}
      <svg style={{
        position: 'absolute',
        right: '30px',
        top: '50px'
      }} width="110" height="127" viewBox="0 0 110 127">
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#b49650" />
            <stop offset="50%" stopColor="#8a7542" />
            <stop offset="100%" stopColor="#6b5f3a" />
          </linearGradient>
        </defs>
        {/* Outer stroke */}
        <polygon 
          points="55,5 98,30 98,97 55,122 12,97 12,30" 
          fill="url(#goldGradient)" 
          stroke="#8a7542" 
          strokeWidth="2"
          opacity="0.8"
        />
      </svg>

      {/* RIGHT MIDDLE - Medium Filled Hexagon */}
      <svg style={{
        position: 'absolute',
        right: '100px',
        top: '200px'
      }} width="70" height="81" viewBox="0 0 70 81">
        <polygon 
          points="35,5 62,21 62,60 35,76 8,60 8,21" 
          fill="#6b6e8e"
        />
      </svg>

      {/* RIGHT BOTTOM - Medium Outline Hexagon */}
      <svg style={{
        position: 'absolute',
        right: '40px',
        bottom: '180px'
      }} width="65" height="75" viewBox="0 0 65 75">
        <polygon 
          points="32.5,5 57,19 57,56 32.5,70 8,56 8,19" 
          fill="none" 
          stroke="#8a7542" 
          strokeWidth="2"
        />
      </svg>

      {/* RIGHT BOTTOM - Small Filled Hexagon */}
      <svg style={{
        position: 'absolute',
        right: '120px',
        bottom: '120px'
      }} width="50" height="58" viewBox="0 0 50 58">
        <polygon 
          points="25,5 42,14 42,44 25,53 8,44 8,14" 
          fill="#5a5d7e"
        />
      </svg>

      {/* BOTTOM RIGHT - Large Circle */}
      <svg style={{
        position: 'absolute',
        right: '20px',
        bottom: '50px'
      }} width="80" height="80" viewBox="0 0 80 80">
        <circle 
          cx="40" 
          cy="40" 
          r="35" 
          fill="#5a5d7e"
          opacity="0.6"
        />
      </svg>
    </div>
  );
};

export default HexagonDecoration;