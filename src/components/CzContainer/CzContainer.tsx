import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import "./CzContainer.less";
import CzSplitPanel from "../CzSplitPanel/CzSplitPanel";
import CzHeader from "../CzHeader/CzHeader";
import {CzNav} from "../CzNav";
import {IMenuData} from "../CzNav/CzNav";

const CzContainer: React.FC = (props) => {
    const {children} = props;

    // const [menuData, setMenuData] = useState([] as Array<IMenuData>);
    const [navProps, setNavProps] = useState({
        menuData: [] as Array<IMenuData>,
        openKeys: [] as string[],
        selectedKeys: [] as string[]
    });

    useEffect(() => {
        const data: Array<IMenuData> = [
            {
                key: "01",
                name: "组一",
                children: [
                    {
                        key: "010",
                        name: "菜单一",
                    }
                ]
            }
        ];

        setNavProps(state => ({
            ...state,
            menuData: data
        }));
    }, []);

    /**
     * 菜单选中事件
     */
    const menuSelect = (data: any): void => {
        const {selectedKeys} = data;
        setNavProps(state => ({
            ...state,
            selectedKeys
        }))
    };

    /**
     * 菜单展开收起事件
     */
    const menuOnOpenChange = (openKeys: string[]): void => {
        setNavProps(state => ({
            ...state,
            openKeys
        }))
    };

    return (
        <div className="cz-czContainer">
            <CzHeader/>
            <div className="cz-body-wrapper">
                <CzSplitPanel
                    split="vertical"
                    left={
                        <CzNav
                            menuData={navProps.menuData}
                            menuSelect={menuSelect}
                            menuOnOpenChange={menuOnOpenChange}
                            openKeys={navProps.openKeys}
                            selectedKeys={navProps.selectedKeys}
                        />
                    }
                    right={children}
                    defaultSize={200}
                />
            </div>
        </div>
    )
};

export default withRouter(CzContainer);