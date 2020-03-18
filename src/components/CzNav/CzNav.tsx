import React, {useRef, useState} from "react";
import {Menu} from "antd";
import "./CzNav.less";
import {CaretLeftOutlined} from "@ant-design/icons/lib";

const {SubMenu, Item} = Menu;

interface ICzNavProps {
    menuData: Array<IMenuData>,
    menuSelect: (data: any) => void,
    menuOnOpenChange: (openKeys: string[]) => void,
    openKeys: string[],
    selectedKeys: string[],
}

export interface IMenuData {
    key: string,
    name: string,
    children?: Array<IMenuData>
}

const CzNav: React.FC<ICzNavProps> = (props: ICzNavProps) => {

    const {menuData, menuSelect, menuOnOpenChange, openKeys, selectedKeys} = props;
    const navWrapperDom: any = useRef(null);
    const [isCollapse, setIsCollapse] = useState(false);
    let timer: any;

    /**
     * 渲染菜单数据
     */
    const renderMenu = (menuData: Array<IMenuData>): React.ReactNode => {
        return menuData.map(menuItem => {
            if (menuItem.children && menuItem.children.length > 0) {
                return (
                    <SubMenu
                        key={menuItem.key}
                        title={menuItem.name}
                    >
                        {
                            renderMenu(menuItem.children)
                        }
                    </SubMenu>
                )
            } else {
                return (
                    <Item key={menuItem.key}>{menuItem.name}</Item>
                )
            }
        })
    };

    /**
     * 折叠按钮的点击事件
     */
    const collapseBtnClick = (): void => {
        if (timer) {
            clearTimeout(timer)
        }
        if (isCollapse) { // 说明处于折叠状态
            navWrapperDom.current.parentNode.style.width = "260px";
            timer = setTimeout(() => {
                navWrapperDom.current.parentNode.style.transition = `none`;
            }, 300);
        } else {
            navWrapperDom.current.parentNode.style.transition = `all 0.3s`;
            navWrapperDom.current.parentNode.style.width = "0"
        }
        setIsCollapse(!isCollapse);
    };

    return (
        <div className="cz-CzNav" ref={navWrapperDom}>
            <Menu
                mode="inline"
                openKeys={openKeys}
                selectedKeys={selectedKeys}
                onSelect={menuSelect}
                onOpenChange={menuOnOpenChange}
            >
                {
                    renderMenu(menuData)
                }
            </Menu>

            <div className="collapseBtn" onClick={collapseBtnClick}>
                <CaretLeftOutlined/>
            </div>
        </div>
    )
};

export default CzNav;