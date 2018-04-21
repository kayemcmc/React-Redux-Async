import React, { Component } from 'react'

export default class AddComment extends Component {
    state = {
        comment: '',
        name: '',
    }
    handleInputChange = (e) => {
        const { value, name } = e.target
        this.setState(() => ({
            [name]: value
        }))
    }
    isDisabled = () => {
        const { comment, name } = this.state

        return comment === ''
            || name === ''
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log('Add cooment: ', this.state)
    }
  render() {
    const { comment, name } = this.state
    return (
        <div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Comment" 
            value={comment}
            name="comment"
            onChange={this.handleInputChange}/>

            <input 
            type="text" 
            placeholder="Name" 
            value={name}
            name="name"
            onChange={this.handleInputChange}/>

            <button 
            className='btn'
            type="submit">
                Submit
            </button>
          <input 
            type="submit" 
            hidden 
            disabled={this.isDisabled()}
          />
        </form>
      </div>
    )
  }
}
