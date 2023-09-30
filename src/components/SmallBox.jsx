import React,{useState} from 'react'

const SmallBox = ({value,onSquareClick}) => {
    // const [value, setValue] = useState(null);
    // function handleClick() {
    //     if (value == 'X') {
    //         setValue('0');
    //     }
    //     else {
    //         setValue('X');
    //     }
    // }

  return (
      <button type="button" className="smallbox" onClick={onSquareClick}>{value}</button>
  )
}

export default SmallBox
