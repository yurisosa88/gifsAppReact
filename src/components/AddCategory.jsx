import React, { useState } from 'react'

export const AddCategory = ( {onAddCategory} ) => {
    const [inputValue, setInputValue] = useState('');

    const onChangeValue = (event) => {
        setInputValue(event.target.value);
    }

    const onSendValue = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <= 1 ) return
        //addCateg( (categories) => [inputValue,...categories]);
        onAddCategory(inputValue)
        setInputValue('');
    }

  return (
    <form onSubmit={onSendValue} >
        <input 
        type='text' 
        placeholder='Buscar Gifts' 
        value={inputValue} 
        onChange={onChangeValue}/>
    </form>
  )
}
