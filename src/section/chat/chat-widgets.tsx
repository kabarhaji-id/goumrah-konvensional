"use client";

import React, { useReducer, useEffect, useCallback, useRef, useMemo } from 'react'
import css from "./chat.module.css";
import { reducer } from "./reducer";
import { IsmaProps } from "./chat-interfaces";
import { IsmaButton,CloseSVG,CheckSVG,SendSVG } from "./Icons";
//import SoundBeep from "../../assets/audio/whatsapp-notification.mp3";

export function ChatWidgets({
    onClick, onSubmit,
    onClose, onNotification,
    onLoopDone, phoneNumber = '+62812848437805',
    accountName = 'Isma',
    avatar,statusMessage = 'Typically replies within 1 hour',
    chatMessage = 'Hello there! 🤝 \nHow can we help?',
    placeholder = 'Type a message..',
    messageDelay = 2, allowClickAway = false,
    allowEsc = false, notification = true,
    notificationDelay = 60, notificationLoop = 0,
    notificationSound = false, notificationSoundSrc = "https://soundbible.com/mp3/WhatsApp-Notification-Sound-1.mp3",
    notificationStyle,notificationClassName = 'floating-isma-notification',
    buttonStyle, buttonClassName = 'floating-isma-button',
    chatboxHeight = 320,
    chatboxStyle,
    chatboxClassName = 'floating-isma-chatbox',
    darkMode = false,style,className = 'floating-isma'
}: IsmaProps) {

  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
    isOpen: false,
    isDelay: true,
    isNotification: false
  })

  //const audio = new Audio(notificationSoundSrc);
  //audio.play()

  const timeNow = useMemo(() => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), [])

  const inputRef = useRef<HTMLInputElement | null>(null)
  const soundRef = useRef<HTMLAudioElement | null>(null)
  const loops = useRef(0)
  const notificationInterval = useRef(0)

  const handleNotification = useCallback(() => {
    if (!notification) return

    dispatch({ type: 'notification' })
    if (onNotification) onNotification()
    if (notificationLoop > 0) {
      loops.current += 1

      if (notificationSound) {
        if (soundRef.current) {
          soundRef.current.currentTime = 0
          soundRef.current.play()
        }
      }
      if (loops.current === notificationLoop) {
        clearInterval(notificationInterval.current)
        if (onLoopDone) onLoopDone()
      }
    }
  }, [notification, notificationLoop, notificationSound, onNotification, onLoopDone])

  useEffect(() => {
    const delayInSecond = notificationDelay * 1000
    if (delayInSecond < 10) return console.error('notificationDelay prop value must be at least 10 seconds.')

    notificationInterval.current = window.setInterval(handleNotification, delayInSecond)

    return () => clearInterval(notificationInterval.current)
  }, [handleNotification, notificationDelay])

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation()

      if (isOpen) return

      clearInterval(notificationInterval.current)
      dispatch({ type: 'open' })
      setTimeout(() => dispatch({ type: 'delay' }), messageDelay * 1000)
      if (onClick) onClick(event)
    },
    [isOpen, onClick, messageDelay]
  )

  const handleClose = useCallback(() => {
    dispatch({ type: 'close' })

    if (onClose) onClose()
  }, [onClose])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!inputRef.current?.value) return

    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${inputRef.current.value}`)
    if (onSubmit) onSubmit(event, inputRef.current.value)
    inputRef.current.value = ''
  }

  useEffect(() => {
    const onClickOutside = () => {
      if (!allowClickAway || !isOpen) return

      handleClose()
    }
    document.addEventListener('click', onClickOutside, false)

    return () => document.removeEventListener('click', onClickOutside)
  }, [allowClickAway, isOpen, handleClose])

  useEffect(() => {
    const onEscKey = (event: KeyboardEvent) => {
      if (!allowEsc || !isOpen) return

      if (event.key === 'Escape') handleClose()
    }

    document.addEventListener('keydown', onEscKey, false)

    return () => document.removeEventListener('keydown', onEscKey)
  }, [allowEsc, isOpen, handleClose])

  return (
    <div className={`${css.floatingTanyaIsma} ${darkMode ? `${css.dark} ` : ''} ${className}`} style={style}>
      <div
        className={`${css.ismaButton} ${buttonClassName}`}
        onClick={handleOpen}
        style={buttonStyle}
        aria-hidden='true'
      >
        <IsmaButton />
        {isNotification && (
          <span className={`${css.notificationIndicator} ${notificationClassName}`} style={notificationStyle}>
            1
          </span>
        )}

      </div>

      <div className={`${css.ismaChatBox} ${isOpen ? css.open : css.close} ${chatboxClassName}`}
           onClick={(event) => event.stopPropagation()}
           aria-hidden='true'
           style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}>

        <header className={css.chatHeader}>
          <div className={css.avatar}>
            <img src={avatar} width='60' height='60' alt='isma-avatar' />
          </div>
          <div className={css.status}>
            <span className={css.statusTitle}>{accountName}</span>
            <span className={css.statusSubtitle}>{statusMessage}</span>
          </div>
          <div className={css.close} onClick={handleClose} aria-hidden='true'>
            <CloseSVG />
          </div>
        </header>

        <div className={css.chatBody}
             style={{ backgroundImage: `url(${darkMode ? "./assets/image/bg-chat-tile-dark.png" : "./assets/image/bg-chat-tile-light.png"})` }}>
          {isDelay ? (
            <div className={css.chatBubble}>
              <div className={css.typing}>
                <div className={css.dot} />
                <div className={css.dot} />
                <div className={css.dot} />
              </div>
            </div>
          ) : (
            <div className={css.message}>
              <span className={css.triangle} />
              <span className={css.accountName}>{accountName}</span>
              <p className={css.messageBody}>{chatMessage}</p>
              <span className={css.messageTime}>
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>
        <footer className={css.chatFooter}>
          <form onSubmit={handleSubmit}>
            <input className={css.input} placeholder={placeholder} ref={inputRef} dir='auto' />
            <button type='submit' className={css.buttonSend}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
      {notificationSound && <audio ref={soundRef} hidden src={notificationSoundSrc} />}
    </div>
  );
}