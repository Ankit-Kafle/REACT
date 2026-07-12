import { useSelector } from "react-redux"

const Paste = () => {

  const pastes = useSelector((state) => state.paste.pastes); 
  console.log(pastes);
  return (
    <div>
      LIST OF ALL PASTE
    </div>
  )
}

export default Paste
