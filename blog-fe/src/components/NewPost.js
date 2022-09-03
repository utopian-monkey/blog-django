import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import axios from "axios";
import {API_URL} from "../constants";

class NewPost extends React.Component {

    getDate() {
        const current= new Date();
        const date= current.getDate();
        const month= current.getMonth();
        const year= current.getFullYear();
        return date+'/'+month+'/'+year;
    }
     
    state = {
        
        author : "",
        title : "",
        text : "",
        created_date: this.getDate(),
        published_date: this.getDate()
    };

    componentDidMount() {
        if (this.props.post){
            const { author,title,text,created_date,published_date}= this.props.post;
            this.setState ({ author,title,text,created_date,published_date });
        
        }
    }
    onChange =e => {
        TouchList.setState({ [e.target.name]: e.target.value});

    };
    createPost = e => {
        e.preventDefault();
        axios.post(API_URL, this.state).then(()=>{
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
                    <Label for="author">Author:</Label>
                    <Input
                    type= "checkbox"
                    onChange={this.onChange}
                    value= {this.defaultIfEmpty(this.state.author)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="title">Title:</Label>
                    <Input
                        type="text"
                        name="title"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.title)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="text">Text:</Label>
                    <Input
                        type="text"
                        name="text"
                        onChange={this.onChange}
                        value={this.defaultIfEmpty(this.state.text)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="created_date">Created Date:</Label>
                    <Input
                        type="datetime"
                        name="created_date"
                        readOnly
                        value={this.getDate()}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="published_date">Published Date:</Label>
                    <Input
                        type="datetime"
                        name="published_date"
                        readOnly
                        value={this.getDate()}
                    />
                </FormGroup>
                <Button>Send</Button>
            </Form>
        );
    }
}

export default NewPost;