
let inventarioAcciones = [
    {id: 1, nombre: "Acciones GGL", precio: 8000,},
    {id: 2, nombre: "Acciones APPL", precio: 4000,},
    {id: 3, nombre: "Acciones FNTECH", precio: 1500,},
    {id: 4, nombre: "Acciones TYINC", precio: 600,},
    {id: 5, nombre: "Acciones BTCS", precio: 2000,},
    {id: 6, nombre: "Acciones SBUX", precio: 1000,}

]


export const getFetch = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(inventarioAcciones)
        },2000)
    })
}