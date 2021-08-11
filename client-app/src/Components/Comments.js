import React , {useState} from 'react'
import moment from 'moment'
import { Segment, Input, Grid, Comment, Icon, Form, Button } from 'semantic-ui-react'
import Agent from '../Api/Agent';
import CommentStore from '../Stores/commentStore';
import { observer } from 'mobx-react-lite';








const Comments = () => {



  const [comments, setComments] = useState([])
  const [newCom, setNewCom] = useState()

  const cmments = [CommentStore.selectedComment]

  



  


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
    setNewCom({...newCom ,[name]: value, bookId: (CommentStore.selectedBookId),  time:currentDate});
    console.log(newCom);
  }

    return (
        <Segment>
        <Segment>
          {
          cmments.map((m) => ( 
            m.map((l) => (
            
            
              <Comment.Group>
          <Comment key={l.id}>
          <Comment.Avatar src="/Assest/commentAvatar.jpg" >  <Icon name="user"  size="tiny" /> </Comment.Avatar>
                <Comment.Content key={l.id}>
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
            )
          

          )))}

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

export default observer(Comments);
