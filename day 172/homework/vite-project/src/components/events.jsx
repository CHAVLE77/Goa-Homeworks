import React from 'react'

const Events = () => {
    function handleSubmit(formData){
        console.log(formData.get('name'))
        console.log(formData.get('gender'))
        console.log(formData.getAll('animals'))
        console.log(formData.get('colors'))
        console.log(Object.fromEntries(formData))
    }
  return (
    <>
    <form action={handleSubmit}>
        <label htmlFor="name"></label>
        <input className='border' type="text" name="name" id="name" />
        <br />
        <label>
            male:
            <input type="radio" name='gender' value={'male'}/>
        </label>
        <br />
        <label>
            female:
            <input type="radio" name='gender' value={'female'}/>
        </label>
        <br />
        <label>
            other:
            <input type="radio" name='gender' value={'other'}/>
        </label>
        <br />
                <label>
            lion:
            <input type="checkbox" name='animals' value={'lion'}/>
        </label>
        <label>
            dog:
            <input type="checkbox" name='animals' value={'dog'}/>
        </label>
        <label>
            cat:
            <input type="checkbox" name='animals' value={'cat'}/>
        </label>
        <br />
        <select name="colors">
            <option disabled>pick a color</option>
            <option value="red">red</option>
            <option value="blue">blue</option>
            <option value="green">green</option>
        </select>
        <br />
        <button className='border cursor-pointer'>Submit</button>
        </form>
    </>
)
}

export default Events