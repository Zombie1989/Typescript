import React from 'react'

interface AlertNotificationType {
    alert: string
    title: string
    text: string
}

const AlertNotification: React.FC<AlertNotificationType> = ({alert = "warning", title, text}) => {
  return (
    <div className={`alert alert-${alert} text-center mb-5`} role="alert">
        <h3>{title}</h3> 
        <p>{text}</p>
    </div>
  )
}

export default AlertNotification