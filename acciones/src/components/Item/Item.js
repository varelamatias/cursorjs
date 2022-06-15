
let inventarioAcciones = [
    {id: 1, nombre: "Acciones GGL", precio: 8000, img:"https://images.unsplash.com/photo-1505238680356-667803448bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
    {id: 2, nombre: "Acciones APPL", precio: 4000, img:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
    {id: 3, nombre: "Acciones FNTECH", precio: 1500, img:"https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
    {id: 4, nombre: "Acciones TYINC", precio: 600, img:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80"},
    {id: 5, nombre: "Acciones BTCS", precio: 2000, img:"https://images.unsplash.com/photo-1624996379671-b4d0837e45cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},
    {id: 6, nombre: "Acciones SBUX", precio: 1000, img:"https://images.unsplash.com/photo-1583752028088-91e3e9880b46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"}

]


export const getFetch = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(inventarioAcciones)
           
        },2000)
    })
}

let inventarioAccion = {id: 1, nombre: "Acciones GGL", precio: 8000, img:''}


export const getFetchOne = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(inventarioAccion)
        },)
    })
}