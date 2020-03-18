import React from "react";
import {Button} from "antd";
import "./Login.less";

const Login: React.FC = () => {

    return (
        <div className="cz-czLogin">
            <Button type="primary">登录</Button>
            <div className="title">你好</div>
        </div>
    )
};

export default Login;