import React from 'react';
import firebase from './firebase';
// Components's Imports
import { Header, AccountSummary, NewTransaction, TransactionHistory, Calculator, Footer } 
	from './components/components';
// Import Provider for GolbalContext.
import { GlobalProvider } from './context/GlobalProvider';
// Styles
import styles from './App.module.css';

function App() {
	const messaging = firebase.messaging();
	messaging.requestPermission()
		.then( () => messaging.getToken() )
		.then( token => {
			console.log(`Token: ${token}`);
		})
		.catch( err => console.log('Error: '+err) )
	return (
		<div className={styles.shadow}>
			<Header />
				<div className={styles.container}>
					<GlobalProvider>
						<div className={styles.leftContainer}>
							<AccountSummary />
							<NewTransaction />
						</div>
						<div className={styles.rightContainer}>
							<TransactionHistory />
						</div>
						<Calculator />
					</GlobalProvider>
				</div>
			<Footer />
		</div>
	);
}

export default App;
