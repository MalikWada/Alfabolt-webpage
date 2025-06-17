import React from 'react';
import './IndustriesDropdown.css';

export default function IndustriesDropdown() {
  return (
    <ul className="industries-dropdown">
      <li><a href="#fintech">Fintech</a></li>
      <li><a href="#hrtech">HR Tech</a></li>
      <li><a href="#social">Social</a></li>
      <li><a href="#healthtech">Health Tech</a></li>
      <li><a href="#logistics">Logistics</a></li>
      <li><a href="#insurance">Insurance</a></li>
    </ul>
  );
}
