import React from 'react'; 
import { Link } from 'react-router';
import Footer from '../common/Footer.jsx'; 
const HomePage = () => (<div>  
            <div className="home"> 
                <img className="chat-icon" src="http://image.flaticon.com/icons/svg/236/236850.svg" alt="Chat free icon" />
                <h1 className="big-t">Welcome to Chat, made with React and Socket.io </h1>
                <h2 className="little-t">Do you want to the meet these technologies ?</h2>
                <div className="tech">
                    <a href="https://facebook.github.io/react/"><img src="http://enriquev.github.io/images/react.png" alt="React"/></a>
                    <a href="http://socket.io/"><img src="http://byspel.com/wp-content/uploads/2015/12/socketio2.png" alt="Socket.io"/></a>
                </div>
                <h2 className="little-t">The main layout of the application are based on <a href="https://github.com/facebookincubator/create-react-app">create-react-app</a>,
                and the socket used was <a href="https://github.com/PlatziDev/socket.io-react">socket.io-react</a>, credits for repo owners.</h2>
                <div> 
                    <Link to="chat"> 
                        <button className="let-chat">Lets chat</button> 
                    </Link> 
                </div> 
            </div>
            <Footer />
    </div>); 
export default HomePage;
 