import React, { useState } from 'react';
import Calculator from './Calculator';
import Output from './Output';

function CalculatorApp() {
	const [ result, setResult ] = useState('');

	const calculate = (result) => {
		const res = eval(result);
		setResult(res);
	};

	const onButtonClick = (buttonName) => {
		try {
			if (buttonName === '=') {
				console.log(result);
				calculate(result);
			} else if (buttonName === 'C') {
				setResult('');
			} else if (buttonName === 'CE') {
				setResult(result.slice(0, -1));
				console.log(result.slice(0, -1));
			} else if (result.length <= 1 && result.substring(0, 1) === '0' && buttonName !== '.') {
				setResult(buttonName);
			} else {
				setResult(result + buttonName);
			}
		} catch (err) {
			setResult('Error');
		}
	};
	return (
		<div>
			<div className="CalculatorApp">
				<div className="calc-body">
					<Output result={result} />
					<Calculator buttonClick={onButtonClick} />
				</div>
			</div>
		</div>
	);
}

export default CalculatorApp;
