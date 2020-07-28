import React, { useState } from 'react';
import Calculator from './Calculator';
import Output from './Output';

function CalculatorApp() {
	const [ result, setResult ] = useState('');

	const calculate = () => {
		setResult(
			// result: eval(this.state.result)
			eval(result)
			// || '' + ''
		);
	};

	const onButtonClick = (buttonName) => {
		if (buttonName === '=') {
			calculate();
		} else if (buttonName === 'C') {
			setResult('');
		} else if (buttonName == 'CE') {
			setResult(result.slice(0, -1));
		} else if (result.length <= 1 && result.substring(0, 1) === '0' && buttonName !== '.') {
			setResult(buttonName);
		} else {
			setResult(result + buttonName);
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
