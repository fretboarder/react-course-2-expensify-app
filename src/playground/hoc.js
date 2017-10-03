// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react'
import ReactDOM from 'react-dom'


const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
)

const withAdminWarning = (WrappedComponent) => 
  (props) => (
    <div>
      {props.isAdmin && <p>This is private info, please don't share!</p>}
      <WrappedComponent {...props}/>
    </div>
  ) 


const requireAuthentication = (WrappedComponent) => 
  (props) => (
    <div>
      {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please login first</p>} 
    </div>
  )


const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

//ReactDOM.render(<AdminInfo isAdmin={true} info='ollas oasch' />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={false} info='Authentication Info' />, document.getElementById('app'))