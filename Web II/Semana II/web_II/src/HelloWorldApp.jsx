const name='Añeñi'
const departamentos=["San Salvador", "Morazan", "La Libertad"]
const personalData={
    firstName:"Añeñi",
    lastName: "Cabrera"
}


 const HelloWorldApp=()=>{
    return (
        <div> 
            <div> 
                <h1>Hola {name}</h1>
                <h2>personalData.lastName</h2>
            </div>
            <div>
                <h2>{departamentos}</h2>
            </div>        
        </div>
    )
} 

export default HelloWorldApp