import React, { useState } from 'react';

function SimpleCalculator() {
	const [ operator, setOperator ] = useState(true);
	const [ result, setResult ] = useState('');
	const [ operan1, setOperan1 ] = useState('');
	const [ operan2, setOperan2 ] = useState('');

	const changeOperator = () => {
		setOperator(!operator);
	};

	const handleResult = () => {
		operator ? setResult(Number(operan1) + Number(operan2)) : setResult(Number(operan1) - Number(operan2));
	};

	return (
		<div>
			<h1>Simple Calculator</h1>
			<input value={operan1} onChange={(e) => setOperan1(e.target.value)} />
			<button onClick={changeOperator} style={{ minWidth: '30px' }}>
				{operator ? '+' : '-'}
			</button>
			<input value={operan2} onChange={(e) => setOperan2(e.target.value)} />
			<button style={{ minWidth: '30px' }} onClick={handleResult}>
				=
			</button>
			<input value={result} style={{ border: 'none' }} />
		</div>
	);
}

export default SimpleCalculator;
