import React,{useState, useEffect} from 'react'

let info = 'https://jsonplaceholder.typicode.com/users'

const UserList = () => {
    const [data,setData] = useState([])
    const [isLoading,setIsLoading]=useState(false)
    useEffect(()=>{
        async function userInfo(){
            setIsLoading(true)
            try {
                let response = await fetch(info)
                let transform = await response.json()
                setData(transform)
                setIsLoading(false)
            } catch (error) {
                console.error('Error')
            }
        }
        userInfo()
    },[])
  return (
    <>
{
  isLoading ? (<p>...Loading</p>) : (
    data.map((el) => (
      <div key={el.id} className='w-80 h-90 border m-auto mt-20'>
        <b>Name:</b>
        <p>{el.name}</p>
        <b>Username:</b>
        <p>{el.username}</p>
        <b>Email:</b>
        <p>{el.email}</p>
        <br />
      </div>
    ))
  )
}


    </>
)
}

export default UserList