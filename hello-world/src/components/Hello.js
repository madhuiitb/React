import React from 'react'

const Hello = () => {

    //Without JSX
    
    //  return(
    //     <div className='dummyClass'>
    //         <h1>Hello World</h1>
    //     </div>
    // )

    //With JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummy'},
        React.createElement('h1',null,'Hello World'))
}

export default Hello