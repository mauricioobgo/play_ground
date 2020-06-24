

// el signo ? sirve para definir que el argumento de la interface es opcional
interface IPrueba{

    texto:string
    numero?:number
    boolenao?:boolean
    obj?:{
        texto:string
        numero:number
        booleano:boolean
    }
    arr?:string[]
    arrN?:number[]
    arrB?: boolean[]
}

interface IPrueba2{
    met(x:string):number
}

interface IUser{
    name:string
}
// con la finalidad de prevenir errores de tipo
const fn=(x:IPrueba):IUser[]=>{
    return [{name:""}]
}

fn({texto:''})

class ClasePrueba implements IPrueba{
    texto=""
}

class ClasePrueba2 implements IPrueba2{
    public texto="texto"
    public met(x){
        return 1
    }
}