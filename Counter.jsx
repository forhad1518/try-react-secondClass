import { useState } from "react"

export default function Counter(){
    const [count, counter] = useState(0)
    const added = () =>{
        const newCount = count + 1;
        counter(newCount);
    }
    const reduce = () =>{
        const newCount = count - 1;
        counter(newCount);
    }
    return(
        <div className="border border-[3px] border-black rounded-xl p-2">
            <h2 className="border-b border-black">Counter: {count}</h2>
            <button onClick={added}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}
// function getSomthing (num) {
//     function innerThing(value){
//         num = value;
//     }
//     console.log(innerThing(10))
//     return [num, innerThing]
// }
// console.log(getSomthing())