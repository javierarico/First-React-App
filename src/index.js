import React from 'react';
import ReactDOM from 'react-dom';
import htmlImage from './images/html-logo.png';
import cssImage from './images/css-logo.png';
import jsImage from './images/js-logo.png';
import reactImage from './images/react.png';

const title = <h1 style={{textAlign: 'center', fontSize: '140%'}}>Front End Technologies</h1>;
const imgWrapperStyles = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5%'
}
const imagesContainer = (
  <div class='imgWrapper' style={imgWrapperStyles}>
    <img src={htmlImage} width='15%' alt='html logo'/>
    <img src={cssImage} width='15%' alt='css logo'/>
    <img src={jsImage} width='13%' alt='javascript logo'/>
    <img src={reactImage} width='15%' alt='react logo'/>
  </div>
)

const app = (
  <div style={{backgroundColor: '#ebeced', padding: '2%'}}>
    {title}
    {imagesContainer}
  </div>
)

const rootElement = document.getElementById('root');
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement);