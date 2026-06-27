const Login = ({ onClick }) => {
  return (
   <button
  onClick={onClick}
  style={{
    padding: "12px 24px",
    margin: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#4f46e5",
    color: "white",
    cursor: "pointer"
  }}
>
  LogIn
</button>
  )
}

export default Login
