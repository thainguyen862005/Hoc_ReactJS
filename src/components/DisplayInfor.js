
/** 
  - Props: Dùng dể truyền dữ liệu từ Component cha sang Component con 
 */

/**
 1.Hide/UnHide một đoạn thông tin gì đó 
 => Dùng câu điều kiện bỏ trong {... ? "..." : "..."}
 */

import React from "react";

class DisplayInfor extends React.Component {
    state={
        isShowListUser: true
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    render() {
        //Dùng destructoring để lấy giá trị từ props
        const { listUser } = this.props; // (const listUser = this.props.listUser)
        return (
            <div>
                <div>
                    <span onClick={() => { this.handleShowHide() }} >
                        {this.state.isShowListUser ? "Hide list User": "Show list User"}
                    </span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUser.map((user) => {
                            return (
                                //===== NOTE: dùng câu điều kiện để set className css ======
                                <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                    <p> My name is {user.name}</p>
                                    <p> I am {user.age} years old</p>
                                    <hr/>
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
                }
            </div>
        )
    }

}
export default DisplayInfor;