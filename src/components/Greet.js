import React from 'react'

// function Greet(){
//     return <h1>Hello World</h1>
// }

//export const Greet = () => <h1>Hello World</h1>

// const Greet = ({name, heroName}) => {
// //console.log(props)
//     // props.name = 'World'
//     return (
//         <div>
//              {/* <h1>
//                  Hello {props.name} a.k.a {props.heroName}
//                  </h1>
//             {props.children} */}

//                 <h1>
//                  Hello {name} a.k.a {heroName}
//                  </h1>
//         </div>
       
//     ) 
// }


const Greet = props => {
    //console.log(props)
        // props.name = 'World'
        const {name, heroName} = props
        return (
            <div>
                 {/* <h1>
                     Hello {props.name} a.k.a {props.heroName}
                     </h1>
                {props.children} */}
    
                    <h1>
                     Hello {name} a.k.a {heroName}
                     </h1>
            </div>
           
        ) 
    }
export default Greet