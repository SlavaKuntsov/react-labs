import React from "react";
import style from "./AllProfessions.module.scss"

function JobMenu(props) {
	
	const allLinks = [
		{job:"prog", nameLink:"GitHub", link:"https://github.com"},
		{job:"prog", nameLink:"StackOverflow", link:"https://stackoverflow.com/"},
		{job:"prog", nameLink:"JavaScript.ru", link:"https://learn.javascript.ru/"},
		{job:"prog", nameLink:"HTMLbook", link:"http://htmlbook.ru/"},
		{job:"prog", nameLink:"habr", link:"https://habr.com/ru/all/"},
		{job:"prog", nameLink:"4pda", link:"https://4pda.ru/forum "},
		{job:"prog", nameLink:"geeksforgeeks", link:"https://www.geeksforgeeks.org/"},
	
		{job:"arc", nameLink:"Meierpartners", link:"https://meierpartners.com/"},
		{job:"arc", nameLink:"Колористика", link:"https://color.adobe.com"},
		{job:"arc", nameLink:"ArcSpace", link:"https://www.arcspace.com/"},
		{job:"arc", nameLink:"ArcDaily", link:"www.archdaily.com"},
		{job:"arc", nameLink:"textures", link:"https://www.textures.com/"},
		{job:"arc", nameLink:"polyhaven", link:"https://polyhaven.com/"},
		{job:"arc", nameLink:"incompetech", link:"https://incompetech.com/graphpaper/"},
	
		{job:"him", nameLink:"Природа", link:"https://www.ras.ru/publishing/nature.aspx"},
		{job:"him", nameLink:"Химия и жизнь", link:"http://www.hij.ru/"},
		{job:"him", nameLink:"ChemNet", link:"http://www.chem.msu.su/rus/"},
		{job:"him", nameLink:"Химическая энциклопедия", link:"http://www.cnshb.ru/AKDiL/0048/default.shtm"},
		{job:"him", nameLink:"Thoisoi", link:"https://www.youtube.com/user/Thoisoi/"},
		{job:"him", nameLink:"Teach-in", link:"https://teach-in.ru/"},
		{job:"him", nameLink:"Mathesis", link:"http://www.mathesis.ru/"},
		
		{job:"inj", nameLink:"Traceparts", link:"https://www.traceparts.com/"},
		{job:"inj", nameLink:"GrabCAD", link:"https://grabcad.com/"},
		{job:"inj", nameLink:"3D ContentCentral", link:"https://www.3dcontentcentral.com/"},
		{job:"inj", nameLink:"PARTcommunity", link:"https://b2b.partcommunity.com/"},
		{job:"inj", nameLink:"PCB-3D", link:"http://www.pcb-3d.com/"},
		{job:"inj", nameLink:"Autodesk Gallery", link:"https://gallery.autodesk.com/"},
		{job:"inj", nameLink:"CGTrader", link:"https://www.cgtrader.com/"},
		
		{job:"pov", nameLink:"Поварёнок", link:"https://www.povarenok.ru"},
		{job:"pov", nameLink:"Русская еда", link:"https://www.russianfood.com/"},
		{job:"pov", nameLink:"Афиша-Еда", link:"https://eda.ru/"},
		{job:"pov", nameLink:"Повар.ру", link:"https://povar.ru/"},
		{job:"pov", nameLink:"Едим дома", link:"https://www.edimdoma.ru/"},
		{job:"pov", nameLink:"Say7.info", link:"https://www.say7.info/"},
		{job:"pov", nameLink:"Готовим", link:"https://www.gotovim.ru/"},
	]

	console.log(props.oneKey)
	
    return(
		<ul className={style.links}>
			{allLinks
				.filter((item) => item.job === props.oneKey)
				.map((item) => (
					<li key={item.link}><a href={item.link} target="_blank" rel="noopener noreferrer">{item.nameLink}</a></li>
			))}
		</ul>
	);
}

export default JobMenu;
