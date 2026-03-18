import React from 'react';


class MyCombponent extends React.Component {
    //JSX : cho pheps vieets code HTML trong file JS
    //JSX: chir cho 1 element duy nhat, 1 <div>
    //{}: viết code JS bên trong dấu {}
    render(){
        return (
            <div>
                My first component
                {Math.random()}
                

            </div>
        )

    }
}

export default MyCombponent;