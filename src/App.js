import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';
// API key; a9230285897a482a8879d634f470b1b9
function App() {
	const [categoria, setCategoria] = useState('');
	const [noticias, setNoticias] = useState([]);
	useEffect(() => {

		const consultarApi = async () => {
			const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=a9230285897a482a8879d634f470b1b9`

			const respuesta = await fetch(url);
			const noticias = await respuesta.json();

			setNoticias(noticias.articles);
		}
		consultarApi();
	}, [categoria])
	return (
		<>
			<Header
				titulo="Buscador de Noticias"
			/>

			<div className="container white">
				<Formulario
					setCategoria={setCategoria}
				/>


				<ListadoNoticias
					noticias={noticias}
				/>

			</div>
		</>
	);
}

export default App;
