import React , {useState, useEffect} from 'react'
import Axios from 'axios';
import {Header, Icon, List} from 'semantic-ui-react';



export const Values = () => {
    
    const [values, setvalues] = useState([]);

    

    useEffect(() => {
        Axios.get("https://localhost:5001/api/values")
            .then( res => {
                setvalues(res.data)
            })
            .catch( err => {
                console.log(err)
            })
    }, [])

    
    

    return (
        
        <div>
        <Header as="h1">
        <Icon name='home'  />
        FullStack App

        </Header>

        <List>
            {values.map((val) => {
                return (
                    <List.Item key={val.id} icon='users' content={val.name} />
                )
            })}
       
        </List>
        </div>
        
    )
              

    
}
