import blogData from "../data/blog"

function Header(props){
    console.log(props)
    return (
        <div>
            <h3>{props.name}</h3>
        </div>
    )
}

export default Header