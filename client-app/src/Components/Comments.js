import React , {useState, useEffect} from 'react'
import moment from 'moment'
import { Segment, Input, Grid, Comment, Icon, Form, Button } from 'semantic-ui-react'
import Agent from '../Api/Agent';








export const Comments = ({comment,selectedBookId}) => {



  const [comments, setComments] = useState([])
  const [newCom, setNewCom] = useState()
  

  
  useEffect( ( )=> {
    setComments([comment])
  },[comment]) 
  


  const handleSubmit = async (e) => {

    e.preventDefault();
    await Agent.Comments.create(newCom).then(() => {
      setComments([...comments, newCom])
      e.target.value = "";
    })

    .catch((err) => 
    {
      console.log(err)
    })
  }
  const handleInputChange = (event) => {
    const {name,value} = event.target;
    const crrdate = new Date();
    // const currentDate = crrdate.toString("yyy'-'MM'-'DD'T'HH':'mm");
    const currentDate = moment(crrdate).format("yyy-MM-DDTHH:mm:ss")
    setNewCom({...newCom ,[name]: value, bookId: (selectedBookId),  time:currentDate});
    console.log(newCom);
  }

    return (
        <Segment>
        <Segment>
          {
          comments.map((c) => ( 
            
            c.map((l)=> (
              <Comment.Group>
          <Comment key={l.id}>
          <Comment.Avatar src="/Assest/commentAvatar.jpg" >  <Icon name="user"  size="tiny" /> </Comment.Avatar>
                <Comment.Content>
                  <Comment.Author>{l.userName}</Comment.Author>
                  <Comment.Metadata>
                    <div> {moment(l.time).format("hh:mm, D.M.Y")} </div>
                  </Comment.Metadata>
                  <br/>
                  <Comment.Text>
                    <p>
                      {l.content}
                    </p>
                  </Comment.Text>
                </Comment.Content>
              </Comment>
              </Comment.Group>
            ))
          

          ))}

        </Segment>

        <Segment>
          <Comment.Group>
          
          
          <Form reply style={{border: "1px solid black", borderRadius:"5px" ,padding:"5px"}}>
          
          <Form.Field inline>
            <label> Name</label>
            <Input placeholder='Name'  name="userName" onChange={handleInputChange}  />
          </Form.Field>
            <Form.TextArea name="content" onChange={handleInputChange} />
            <Grid>
          <Grid.Column textAlign="center">
            <Button 
            type="submit"
            onClick={handleSubmit}
            content='Add Comment' 
            labelPosition='left' 
            icon='edit' 
            primary />
          </Grid.Column>
        </Grid>
          
            </Form>
          
          
        </Comment.Group>
        </Segment>
      
        </Segment>
       
    )
}
