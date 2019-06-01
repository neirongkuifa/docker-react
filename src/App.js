import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>This is the edited html</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					改下看看，成功了
				</a>
			</header>
		</div>
	)
}

export default App
