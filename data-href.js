sethrefs = function () {
	
	if (document.querySelectorAll) {
	
		var datahrefs = document.querySelectorAll('[data-href]'),
				dhcount = datahrefs.length;
		
		while (dhcount-- > 0) {
			
			var ele = datahrefs[dhcount],
					link = function (event) {
						
						var target = event.target,
								leftclicked = ('buttons' in event && event.buttons === 1) ? true : 
															('which' in event && event.which === 1) ? true : 
															(event.button === 1) ? true : false;
						
						if (!event.target.href) window.location.href = this.getAttribute('data-href');
					
					};
			
			if(ele.addEventListener) ele.addEventListener('click', link, false);
			else ele.attachEvent('onclick', link);
		
		}
	
	}
	
};

sethrefs();