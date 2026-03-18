
/** 
  - Props: Dùng dể truyền dữ liệu từ Component cha sang Component con 
 */

import React from "react";

class DisplayInfor extends React.Component{
    render() {
        //Dùng destructoring để lấy giá trị từ props
        const { name, age } = this.props;
        return(
            <div>
                <p>Name: {name}</p>
                <p>Age: {age}</p>
            </div>
        )
    }

}
export default DisplayInfor;