import { useState, useEffect } from 'react';
import axios from 'axios';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { CiTwitter } from 'react-icons/ci';
import './App.css';

function App() {
	const [quotes, setQuotes] = useState([]);
	const [randomQuote, setRandomQuote] = useState();

	const getQuotes = async () => {
		try {
			const response = await axios.get('https://dummyjson.com/quotes');
			setQuotes(response.data.quotes);
		} catch (error) {
			console.error(error);
		}
	};

	const generateRandomQuote = () => {
		const randomIndex = Math.floor(Math.random() * quotes.length);
		setRandomQuote(quotes[randomIndex]);
		console.log(quotes[randomIndex]);
	};

	useEffect(() => {
		getQuotes();
	}, []);
	return (
		<div className='col-md-6 p-5 p-md-5 d-flex flex-column align-items-center justify-content-center gap-5 w-80 vh-100 font-sans block_content text-center'>
			<div className='container py-5 h-100 quote' id='quote-box'>
				<div
					className='row d-flex justify-content-center align-items-center h-100 mb-0 blockquote'
					id='text'
				>
					{randomQuote && (
						<article className='shadow-md w-100 h-auto rounded-xl p-4 text-dark '>
							<p className='d-flex align-items-start flex-column flex-md-row gap-2  p-2 rounded-md shadow-md font-weight-bold mb-3 blockstyle note text-secondary '>
								<ImQuotesLeft />

								{randomQuote.quote}
								<ImQuotesRight />
							</p>
							<p className='blockquote-footer' id='author'>
								{' '}
								{randomQuote.author}
							</p>
						</article>
					)}
					<button
						onClick={generateRandomQuote}
						className='btn btn-primary border border-black p-2 rounded-lg hover:text-black hover:bg-white transition duration-75'
						id='new-quote'
					>
						Generate Quote
					</button>
					<a
						href=''
						className='btn btn-primary border border-black p-2 rounded-lg hover:text-black hover:bg-white transition duration-75'
						id='tweet-quote'
						target='_blank'
					>
						<CiTwitter />
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
