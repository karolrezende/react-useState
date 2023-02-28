import './WelcomePage.css'
const WelcomePage = ({user, isLogged})=>{
    console.log(user)
    return(
        <div className="div">
          <h1>Bem-vindo {user}</h1>  
          <div>
            <button onClick={() => isLogged(false)}>Sair</button>
          </div>
        </div>
    )

}
export default WelcomePage