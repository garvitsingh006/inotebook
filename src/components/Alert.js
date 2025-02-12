import React from 'react'

function Alert(props) {
    const {alert} =  props
    const capitialize = (word) => {
        const lower = word.toLowerCase()
        return (lower.charAt(0).toUpperCase() + lower.slice(1))
    }
    return (
        <div style={{height: "60px"}} className='my-2'>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitialize(alert.type)}</strong>: {alert.msg}
            </div>}
        </div>
    )
}

export default Alert