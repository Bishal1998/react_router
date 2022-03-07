import { Link, NavLink } from "react-router-dom"

const Navbar = () => {

    const style=({isActive}) => {
        return {
            backgroundColor : isActive ? 'red' : ''
    }}
  return (
    <>
        <ul>
            <li><NavLink to="/" style={style}>Home</ NavLink></li>
            <li><NavLink to="/about" style={style}>About</ NavLink></li>
            <li><NavLink to="/contact" style={style}>Contact</ NavLink></li>
            <li><NavLink to="/post/mobile" style={style}>Post</ NavLink></li>
            <li><NavLink to="/post/mobile/1" style={style}>Post</ NavLink></li>
        </ul>
    </>
  )
}

export default Navbar