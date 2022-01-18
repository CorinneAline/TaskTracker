import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="bg-dark text-center p-3">
            <div className="row d-flex justify-content-between align-items-center">
                <span className="text-white">Copyright &copy; 2022</span>
                <Link to='/about'>About</Link>
            </div>
        </footer>
    )
}

export default Footer
