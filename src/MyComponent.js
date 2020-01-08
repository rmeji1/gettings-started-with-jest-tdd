import React from 'react'

class MyComponent extends React.Component {
  render = () => (
    <div>
      <input
        onChange={(event) => this.setState({input: event.target.value})}
        type='text'
      />
    </div>
  )
}

export default MyComponent
