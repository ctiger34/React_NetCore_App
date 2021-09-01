import React , {useState} from 'react'
import moment from 'moment'
import { Segment, Input, Confirm, Grid, Comment, Icon, Form, Button } from 'semantic-ui-react'
import CommentStore from '../Stores/commentStore';
import {  observer } from 'mobx-react-lite';
import img from "../Assest/commentAvatar.jpg"








const Comments = observer(() => {


  const [newCom, setNewCom] = useState()
  const [mode, setMode] = useState(false)
  const [delCom, setDelCom] = useState()

  const show = (id) => {
    setMode(true)
    setDelCom(id)
  }
  const handleConfirm = (id) => {
    CommentStore.deleteComment(id);
    CommentStore.loadComments();
    setMode(false);
  }
  const handleCancel = () => setMode(false)


  const reset =  () => {
    document.querySelector('#frm').reset();
    }
  
  const handleInputChange = (event) => {
    const {name,value} = event.target;
    const crrdate = new Date();
    // const currentDate = crrdate.toString("yyy'-'MM'-'DD'T'HH':'mm");
    const currentDate = moment(crrdate).format("yyy-MM-DDTHH:mm:ss")
    setNewCom({...newCom ,[name]: value, bookId: (CommentStore.selectedBookId),  time:currentDate});
  }



    return (
        <Segment style={{border: "3px outset", padding:"10px"}}>
        <Segment >
          {
          CommentStore.selectedComment.map((l) => ( 
              
              <Comment.Group key={l.userName}  >
         
                <Comment style={{width:"170%"}}>

                  <Comment.Avatar src={img} >  <Icon name="user"  size="tiny"  /> </Comment.Avatar>
                    
                    <Comment.Content>
                      {/* <i aria-hidden="true" className="close link icon  "  ></i> */}
                      <Button floated="right" icon="delete" attached="right" size="mini"  negative circular onClick={() => show(l.id)}  /> 
                      <Confirm 
                      color="red"
                        open={mode}
                        content="Are You Sure You Want To Delete This Comment?"
                        cancelButton='Cancel'
                        confirmButton="Delete"
                        onCancel={handleCancel}
                        onConfirm={()=>handleConfirm(delCom)}
                        />
                        
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
                <hr/>
              </Comment.Group>
              
            
          

          ))
          }

        </Segment>

        <Segment>
          <Comment.Group>
          
          
          <Form id="frm" reply style={{border: "1px solid black", borderRadius:"5px" ,padding:"7px" ,width:"200%"}}>
          
          <Form.Field inline>
            <label> Name</label>
            <Input placeholder='Name'  name="userName" onChange={handleInputChange}  />
          </Form.Field>
            <Form.TextArea name="content" onChange={handleInputChange} />
            <Grid>
          <Grid.Column textAlign="center">
            <Button 
            type="submit"
            onClick={() => {
              CommentStore.addComment(newCom)
              reset()
              CommentStore.loadComments()
            }}
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
})

export default Comments;
