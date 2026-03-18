
//JSX : cho pheps vieets code HTML trong file JS
//JSX: chir cho 1 element duy nhat, 1 <div>
//{}: viết code JS bên trong dấu {}

import React from 'react';
import UserInfor from './UserInfor';


class MyCombponent extends React.Component {
    
    render() {
        return (
            <div>
                
                <UserInfor />

            </div>
        )

    }
}

export default MyCombponent;