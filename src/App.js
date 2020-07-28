import React, { useState } from 'react';
import './App.css';
import Phone from './views/Phone';
import SimpleCalculator from './SimpleCalculator';

function App() {
	return (
		<div className="App">
			<div className="bg-img" />
			<Phone />
			{/* <SimpleCalculator /> */}
		</div>
	);
}

export default App;
