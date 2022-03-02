
var TMcookieModals = (function () {

	var DOM = {};
	
	// Global functions

	function cacheDom() {
		DOM.openElements = document.querySelectorAll('[data-open]');
		DOM.closeElements = document.querySelectorAll('[data-close]');
	}
	
	function bindEvents() {
		if (DOM.openElements.length) {
			DOM.openElements.forEach((openElement) => {
				openElement.addEventListener('click', handleOpen);
			});
		}
		if (DOM.closeElements.length) {
			DOM.closeElements.forEach((closeElement) => {
				closeElement.addEventListener('click', handleClose);
			});
		}
	}
	
	// Helper functions
	
	const handleOpen = (e) => {
		var modalClasses = e.currentTarget.dataset.open.split(' ');
		if (modalClasses.length) {
			modalClasses.forEach((modalClass) => {
				document.getElementsByClassName(modalClass)[0].classList.remove('tm-cookie-hidden');
			});
		}
	}
	
	const handleClose = (e) => {
		var modalClasses = e.currentTarget.dataset.close.split(' ');
		if (modalClasses.length) {
			modalClasses.forEach((modalClass) => {
				document.getElementsByClassName(modalClass)[0].classList.add('tm-cookie-hidden');
			});
		}
	}

	function init() {
		cacheDom();
		bindEvents();
	}

	return {
		init: init
	};

}());

var TMcookieAccordion = (function () {

	var DOM = {};
	
	// Global functions

	function cacheDom() {
		DOM.accordionItems = document.querySelectorAll('.tm-cookie-accordion-item');
	}

	function setupDom() {
		if (DOM.accordionItems.length) {
			DOM.accordionItems.forEach((accordionItem, index) => {
				var accordionButton = accordionItem.querySelector('.tm-cookie-accordion-button');
				var accordionTitle = accordionItem.querySelector('.tm-cookie-accordion-title');
				var accordionCollapse = accordionItem.querySelector('.tm-cookie-accordion-collapse');
				
				// Set IDs
				accordionTitle.setAttribute('id', 'heading-' + index);
				accordionCollapse.setAttribute('id', 'collapse-' + index);
				
				// Set accessibility attributes
				accordionButton.setAttribute('aria-labelledby', 'heading-' + index);
				accordionCollapse.setAttribute('aria-labelledby', 'heading-' + index);
				accordionButton.setAttribute('aria-controls', 'collapse-' + index);
			});
		}
	}
	
	function bindEvents() {
		if (DOM.accordionItems.length) {
			DOM.accordionItems.forEach((accordionItem) => {
				var accordionButton = accordionItem.querySelector('.tm-cookie-accordion-button');
				
				if (accordionButton) {
					accordionButton.addEventListener('click', handleClick);
				}
			});
		}
	}
	
	// Helper functions
	
	const handleClick = (e) => {
		if (e.currentTarget.getAttribute('aria-expanded') === 'true') {
			e.currentTarget.setAttribute('aria-expanded', 'false');
		} else {
			e.currentTarget.setAttribute('aria-expanded', 'true');
		}
	}

	function init() {
		cacheDom();
		setupDom();
		bindEvents();
	}

	return {
		init: init
	};

}());

(function () {
	TMcookieModals.init();
	TMcookieAccordion.init();
})();