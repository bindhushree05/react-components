import './App.css';
import GallaryFooter from './components/GallaryFooter';
import GalleryBody from './components/GalleryBody';
import imageData from './components/GalleryData';
import GalleryHeader from './components/GalleryHeader';
function App() {
  return (
    <div>
      <GalleryHeader/>
      <GalleryBody imageData={imageData}/>
      <GallaryFooter/> 
    </div>
  )
}

export default App;
