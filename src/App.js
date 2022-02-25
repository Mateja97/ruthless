import './App.css';
import Logo  from './Logo/LogoSVG.svg';
import PCPicture from'./Images/ImageDesktop2x.png';
import PHONEPicture from'./Images/ImageMobile2x.png';
import IconFb from'./Social/FacebookSVG.svg';
import IconIg from'./Social/InstagramSVG.svg';


const imgStyle = {
  top: '11%',
  left: '6%',
  opacity: '1',
  position: 'absolute',
  alt: 'background',
  height: '79%',
  width: '88%',
  objectFit: 'cover'
};
const IconFbStyle = {
  left: '48%',
  height: '80%',
  position: 'absolute',
  alt: 'fb icon'
};
const IconIgStyle = {
  left: '52%',
  height: '80%',
  position: 'absolute',
  alt:'fb icon'
};

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <object data={Logo} height='100%'> </object>
      </div>
      <img  id="pc" src={PCPicture} style={imgStyle}/>
      <img  id="phone" src={PHONEPicture} style={imgStyle}/>
      <div className="App-footer">
        <div className="Footer-start">made for two sided women.</div>
        <a href="https://www.facebook.com/"><img  src={IconFb} style= {IconFbStyle}/></a>
        <a href="https://www.instagram.com/"><img src={IconIg} style= {IconIgStyle}/></a>
        <div className="Footer-end">2020.</div>
      </div>
    </div>
  );
}

export default App;
