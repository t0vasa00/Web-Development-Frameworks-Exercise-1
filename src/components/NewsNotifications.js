import React from 'react'

export default function NewsNotifications(props) {
    return (
        <div class="notifiContainer">
            <span class="notifiHead">{ props.topic }:</span> {props.body}
        </div>
    )
}
