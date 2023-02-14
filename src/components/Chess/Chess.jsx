import React from "react";
import style from "./Chess.module.scss"

function ProgressBar(props) {
	const cells = () => {
		let cells = [];
		for(let row = 1; row <= 8; row++) {
			for(let cell = 1; cell <= 8; cell++) {
				if((row + cell) % 2 !== 0) {
					cells.push("black") 
				}
				else {
					cells.push("white") 
				}
			}
		}
		// console.log(cells)	
		return cells.map((cell) => (
			<div className={style.cell} style={{background: cell === "black" ? (cell % 2 === 0 ? "white" : "black") : (cell % 2 === 0 ? "black" : "white")}}></div>
		))
	}

	const letters = () => {
		let letters = [];
		let alphabet = "abcdefgh".split("");
		alphabet.forEach(element => {
			// return <div className="letters">elem</div>
			letters.push(element)
		});
		return letters.map((letter) => (
			<div className={style.letter}>{letter}</div>
		))
	}

	const numbers = () => {
		let numbers = [];
		for(let i = 1; i <= 8; i++) {
			numbers.push(i)
		}
		return numbers.map((number) => (
			<div className={style.number}>{number}</div>
		))
	}

	
	return (
		<div className={style.chess}>
			<div className={style.numbers}>
				{numbers()}
			</div>
			<div className={style.vert}>
				<div className={style.letters}>
					{letters()}
				</div>
				<div className={style.board}>
					{cells()}
				</div>
				<div className={style.letters}>
					{letters()}
				</div>
			</div>
			<div className={style.numbers}>
				{numbers()}
			</div>
		</div>

	)
}

export default ProgressBar;
