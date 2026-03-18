
/**
    JSX : cho pheps vieets code HTML trong file JS
    JSX: chir cho 1 element duy nhat, 1 <div>
    {}: viết code JS bên trong dấu {}
    Để truyền giá trị (boolean, num,...): bỏ bào {}
    *DRY: Don't Repeat Yourself
 */
/**
    1.Khi truyền funtion từ cha -> con không ()
 */


import React from 'react';
import AddUserInfor from './AddUserInfor';
import DisplayInfor from './DisplayInfor';


class MyCombponent extends React.Component {
    state= {
        listUser: [
            { id: 1, name: 'Denis Nguyen', age: 16 },
            { id: 2, name: 'Hoang Thai', age: 26 },
            { id: 3, name: 'Nguyen Van A', age: 30 }
        ]
    }
    handleAddNewUser= (userObj)=>{
        console.log("check Data Add",userObj);
        this.setState({
            listUser: [userObj,...this.state.listUser]
        })
    }

    render() {
        
        return (
            <div>
                <AddUserInfor 
                handleAddNewUser= {this.handleAddNewUser}/>

                <br />

                <DisplayInfor 
                listUser={this.state.listUser} 
                /> 
                

            </div>
        )

    }
}

export default MyCombponent;