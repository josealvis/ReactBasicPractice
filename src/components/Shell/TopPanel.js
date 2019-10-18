import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions/user.action';
import { AppText } from "../../appCofig/constants/appTexts.constants"

class TopPanel extends React.Component {

    constructor(props) {
        super(props)
        this.greeting = '';
        this.logOutHandler = this.logOutHandler.bind(this);
    }

    componentWillMount(){
        let time = new Date();
        console.log('time', time.getHours);
        const Greetings =  AppText.USER_GREETINGS;
        if(time.getHours()<=12){
            this.greeting = Greetings.MORNING[Math.floor(Math.random() * Greetings.MORNING.length)]
        }else  if(time.getHours()>=12 && time.getHours()<=19){
            this.greeting =Greetings.AFTER_NOON[Math.floor(Math.random() * Greetings.AFTER_NOON.length)]
        }else  if(time.getHours()>19 && time.getHours()<=23){
            this.greeting =Greetings.NIGHT[Math.floor(Math.random() * Greetings.NIGHT.length)]
        }
    }

    logOutHandler(e) {
        this.props.logout();
    }

    render() {
        return (<div className='ja-top-panel'>

           { this.props.loggingIn.loggedIn && <div><p>{this.greeting} <b>{this.props.loggingIn.user}</b> <i className="far fa-user"></i></p></div>}
           { this.props.loggingIn.loggedIn && <div><a onClick={this.logOutHandler}>log out</a></div>}
        </div>);
    }
}


//mapea  las propiedades del component con los reducers
function mapStateToProps(state) {
    return { loggingIn: state.authentication };// autentication reducer
}

const mapDispachToProp =  {
        logout: userActions.logout
}

const connectedLoginPage = connect(mapStateToProps, mapDispachToProp)(TopPanel);
export { connectedLoginPage as TopPanel };