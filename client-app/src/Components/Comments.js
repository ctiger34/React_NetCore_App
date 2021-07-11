import React from 'react'
import { Segment, Input, Grid, Card, Comment, Icon, Form, Button } from 'semantic-ui-react'


export const Comments = () => {
    return (
        <Segment>
        <Segment>
            <Comment.Group>
    <Comment>
      <Comment.Avatar src="/Assest/commentAvatar.jpg" >  <Icon name="user" size="tiny" /> </Comment.Avatar>
      <Comment.Content>
        <Comment.Author>UserName</Comment.Author>
        <Comment.Metadata>
          <div>Comment Time</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>
            COMMENT CONTENT
          </p>
        </Comment.Text>
      </Comment.Content>
    </Comment>
    </Comment.Group>
    </Segment>


    <Segment>
    <Comment.Group>
    
    
    <Form reply style={{border: "1px solid black", borderRadius:"5px" ,padding:"5px"}}>
    
    <Form.Field inline>
      <label> Name</label>
      <Input placeholder='Name' />
    </Form.Field>
  
    
      <Form.TextArea />
      <Grid>
    <Grid.Column textAlign="center">
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Grid.Column>
  </Grid>
    
      </Form>
    
    
  </Comment.Group>
        </Segment>
        </Segment>
    )
}
