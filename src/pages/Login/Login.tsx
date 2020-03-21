import React, {useState} from "react";
import {Button} from "antd";
import "./Login.less";
import CzModal from "../../components/CzModal/CzModal";
import CzButton from "../../components/CzButton/CzButton";

const Login: React.FC = () => {

    const [modalProps, setModalProps] = useState({
        visible: false
    });

    const onOk = () => {
        setModalProps(state => ({
            ...state,
            visible: false
        }))
    };

    const onCancel = () => {
        setModalProps(state => ({
            ...state,
            visible: false
        }))
    };

    const login = () => {
        setModalProps(state => ({
            ...state,
            visible: true
        }))
    };

    return (
        <div className="cz-czLogin">
            <div className="title" onClick={login}>登录页</div>
            <CzButton>按钮</CzButton>
            <CzModal
                title="系统提示"
                visible={modalProps.visible}
                onOk={onOk}
                onCancel={onCancel}
            >
                鸟狗
            </CzModal>
        </div>
    )
};

export default Login;