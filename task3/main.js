const someFunction = () => console.log('Some function loaded');

((func) => {
    document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive'|| document.readyState === 'complete') {
            func();
        }
	})
})(someFunction)

document.addEventListener('DOMContentLoaded', () => console.log('DOM loaded'));