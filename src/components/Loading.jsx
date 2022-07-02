import React from 'react'

export default function Loading(props) {
  const {isLoading}=props;
  return (
    <div className={`loading-wrap ${isLoading?'':'hide'}`}>

    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
