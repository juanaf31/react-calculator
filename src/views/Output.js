import React from 'react';

function Output(props) {
	return (
		<div className="Output">
			<input value={props.result} readOnly />
		</div>
	);
}

export default Output;
