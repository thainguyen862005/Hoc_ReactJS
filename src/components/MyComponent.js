
/**
    JSX : cho pheps vieets code HTML trong file JS
    JSX: chir cho 1 element duy nhat, 1 <div>
    {}: viết code JS bên trong dấu {}
    Để truyền giá trị (boolean, num,...): bỏ bào {}
    *
 */


import React from 'react';
import UserInfor from './UserInfor';
import DisplayInfor from './DisplayInfor';


class MyCombponent extends React.Component {

    render() {
        
        return (
            <div>
                <UserInfor />
                <br />
                <DisplayInfor name="Thai Nguyen" age="25" />
                <hr />
                <DisplayInfor name="Hoang Thai " age={26} />

            </div>
        )

    }
}

export default MyCombponent;