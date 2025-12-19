import { useEffect, useState } from 'react';

const ReactHooksPage = () => {
	// useStateHook ?
	// useEffectHook ?
	// useState: bileşen içinde state yönetimi sağlar.
	// useEffect: yan etkileri yönetmek için kullanılır (örneğin, veri alma, abonelikler).

	const [random, setRandom] = useState<number>(0);

	// useEffect async çalışır.
	// component did mount -> yükleme aşamasında useEffect ile sayfaya ilk veri çekme işlemi yapılabilir.
	// component will unmount -> sayfa kapanırken yapılacak işlemler için kullanılır.
	// component did update -> state veya prop değişikliklerinde çalışır.
	useEffect(() => {
		console.log('ReactHooksPage bileşeni yüklendi.');

		fetch('https://jsonplaceholder.typicode.com/posts')
			.then((response) => response.json())
			.then((data) => {
				console.log('Veri alındı:', data);
			})
			.catch((error) => {
				console.error('Veri alma hatası:', error);
			});

		return () => {
			console.log('ReactHooksPage bileşeni kaldırıldı.');
		};
	}, []);

	useEffect(() => {
		console.log('random state değeri değişti:', random);
	}, [random]);

	const generateRandomNumber = () => {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		setRandom(randomNumber);
	};

	return (
		<div>
			<h1>React Hooks</h1>
			<p>This page provides information about React Hooks.</p>
			<p>Random Number: {random}</p>
			<button onClick={generateRandomNumber}>Generate Random Number</button>
		</div>
	);
};

// state değişikliğinde return kısmı yeniden çalışır. Biz buna rendering diyoruz.
// sadece random değeri üzerinden render işlemi yapılır.

export default ReactHooksPage;

// virtual dom ?  -> state var ? local state
// virtual dom, gerçek dom ile etkileşimde bulunmadan önce değişiklikleri izleyen hafif bir kopyadır.
// React, bileşenlerin durumunu (state) ve özelliklerini (props) izleyerek virtual DOM'u günceller.
// state değiştiğinde, React virtual DOM'u günceller ve gerçek DOM ile karşılaştırır.
// Bu süreç "reconciliation" olarak adlandırılır.
// React, virtual DOM'daki değişiklikleri gerçek DOM'a minimum sayıda güncelleme yaparak yansıtır.
// Bu sayede performans artar çünkü gerçek DOM manipülasyonları maliyetlidir.
