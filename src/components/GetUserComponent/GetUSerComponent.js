import './GetUserComponent.css'
const GetUserComponent = ({setUser, isLogged, changeUser})=>{
    return(
        <form className='form' onSubmit={(event)=> {
            event.preventDefault()
            isLogged(true)
        }}> 
            <div>
                <input
                type="text"
                placeholder="Insira seu nome"
                value={setUser}
                onChange={(event) => changeUser(event.target.value)} 
                />
                <button className="button"type='submit'>Acessar com o nome</button>
            </div>
        </form>
        
    )
}
export default GetUserComponent