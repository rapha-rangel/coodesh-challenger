
import noImage from '../assets/no_image_available.jpg';
export default function imageNotFound (url: string){
  if(url){
    return url
  } else{ 
    return noImage.src
  }
}