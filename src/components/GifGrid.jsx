import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";
import { Spinner } from "./Spinner";

export const GifGrid = ( {category} ) => {
  
    const {images,isLoading} = useFetchGifs(category)

  return (
    <>
        <h3>{category}</h3>
        <div className="card-grid">
        {
            isLoading ? 
            <Spinner /> :           
            images.map( ( image ) => (
            <GifItem 
            key={image.id} 
            { ...image } />))           
        }
        </div>
    </>
  )
}
