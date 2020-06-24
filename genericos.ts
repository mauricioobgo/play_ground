interface IPrueba3<T>{
    data:T
}

interface IData<T>{
    name:string
    email:T
}
type conBool=IPrueba3<boolean>
type conString=IPrueba3<string>
const x_prueba:conBool
const y_prueba:conString

type UserState=IPrueba3<IData<string>>

const yz_prueba:UserState

yz_prueba.data.name="Value"

