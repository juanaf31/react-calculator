import React from 'react';

function Calculator(props) {
	const buttonClick = (e) => {
		props.buttonClick(e.target.name);
	};
	return (
		<div className="Buttons">
			<button name="C" onClick={buttonClick}>
				C
			</button>
			<button name="-" onClick={buttonClick}>
				+/-
			</button>
			<button name="CE" onClick={buttonClick}>
				CE
			</button>
			<button style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }} name="+" onClick={buttonClick}>
				+
			</button>
			<button name="1" onClick={buttonClick}>
				1
			</button>
			<button name="2" onClick={buttonClick}>
				2
			</button>
			<button name="3" onClick={buttonClick}>
				3
			</button>
			<button style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }} name="-" onClick={buttonClick}>
				-
			</button>
			<button name="4" onClick={buttonClick}>
				4
			</button>
			<button name="5" onClick={buttonClick}>
				5
			</button>
			<button name="6" onClick={buttonClick}>
				6
			</button>
			<button style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }} name="*" onClick={buttonClick}>
				*
			</button>
			<button name="7" onClick={buttonClick}>
				7
			</button>
			<button name="8" onClick={buttonClick}>
				8
			</button>
			<button name="9" onClick={buttonClick}>
				9
			</button>
			<button style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }} name="/" onClick={buttonClick}>
				/
			</button>
			<button style={{ width: '50%' }} name="0" onClick={buttonClick}>
				0
			</button>
			<button name="." onClick={buttonClick}>
				.
			</button>
			<button style={{ backgroundColor: 'rgb(240, 125, 30)', color: 'white' }} name="=" onClick={buttonClick}>
				=
			</button>
		</div>
	);
}

export default Calculator;
