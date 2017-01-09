import React from "react";
import "../../styles_global.scss";
import "./styles.scss";
import { useHistory } from "react-router";

export default function Navbar(props) {
	const history = useHistory();

	return (
		<div className="navbar-wrapper" style={{ width: props.width }}>
			<div className="navbar-item-list">
				<div className="navbar-item" onClick={() => {
					history.push('/');
					props.set_select(false);
				}}>HOME</div>
				<div className="navbar-item" onClick={() => {
					history.push('/whitepaper');
				}}>WHITEPAPER</div>
				<div className="navbar-item" onClick={() => {
					history.push('/reserve');
					props.set_select(true);
				}}>RESERVATION</div>
				<div className="navbar-item" onClick={() => {
					history.push('/claim');
					props.set_select(true);
				}}>CLAIM</div>
			</div>
			<div className="text-gradient text-showcase">BASEL SHOWCASE</div>
		</div>
	);
}
