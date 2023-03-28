import React from "react";
import Layout from "./components/layout/Layout"

import Calendar from "./components/Calendar/Calendar";
import Chess from "./components/Chess/Chess";
import Clock from "./components/Clock/Clock";
import PhoneInput from "./components/PhoneInput/PhoneInput";
import AllProfessions from "./components/Professions/AllProfessions";
import SignUpForm from "./components/SignUpForm/SignUpForm";
import SortTable from "./components/SortTable/SortTable";
import Table from "./components/Table/Table.jsx";
import StudentInfo from "./components/StudentInfo/StudentInfo";
import Notes from "./components/Notes/Notes";
import Scheduler from "./components/Scheduler/Scheduler";
import Comments from "./components/Comments/Comments";
import SortTableAdvanced from "./components/Catalog/SortTable";

function App() {
	
    return (
		<Layout>
			<h2>1.1</h2>
			<div>{new Date().toLocaleString() + ""}</div>

			<h2>1.2</h2>
			<Table />

			<h2>1.3</h2>
			<Chess />

			<hr />
			<h2>2.1</h2>
			<Clock />

			<h2>2.2</h2>
			<AllProfessions />

			<hr />
			<h2>3.1</h2>
			<PhoneInput />

			<h2>3.2</h2>
			<SortTable />

			<hr />
			<h2>4</h2>
			<Calendar />

			<hr />
			<h2>5</h2>
			<SignUpForm />

			<hr />
			<h2>6.1</h2>
			<StudentInfo />

			<h2>6.2</h2>
			<Notes />

			<hr />
			<h2>7</h2>
			<Scheduler />

			<hr/>
			<h2>8</h2>
			<Comments />
			
			<hr/>
			<h2>9</h2>
			<SortTableAdvanced />
		</Layout>
    );
}

export default App;
