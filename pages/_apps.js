import "../styles/globals.css"; // Ensure this imports TailwindCSS directives

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

export default MyApp;
