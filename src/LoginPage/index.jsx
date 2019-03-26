import React from 'react';
import './style.css';

const Login = ({ history }) => {
	const REFRESH_TIME = 6000;
	let output_ = React.useRef();
	const input_ = React.useRef();
	const [count, setCount] = React.useState(1);
	const [password, setPassword] = React.useState(0);
	const [counter, setCounter] = React.useState();
	React.useEffect(() => {
		const remove = window.addEventListener('click', () => {
			try {
				input_.current.focus();
			} catch (e) {}
		});
		return remove;
	}, []);

	function output(html) {
		output_.current.insertAdjacentHTML('beforeEnd', '<p>' + html + '</p>');
	}

	function generatePassword() {
		const question = Math.round(Math.random() * 1000000000);
		const answer = ((question - 1) % 9) + 1;
		setPassword(answer);
		return question;
	}

	function timeout(count) {
		setCount(count + 1);
		const question = generatePassword();
		output(
			`<div><p class="warning">Login time out... </p>New password has been set!<br/><br/>/${question}</div>`,
		);
		input_.current.value = '';
		input_.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}

	return (
		<div id="container">
			<output ref={output_} />
			<p>
				<span id="test" />
			</p>
			<div id="input-line" className="input-line">
				<div>{`~/NTU/Xperience@EEE $ `}</div>&nbsp;
				<div>
					<input
						className="cmdline"
						ref={input_}
						autoFocus
						onKeyDown={e => {
							if (e.keyCode === 9) {
								e.preventDefault();
							} else if (e.keyCode === 13) {
								clearInterval(counter);
								var line = input_.current.parentNode.parentNode.cloneNode(true);
								line.removeAttribute('id');
								line.classList.add('line');
								var input = line.querySelector('input.cmdline');
								input.autofocus = false;
								input.readOnly = true;
								output_.current.appendChild(line);

								if (input_.current.value && input_.current.value.trim()) {
									var args = input_.current.value.split(' ').filter(function(val, i) {
										return val;
									});
									var cmd = args[0].toLowerCase();
									args = args.splice(1);
								}

								switch (cmd) {
									case 'cat':
										output('<code>You know nothing, Jon Snow</code>');
										break;
									case 'clear':
										output_.current.innerHTML = '';
										input_.current.value = '';
										return;
									case 'date':
										output(new Date());
										break;
									case 'echo':
										output(args.join(' '));
										break;
									case 'help':
										output('Good Try! But nothing I can help...');
										break;
									case 'whoami':
										output('Professor X');
										break;
									default:
										const question = generatePassword();
										if (cmd) {
											if (parseInt(cmd, 10) === password) {
												output_.current.innerHTML = '';
												input_.current.value = '';
												input_.current.disable = true;
												output('');
												history.push('/load');
												setTimeout(() => {}, 10000);
											} else {
												if (count === 1) {
													output('<p class="warning">Login failed, password incorrect!</p>');
												} else if (count === 2) {
													output('<p class="warning">You may need some help.</p>');
												} else if (count === 3) {
													output(
														`<div>/129 = /1+2+9 = /12 = /1+2 = /3 = 3<br/><br/>/${question} = ?</div>`,
													);
													setCounter(setInterval(() => timeout(count), REFRESH_TIME));
												} else {
													output(
														`<div><p class="warning">Password incorrect!</p> New password has been set!<br/><br/>/${question}</div>`,
													);
													setCounter(setInterval(() => timeout(count), REFRESH_TIME));
												}
												setCount(count + 1);
											}
										}
								}
								input_.current.value = '';
								input_.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
							}
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
