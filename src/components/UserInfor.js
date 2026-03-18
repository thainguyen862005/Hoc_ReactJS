import React from 'react'

class UserInfor extends React.Component {
    state = {
        name: 'Denis Nguyen',
        address: 'HCM',
        age: 20
    }
    

    hendleonMouseOver = (event) => {
        console.log(event);
    }

    handleonChangeInput = (e) => {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value);
    }
    handleonChangeAge = (e) => {
        this.setState({
            age: e.target.value
        })
        console.log(e.target.value);
    }

    handleOnSubmit = (e) => {
        e.preventDefault(); //Chặn load lại trang khi submit form
        console.log(this.state);
    }

    render() {
        return( 
            <div>
                My name is ({this.state.name}), I am ({this.state.age}) years old, I am from ({this.state.address})
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={(e) => { this.handleOnSubmit(e) }}>
                    <label>Enter your name</label>
                    <input
                        value={this.state.name} //tránh set cứng giá trị trong input, khi thay đổi sẽ gọi hàm handleonChangeInput để set lại state
                        type='text'
                        onChange={(e) => { this.handleonChangeAge(e) }} />

                        <label>Enter your Age</label>
                    <input
                        value={this.state.age} //tránh set cứng giá trị trong input, khi thay đổi sẽ gọi hàm handleonChangeInput để set lại state
                        type='text'
                        onChange={(e) => { this.handleonChangeInput(e) }} />
                    <button>Submit</button>
                </form>
            </div>
        )

}
}
export default UserInfor;
