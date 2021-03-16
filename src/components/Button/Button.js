import React from 'react'

const Button = (props) => {
    return (
    <div style={{color: 'blue', background: 'green', borderRadius: "10px"}}>{props.children}</div>
    )
}

export default Button