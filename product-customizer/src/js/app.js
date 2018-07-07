import riot from 'riot'
import ProductCustomier from './components/ProductCustomiser.tag'
import sidebar from './components/sidebar.tag'
import ColourList from './components/ColourList.tag'
import Colour from './components/Colour.tag'
const initialState = {
  options: {
    head: [
      {
        name: 'Spotty Bandana',
        thumbnail: 'bandana',
        layerSrc: 'bandana',
        hex: '#D92222'
      }
    ],
  }
}
riot.mount('product-customiser', initialState);
