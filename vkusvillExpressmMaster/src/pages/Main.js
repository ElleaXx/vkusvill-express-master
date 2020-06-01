import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import styles from '../index.module.css';
import Header from '../features/Header';
import { withRouter } from 'react-router'
import { Link } from "react-router-dom";

import { Input, Button, Typography, Space  } from 'antd';
import { stat } from 'fs-extra';

@inject("store")
@observer
export default class Main extends Component {
    
    state = {
        loginValue: '',
        passwordValue: '',
        warningLength: ''
    }
    loginChange = (event) => {
        this.setState({
            loginValue: event.target.value
        })
    }
    passwordChange = (event) => {
        this.setState({
            passwordValue: event.target.value
        })
    }
    inButtonRegistr = () => {
        if(this.state.loginValue.length < 5 && this.state.passwordValue.length < 5){
            this.setState({
                warningLength: 'Введите больше данных'
            })
        }
        else {
            this.setState({
                warningLength: ''
            })
        }
    }
    render() {
        const { Text, Link } = Typography;
        return (
            <div className={styles.main}>
            <div className={styles.header}>
            <div className = {styles.entrance}>
                <div style = {{marginTop:'9%'}} className = {styles.vectorText}>
                    <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.58983 13.5566V19.7355H5.74224C7.64896 19.7355 8.93446 19.4951 9.59768 19.0142C10.2597 18.5322 10.5913 17.8342 10.5913 16.9157C10.5913 15.8769 10.2025 15.0587 9.42368 14.4576C8.64608 13.8565 7.35352 13.5566 5.54375 13.5566H4.58983ZM4.58983 4.37685V9.45747H5.59513C6.71369 9.45747 7.54502 9.22291 8.08915 8.75253C8.63086 8.28334 8.90293 7.64373 8.90293 6.83488C8.90293 6.0809 8.6449 5.48331 8.12885 5.04096C7.61272 4.59861 6.82811 4.37685 5.77494 4.37685H4.58983ZM0 24.1112V0H3.79236C5.99211 0 7.60103 0.143561 8.61807 0.42718C10.0624 0.810007 11.2113 1.51964 12.066 2.55724C12.9195 3.59601 13.3469 4.8192 13.3469 6.22913C13.3469 7.14768 13.1518 7.97985 12.7642 8.72799C12.3754 9.47731 11.7437 10.1788 10.8703 10.8347C12.3345 11.5245 13.4064 12.3835 14.0836 13.4165C14.762 14.4483 15.0994 15.6691 15.0994 17.079C15.0994 18.4341 14.7514 19.669 14.0509 20.7836C13.3491 21.8982 12.4477 22.7316 11.342 23.2836C10.2364 23.8345 8.70915 24.1112 6.76273 24.1112H0Z" fill="#36BA5F"/>
                    </svg>
                    <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.313965 0.277832H4.79053V6.95051L10.9531 0.277832H16.4186L8.47427 8.96735L16.5178 18.1109H10.5807L5.26108 11.8117L4.79053 12.3743V18.1109H0.313965V0.277832Z" fill="#36BA5F"/>
                    </svg>

                    <svg width="17" height="19" viewBox="0 0 19 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0444336 0.277832H4.61789L9.25207 11.4674L14.365 0.277832H18.9525L7.77977 24.6353H3.15721L6.82581 16.7803L0.0444336 0.277832Z" fill="#36BA5F"/>
                    </svg> 
                    {/* Проблемная буква 'У'*/}

                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.406 4.88402L14.6802 6.93349C13.9797 6.20056 13.2884 5.69286 12.603 5.40804C11.9188 5.12329 11.119 4.98323 10.199 4.98323C8.52458 4.98323 7.16902 5.4816 6.13567 6.48068C5.10121 7.4786 4.58399 8.75663 4.58399 10.3183C4.58399 11.8344 5.08137 13.074 6.07848 14.0322C7.07442 14.9928 8.38219 15.4737 10.0005 15.4737C12.004 15.4737 13.564 14.7908 14.6802 13.4241L18.2098 15.8401C16.295 18.3273 13.5967 19.5703 10.1102 19.5703C6.9729 19.5703 4.51511 18.6413 2.73796 16.7855C0.962067 14.9262 0.074707 12.7518 0.074707 10.2611C0.074707 8.53486 0.506736 6.94518 1.37072 5.49093C2.2336 4.03896 3.43853 2.89518 4.98558 2.0653C6.53271 1.23429 8.26192 0.819946 10.1756 0.819946C11.9468 0.819946 13.5371 1.1736 14.9464 1.87622C16.3569 2.58236 17.5104 3.58497 18.406 4.88402Z" fill="#36BA5F"/>
                    </svg>
                    <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.68554 13.5566V19.7355H5.83527C7.74364 19.7355 9.0301 19.4951 9.69244 19.0142C10.354 18.5322 10.6856 17.8342 10.6856 16.9157C10.6856 15.8769 10.2982 15.0587 9.51895 14.4576C8.74046 13.8565 7.44666 13.5566 5.63973 13.5566H4.68554ZM4.68554 4.37685V9.45747H5.68825C6.80783 9.45747 7.63925 9.22291 8.18324 8.75253C8.72649 8.28334 8.99775 7.64373 8.99775 6.83488C8.99775 6.0809 8.73973 5.48331 8.22294 5.04096C7.70836 4.59861 6.92472 4.37685 5.86909 4.37685H4.68554ZM0.0932617 24.1112V0H3.88574C6.08522 0 7.69512 0.143561 8.71252 0.42718C10.157 0.810007 11.3068 1.51964 12.1602 2.55724C13.0152 3.59601 13.4408 4.8192 13.4408 6.22913C13.4408 7.14768 13.2475 7.97985 12.8571 8.72799C12.4719 9.47731 11.8405 10.1788 10.9657 10.8347C12.43 11.5245 13.5018 12.3835 14.1789 13.4165C14.8574 14.4483 15.1963 15.6691 15.1963 17.079C15.1963 18.4341 14.8471 19.669 14.1443 20.7836C13.4445 21.8982 12.541 22.7316 11.4361 23.2836C10.332 23.8345 8.80441 24.1112 6.85709 24.1112H0.0932617Z" fill="#36BA5F"/>
                    </svg>
                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.71232 18.1109H0.336426V0.277832H4.69713V10.7519L13.8302 0.277832H15.9797V18.1109H11.6168V7.8515L2.71232 18.1109Z" fill="#36BA5F"/>
                    </svg>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.769 18.1109H14.2113L9.74693 6.86527L5.20171 18.1109H0.660156L8.26935 0.277832H11.1539L18.769 18.1109Z" fill="#36BA5F"/>
                    </svg>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.872 18.1109H14.3136L9.84995 6.86527L5.30327 18.1109H0.760254L8.37016 0.277832H11.257L18.872 18.1109Z" fill="#36BA5F"/>
                    </svg>
                </div>
                <div className = {styles.inputInEntrance}>
                    <Input placeholder="Логин" className = {styles.loginEndPassword} style ={{marginBottom: '5%'}} onChange = {this.loginChange}/>
                    <Input placeholder="Пароль" className = {styles.loginEndPassword} onChange = {this.passwordChange}/>
                </div>
                <Button type="primary" className = {styles.buttonInEntrence} onClick = {this.inButtonRegistr}>Авторизоваться</Button>
                <Text  type="danger" className = {styles.warningLength}>{this.state.warningLength}</Text >
            </div>
        </div>
            </div>
        );
    }
}