import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import './styles.css';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Jujutsu Kaisen','One Punch']);

  const onAddCategory = (newCategory) => {
    console.log(newCategory)
    //setCategories( cats => [category,...cats] );
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories]);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
 
        <AddCategory 
        //addCateg={ setCategories } 
        onAddCategory={ (newCat) => onAddCategory(newCat) }
        />
      
          {
            categories.map( (cat) => (
                <GifGrid 
                key={cat} 
                category={cat}
                />             
            ))
          }
    </>
  )
}
