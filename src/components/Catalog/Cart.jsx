import React from "react"
import style from "./Catalog.module.scss"

export default function Cart  (props) {

	if(props.new) {
		props.addNew(props.id)
	}

	return (
		<div className={style.cart}>
			<div className={style.image}>
				{props.new && 
					<div className={style.new}>
						Новинка
					</div>
				}
				{props.discount !== 0 &&
					<div style={{left: props.new ? "90px" : "0"}} className={style.discount}>
						{props.discount}%
					</div>
				}
				<img width={250} src={props.image} alt="" />
			</div>
			<div className={style.text}>
				<h3>{props.name}</h3>
					{props.discount !== 0 ?
						<div className={style.price}>
							<h3>{Math.round(props.price * ((100 - props.discount) / 100))} руб</h3>
							<span>{props.price} руб</span>
						</div>
						:
						<h3>{props.price} руб</h3>
					}
				<h4>Количество в наличии: {props.count}</h4>
				<p>{props.description}</p>
			</div>
		</div>
	)

};

