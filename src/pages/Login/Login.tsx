import React, {useState} from "react";
import "./Login.less";
import CzTable from "../../components/CzTable/CzTable";

const Login: React.FC = () => {

    const [columns, setColumns] = useState([
        {
            title: '序号',
            dataIndex: "index",
            width: 80
        },
        {
            title: '姓名',
            dataIndex: "name",
            width: 180
        },
        {
            title: '年龄',
            dataIndex: "age",
            width: 180,
            sorter: (a: any, b: any): number => {
                if (a.age > b.age) {
                    return 1;
                } else {
                    return -1;
                }
            },
        },
        {
            title: '性别',
            dataIndex: "sex",
            width: 180
        },
        {
            title: '地址',
            dataIndex: "address",
            width: 180
        },
        {
            title: '备注',
            dataIndex: "remark",
            width: 180
        },
    ]);

    const data = [];
    for (let i = 0; i < 20; i++) {
        data.push({
            index: i + 1,
            name: "惠思雨",
            age: 26,
            sex: '男',
            address: "上海市浦东新区北蔡",
            remark: "测试卷"
        })
    }

    return (
        <div className="cz-czLogin">
            <CzTable
                columns={columns}
                dataSource={data}
                scroll={{
                    x: "max-content",
                    y: 300,
                    scrollToFirstRowOnChange: true
                }}
                rowKey={(record) => record.index}
            />
        </div>
    )
};

export default Login;