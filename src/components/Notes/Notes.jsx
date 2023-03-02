import React from "react";
import style from "./Notes.module.scss"

export default function Notes() {

	const allNotesArray = [
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
		{title: 'Title', text: 'Text', date: '2023-03-02'},
	]
	const [allNotes, setAllNotes] = React.useState(allNotesArray)

	const [buttonClick, setButtonClick] = React.useState(false)
	const [addValueHeader, setAddValueHeader] = React.useState("")
	const [addValueBody, setAddValueBody] = React.useState("")
	const [addDate, setAddDate] = React.useState(new Date().toISOString().split('T')[0])

	const addNotes = () => {
		setAllNotes([...allNotes, {title:`${addValueHeader}`, text:`${addValueBody}`, date:`${addDate}`}])

		setAddValueHeader("")
		setAddValueBody("")
		setAddDate(new Date().toISOString().split('T')[0])
	}
	
	const formatDate = (dateStr) => {
		let dArr = dateStr.split("-")
		return dArr[2] + "-" + dArr[1]+ "-" + dArr[0]
	}

	const deleteOneNote = (deleteIndex) => {
		if(deleteIndex === 0) {
			allNotes.splice(0, 1)
			setAllNotes(allNotes.filter(index => index !== deleteIndex))
			// console.log(allNotes)
		}
		else{
			allNotes.splice(deleteIndex-1, 1)
			setAllNotes(allNotes.filter(index => index !== deleteIndex))
		}
	}

	return(
		<div className={style.allNotes}>
			<div onClick={() => {setButtonClick(false); }} className={style.notesContainer}>
				<h2>Ваши заметки</h2>

				<div style={{height: addValueHeader !== "" ? "400px" : "440px"}} className={style.notesTrack}>
					{allNotes.length !== 0 ? 
						allNotes.map((item, index) => {
							return(
								<div key={index} style={{background: index >= 7 ? "rgb(255, 112, 112)" : "rgb(255, 250, 154)"}} className={style.notes}>
									{index >= 7 && <span>У вас слишком много заметок</span>}
									<div className={style.heading}>
										<h3>{item.title}</h3>
										<p className={style.date}>{formatDate(item.date)}</p>
									</div>
									<p>{item.text}</p>
								</div>
							)
						})
						:
						<h4>Нет заметок</h4>
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
								<input onClick={() => setButtonClick(true)} value={addValueHeader} style={{width: addValueHeader !== "" ? "500px" : "650px"}} onChange={e => setAddValueHeader(e.target.value)} type="text" placeholder="Добавить заметку"/>
							</div>
							:
							<div className={style.transparent}>
								<input onClick={() => setButtonClick(true)} value={addValueHeader} style={{width: addValueHeader !== "" ? "500px" : "650px"}} onChange={e => setAddValueHeader(e.target.value)} type="text" placeholder="Добавить заголовок"/>
							</div>}
						</div>

						{addValueHeader && <input value={addDate} onChange={e => setAddDate(e.target.value)} type="date" />}
					</div>

					{addValueHeader !== "" && 
					<div className={style.notesBody}>
						<input value={addValueBody} onChange={e => setAddValueBody(e.target.value)} type="text" placeholder="Добавить текст заметки"/>
						<div onClick={() => {setButtonClick(false); addNotes()}} className={style.button}>Создать</div>
					</div>}
							
				</div>
			</div>

		</div>
	)
}
