
//JSX : cho pheps vieets code HTML trong file JS
//JSX: chir cho 1 element duy nhat, 1 <div>
//{}: viết code JS bên trong dấu {}

import React from 'react';


class MyCombponent extends React.Component {
    state = {
        name: 'Denis Nguyen',
        address: 'HCM',
        age: 20
    }
    handleClick = (event) => {
        console.log("click me");
        console.log("Random " + Math.floor(Math.random() * 100));

        this.setState({
            name: 'Denis Nguyen 2.0',
            age: Math.floor((Math.random() * 100) + 1)
        })
       
    }

    hendleonMouseOver = (event) => {
        console.log(event);
    }

    handleonChangeInput = (e)=> {
        this.setState({
            name: e.target.value
        })
        console.log(e.target.value);
    }

    handleOnSubmit = (e) =>{
        e.preventDefault(); //Chặn load lại trang khi submit form
        console.log(this.state);
    }

    render() {
        return (
            <div>
                My name is ({this.state.name}), I am ({this.state.age}) years old, I am from ({this.state.address})
                <button onClick={(event) => {this.handleClick(event)}}>Click me</button>
                <form onSubmit={(e) => {this.handleOnSubmit(e)}}>
                    <input 
                        type='text'
                        onChange={(e) => {this.handleonChangeInput(e)}}/>
                    <button>Submit</button>
                </form>

            </div>
        )

    }
}

export default MyCombponent;