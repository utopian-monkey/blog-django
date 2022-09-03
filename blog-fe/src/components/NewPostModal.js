import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewPost from "./NewPost";

class NewPostModal extends Component {
    state = {
        modal:false
    };

    toggle = () => {
        this.setState(previous => ({
            modal: !previous.modal
        }));
    };

    render(){
        
        var title= "Creating New Post";
        

    return (
        <Fragment>
          {<Button
                color="primary"
                className="float-right"
                onClick={this.toggle}
                style={{ minWidth: "200px"}}
            >
                Create New Post
            </Button>}
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
  
            <ModalBody>
              <NewPost
                resetState={this.props.resetState}
                toggle={this.toggle}
                post={this.props.post}
              />
            </ModalBody>
          </Modal>
        </Fragment>
      );
    }
}
  
  
  export default NewPostModal;