
/** 
  - Props: Dùng dể truyền dữ liệu từ Component cha sang Component con 
 */

import React from "react";

class DisplayInfor extends React.Component{
    render() {
        //Dùng destructoring để lấy giá trị từ props
        const { listUser} = this.props; // (const listUser = this.props.listUser)
        return(
            <div>
                {listUser.map((user) =>{
                    return (
                        <div>
                            <p> My name is {user.name}</p>
                            <p> I am {user.age} years old</p>
                        </div>
                    )
                })}
                {/* <p>Name: {name}</p>
                <p>Age: {age}</p>
                <hr />
                <p>Name: {name}</p>
                <p>Age: {age}</p>
                <hr />
                <p>Name: {name}</p>
                <p>Age: {age}</p> */}
            </div>
        )
    }

}
export default DisplayInfor;