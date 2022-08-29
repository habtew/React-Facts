import reactLogo from '../images/reactjs-icon.png'

export default function Nav(){

    return (
    <nav className='nav'>
        <img className='nav-image' src={reactLogo} alt="react logo" />
        <h3 className='nav-header'>React Facts</h3>
        <p className='nav-tit'>react course- project 1</p>
    </nav>
    )
}