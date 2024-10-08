
import noImage from '../assets/no_image_available.jpg';
export default function imageNotFound (image: string){
  if(image){
    return image
  } else{ 
    return noImage.src
  }
}