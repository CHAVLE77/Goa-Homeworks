import React,{useState} from 'react'

const RandomImage = () => {
    const images = ['./public/image1.jpg','./public/image2.jpg','./public/image3.jpg','./public/image4.jpg']
    const [arr,setArr] = useState([])
    function add(){
        const randomize = Math.floor(Math.random() * images.length)
        let word = images[randomize]
        setArr([...arr,word])
    }
  return (
    <>
    <button onClick={add} className='w-20 h-7 block m-2 border cursor-pointer'>Click</button>
    {arr.map((el,index)=>(
        <img className='w-40 m-2' src={el} key={index} />
    ))}
    </>
)
}

export default RandomImage


