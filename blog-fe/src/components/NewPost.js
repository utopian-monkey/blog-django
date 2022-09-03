import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import {API_URL} from "../constants";

class NewPost extends React.Component {

    
     
    state = {
       
        title : "",
        text : "",
        
    };

    componentDidMount() {
        if (this.props.post){
            const { author,title,text }= this.props.post;
            this.setState ({ author,title,text});
            console.log(this.props.post.text)
        
        }
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(e.target.name);

    };
    createPost = e => {
        e.preventDefault();
        const data = {
            author: this.state.author,
            title : this.state.title,
            text : this.state.text,
           
        }
        axios.post(API_URL, {data}).then(res =>{

            console.log(res);
            console.log(res.data);
            this.props.resetState();
            this.props.toggle();
        });
    };

    defaultIfEmpty = value => {
        return value === ""?"": value;
    };

    render(){
        return (
            <Form onSubmit={this.createPost}>
                
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        //value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text:</Label>
                    <Input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        //value={this.defaultIfEmpty(this.state.text)}
                    />
                </FormGroup>
                
               
                <Button type="submit">Send</Button>
            </Form>
        );
    }
}

export default NewPost;