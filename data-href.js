sethrefs = function () {
	
	if (document.querySelectorAll) {
	
		var datahrefs = document.querySelectorAll('[data-href]'),
				dhcount = datahrefs.length;
		
		while (dhcount-- > 0) {
			
			var ele = datahrefs[dhcount],
					addevent = function (ele, event, func) {
					
						if(ele.addEventListener) ele.addEventListener(event, link, false);
						else ele.attachEvent('on' + event, link);
					
					},
					link = function (event) {
						
						var target = event.target,
								url = this.getAttribute('data-href');
						
						if (!target.href) {
					    		
			    		var newevent = document.createEvent("MouseEvents");
			    		
			    		if (newevent.initMouseEvent) {
			    		
			    			var newlink = document.createElement("a");
		    			  
		    			  newlink.setAttribute('href', url);
		    			  newlink.innerHTML = 'link event';
		    			  
	    					newevent.initMouseEvent(event.type, true, false, window, event.detail, event.screenX, event.screenY, event.clientX, event.clientY, event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, event.button, null);
	    					
	    					newlink.dispatchEvent(newevent);
				    	
				    	}
				    	else {
				    	
				    		var meta = (event.metaKey) ? '_self' : '_blank';
				    		
				    		window.open(url, meta);
				    	
				    	}
					    
						}
						
					};
			
			addevent(ele, 'click', link);
		
		}
	
	}
	
};

sethrefs();