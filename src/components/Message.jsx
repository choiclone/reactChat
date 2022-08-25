import React from 'react'
import { auth } from '../firebase'

const style = {
    message: 'flex items-center shadow-xl m-4 py-2 px-3 rounded-tl-full rounded-tr-full',
    name: 'absolute mt-[-4rem] text-gray-600 text-xs',
    send: 'bg-[#395dff] text-white flex-row-reverse text-end float-right rounded-bl-full',
    received: 'bg-[#e5e5e5] text-black float-left rounded-br-full'
}

const Message = ({ message }) => {
    const messageClass = String(message.uid) === String(auth.currentUser.uid) ? `${style.send}` : `${style.received}`

    return (
        <div>
            <div className={`${style.message} ${messageClass}`}>
                <p className={style.name}>{message.name}</p>
                <p>{message.text}</p>
            </div>
        </div>
    )
}

export default Message