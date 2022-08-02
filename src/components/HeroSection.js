import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>Discover</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <form id='selection'>
          <table>
         <tr>
          <td><label for="origin">Van</label></td>
          <td><label for="destination">Naar</label></td>
          <td><label for="vertrekdatum">Vertrek</label></td>
          <td><label for="terugdatum">Terug</label></td>
          <td><label for="terugdatum">Aantal personen</label></td>
         </tr>
         <tr>
         <td><input id='origin' type='text'/></td>
         <td><input id='destination' type='text'/></td>
         <td><input id='vertrekdatum' type='date'/></td>
         <td><input id='terugdatum' type='date'/></td>
         <td><input id='aantal' type='number'/></td>
         </tr>
          </table>
        </form>
        
      </div>
    </div>
  );
}

export default HeroSection;