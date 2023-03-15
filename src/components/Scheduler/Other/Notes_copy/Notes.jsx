import React from "react";
import style from "./Notes.module.scss"
import { TiDeleteOutline } from 'react-icons/ti';
import Cell from "./Cell";

export default function Notes(props) {


	const allNotesArray = [
		// {title: 'Today', text: 'Some text', date: `${new Date().toLocaleDateString('en-CA')}`},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
		// {title: 'Title', text: 'Text', date: '2023-03-02'},
	]
	const [allNotes, setAllNotes] = React.useState(allNotesArray)

	// console.table(allNotes)

	const [buttonClick, setButtonClick] = React.useState(false)
	const [addValueHeader, setAddValueHeader] = React.useState("")
	const [addValueBody, setAddValueBody] = React.useState("")
	// const [addDate, setAddDate] = React.useState(`${props.addDay}-${props.addMonth}`)
	let dd = props.addDay
	let mm = props.addMonths

	const addNotes = () => {
		setAllNotes([...allNotes, {title:`${addValueHeader}`, text:`${addValueBody}`, dd:`${dd}`, mm:`${mm}`, yyyy:"2023"}])

		setAddValueHeader("")
		setAddValueBody("")
		// setAddDate(false)
	}
	
	

	const deleteOneNote = (deleteIndex) => {
		if(deleteIndex === 0) {
			allNotes.splice(0, 1)
			setAllNotes(allNotes.filter(index => index !== deleteIndex))
			// console.log(allNotes)
		}
		else{
			allNotes.splice(deleteIndex - 1, 1)
			setAllNotes(allNotes.filter(index => index !== deleteIndex))
		}
	}

	const deleteDefinedNotes = (indexDel) => {
		console.log({indexDel})
		allNotes.splice(indexDel, 1)
		setAllNotes(allNotes.filter(index => index !== indexDel))
		if(indexDel === 0) {
			// setAllNotes(allNotes.length = 0)
		}
	}

	return(
		<div style={{display: !props.add && "none"}} className={style.allNotes}>
			<div onClick={() => {setButtonClick(false); }} className={style.notesContainer}>
				<h2>Ваши задачи</h2>

				<div style={{height: addValueHeader !== "" ? "400px" : "440px"}} className={style.notesTrack}>
					{allNotes.length !== 0 ? 
						allNotes
						.filter(item => item.dd === `${dd}`)
						.map((item, index) => (
							<>
								<Cell 
									index={index}
									item={item}
									key={index}
									delete={indexDel => deleteDefinedNotes(indexDel)}
								/>
								{props.getNotesLength(allNotes.filter(item => item.dd === `${dd}`).length)}
								{console.log("l " + allNotes.filter(item => item.dd === `${dd}`).length)}
							</>
						))
						:
						<h4>Нет задач</h4>
					}
				</div>
			</div>
			<div style={{bottom: addValueHeader !== "" ? "0" : "0"}} className={style.editNotes}>
				{allNotes.length >= 3 &&
				<div className={style.deleteNotes}>
					<div onClick={() => deleteOneNote(0)} className={style.delete_1}>Удалить первую заметку</div>
					<div onClick={() => deleteOneNote(allNotes.length)} className={style.delete_3}>Удалить последнюю заметку</div>
				</div>}

				<div className={style.addNotes}>
					<div className={style.notesHeader}>
						<div className={style.textNotes}>
							<div className={style.buttonNotes}>
								{!buttonClick ? <img width={25} src="/img/add-outline.svg" alt="" /> : <div className={style.circle}></div>}
							</div>
							{!buttonClick ? 
							<div className={style.black}>
								<input 
									onClick={() => setButtonClick(true)} 
									value={addValueHeader} 
									style={{width: addValueHeader !== "" ? "500px" : "650px"}} 
									onChange={e => setAddValueHeader(e.target.value)} 
									type="text" 
									placeholder="Добавить заметку"/>
							</div>
							:
							<div className={style.transparent}>
								<input 
									onClick={() => setButtonClick(true)} 
									value={addValueHeader} 
									style={{width: addValueHeader !== "" ? "500px" : "650px"}} 
									onChange={e => setAddValueHeader(e.target.value)} 
									type="text" 
									placeholder="Добавить заголовок"/>
							</div>}
						</div>

						{/* {addValueHeader && <input value={dd-mm} onChange={e => setdd(e.target.value)} type="date" />} */}
					</div>

					{addValueHeader !== "" && 
					<div className={style.notesBody}>
						<input value={addValueBody} onChange={e => setAddValueBody(e.target.value)} type="text" placeholder="Добавить текст заметки"/>
						<div 
							onClick={() => {
								setButtonClick(false); 
								addNotes()
								props.getAdd(false)
							}} 
							className={style.button}
							>
								Создать
							</div>
					</div>}
							
				</div>
			</div>
			<TiDeleteOutline 
				onClick={() => {
					props.addDelete(false)
					console.log(false)
				}}
				style={{position:"absolute", top:"40px", right:"40px"}}
			/>
		</div>
	)
}
