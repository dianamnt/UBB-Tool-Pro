import React from 'react';
import {connect} from 'react-redux'
import NavbarStudent from '../navbar/NavbarStudent'
import './UserHome.css';
import Calendar from "./Calendar";
import {getAll} from "../../rest/userRest"

const styles = {

    logoutButton: {
        float: "right",
        top: 0
    }
};

class UserHome extends React.Component {

    constructor(props) {
        super(props)
        console.log(this.props.loggedUser)
    }
    componentDidMount() {
        //Uncomment line at the end
    if (this.props.loggedUser.firstName===undefined){
        this.props.history.push('/login')
    }
    }


    logout = () => {
        this.props.logout();
        this.props.history.push('/login')
    }

    render() {
        return (
            <div>
                <NavbarStudent loggedUser={this.props.loggedUser} logoutFct={this.logout}/>

                <div className="pageContent">

                      <Calendar loggedUser={this.props.loggedUser}></Calendar>

                </div>
            </div>
        )
    }

}

export default connect()(UserHome);


