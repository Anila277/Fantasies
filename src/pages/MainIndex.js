import SearchBar from '../components/SearchBar';
import PoemData from '../components/Data.json';
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';




    function MainIndex() {
        return (
            <div className='mainMain'>
         <div className='icon'></div>
            <h1 className='title'> Welcome to Fantasies </h1>
            
            <ImageSlider slides={SliderData} />;

            
        </div>
    )
}


export default MainIndex;