import React, {Component} from "react";
import { Col, Container, Row} from "reactstrap";
import PostList from "./PostList";

import axios from "axios";
import { API_URL } from "../constants";

class Home extends Component{
    state ={
        posts:[]
    };

    componentDidMount() {
        this.resetState();
    }

    getPosts = () => {
        axios.get(API_URL).then(res => this.setState({posts: res.data}))
       
    };

    resetState=() => {
        this.getPosts();
    };
    render() {
        return(
            <Container>
            <Row>
                 <Col>
                    <PostList
                        posts={this.state.posts}
                        resetState={this.resetState}
                    />
                </Col>
            </Row>
           
            </Container>
        )
    }
}

export default Home;