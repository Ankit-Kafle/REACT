const PropsAsChild = (props) => {
  return (
    <>
      <div>
        {props.children}
      </div>



{/*If props.text exists → show button.
If props.text is undefined → don't show button. */}
      {props.text && (
        <button id="btn" onClick={props.incrementCount}>
          {props.text}
        </button>
      )}
    </>
  )
}

export default PropsAsChild