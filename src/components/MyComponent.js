
/**
    JSX : cho pheps vieets code HTML trong file JS
    JSX: chir cho 1 element duy nhat, 1 <div>
    {}: viết code JS bên trong dấu {}
    Để truyền giá trị (boolean, num,...): bỏ bào {}
    *DRY: Don't Repeat Yourself
 */


import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyCombponent extends React.Component {
    state= {
        listUser: [
            { id: 1, name: 'Denis Nguyen', age: 16 },
            { id: 2, name: 'Hoang Thai', age: 26 },
            { id: 3, name: 'Nguyen Van A', age: 30 }
        ]
    }

    render() {
        
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor listUser={this.state.listUser} />
                

            </div>
        )

    }
}

export default MyCombponent;