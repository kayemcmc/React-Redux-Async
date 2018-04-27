import React, { Component } from 'react'

//import Styled Components
import styled from 'styled-components';

//redux
import { connect } from 'react-redux';
//actions
import { addComment } from '../../actions/comments';


class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            user: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e){
      e.preventDefault();
      const { postId } = this.props;
      const newComment = {
        content: this.state.content,
        user: this.state.user
      };
      this.props.addComment(postId, newComment);
      this.setState({ content: '', user: ''});
    }
    
    onChange(e) {
      this.setState({[e.target.name]: e.target.value});
    }
      render() {
        return (
            <div className="post-form mb-3">
            <div className="card card-info">
              <div className="card-header bg-info text-white">
                Make a comment...
              </div>
              <div className="card-body">
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <textarea
                    className='form-control form-control-lg mb-3'
                      placeholder="Reply to post"
                      name="content"
                      value={this.state.content}
                      onChange={this.onChange}
                    />
                    <input
                    className='form-control form-control-lg mb-3'
                      placeholder="Please tell us your name!"
                      name="user"
                      value={this.state.user}
                      onChange={this.onChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>
        )
      }
    }


export default connect(null, { addComment })(AddComment);