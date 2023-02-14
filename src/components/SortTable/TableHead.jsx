import React from "react"
import style from "./SortTable.module.scss"
import { IoArrowDown } from "react-icons/io5";
import { IoArrowUp } from "react-icons/io5";

function TableHead(props) {
    const [bool, setBool] = React.useState(<IoArrowDown className={style.arrow} />);
    const [isClicked, setIsClicked] = React.useState(false);
    const [isClickFirst, setIsClickFirst] = React.useState(false);

    const reverseArrow = (item) => {
        setIsClickFirst(true);

		            const firstBool = true //==============

        setIsClicked((current) => !current);

        props.onSort(isClicked, item);

		            props.onAddSort(firstBool) //================

        if (!isClicked) {
            setBool(<IoArrowDown className={style.arrow} />);
        }
        if (isClicked) {
            setBool(<IoArrowUp className={style.arrow} />);
        }
    };

    return (
        <div onClick={() => reverseArrow(props.itemName)}>
            {props.itemName}
            {isClickFirst && bool}
        </div>
    );
}

export default TableHead;