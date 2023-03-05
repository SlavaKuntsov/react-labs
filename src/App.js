import React from "react";

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

function App() {
	
    return (
        <div className="wrapper">
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
            <h2>4.1</h2>
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
        </div>
    );
}

export default App;
