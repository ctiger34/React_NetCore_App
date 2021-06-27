import  {useState, useEffect} from 'react'
import axios from 'axios'
import { Input } from 'semantic-ui-react'

export const Test = () => {



    const [values, setValues] = useState({});
    const [id, setId] = useState(1);

    useEffect(() => {
        axios.get(`https://localhost:5001/api/values/${id}`)
            .then( (res) => {
                setValues(res.data)
            })
            .catch((err)=>{
                console.log(err)
            })
    
        }, [id])


    return (
        <div>
            
            <Input icon='users' iconPosition='left' placeholder='Search users...' value={id} onChange={e => setId(e.target.value)}/>

            <h1>   {values.name} </h1>
        </div>
    )
}
