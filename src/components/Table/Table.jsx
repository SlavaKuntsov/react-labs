import React from "react"
import style from "./Table.module.scss"

function Table() {

	const arr = [
		{
			id: 1,
			stock_name: "EFX",
            company_name: "Equifax Inc",
            price: 163.55,
            currency: "USD",
            change: "+9.03",
        },
        {
			id: 2,
			stock_name: "IRM",
            company_name: "Iron Mountain Inc",
            price: 33.21,
            currency: "USD",
            change: "+1.42",
        },
        {
			id: 3,
			stock_name: "NTAP",
            company_name: "NetApp Inc",
            price: 54.81,
            currency: "USD",
            change: "-6.01",
        },
        {
			id: 4,
			stock_name: "CTL",
            company_name: "Centurylink Inc",
            price: 13.79,
            currency: "USD",
            change: "-1.37",
        },
    ];

	return(
		<table className={style.stockMarket}>
			<thead>
				<tr>
					<td>stock_name</td>
					<td>company_name</td>
					<td>price</td>
					<td>currency</td>
					<td>change</td>
				</tr>
			</thead>
			<tbody>
				{arr.map((item) => (
					<tr key={item.id} style={{ border: "1px solid black" }}>
						<td>{item.stock_name}</td>
						<td>{item.company_name}</td>
						<td>{item.price}</td>
						<td>{item.currency}</td>
						<td style={{ background: item.change >= 0 ? "green" : "red" }}>
							{item.change}
						</td>
					</tr>
				))}
			</tbody>
		</table>
	)
}

export default Table;