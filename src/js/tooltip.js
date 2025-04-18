	window.titleTooltip = ( opts ) => {
		opts = Object.assign({
			delay: 400,
			id: 'titleTtip',
			onShow(){},
			onHide(){}
		}, opts||{})

		if( opts.id in window ) return;

		var hoverTimeout, titledElm, mousePos = {};

		// bind global event listeners
		document.addEventListener('mouseover', onOver)
		document.addEventListener('mouseout', onOut)
		var tipElm = document.createElement('div')
		tipElm.id = opts.id
		document.body.append(tipElm)

		function onOver(e){
			titledElm = e.target.closest('.emoji--icon[title]')
			document.removeEventListener('mousemove', onMove)

			if( titledElm && titledElm.title ){
				document.addEventListener('mousemove', onMove)
				hoverTimeout = setTimeout(() => {
					opts.onShow(titledElm, tipElm)
					tipElm.setAttribute('data-over', true)
					setMousePos(e)
				}, opts.delay)
				tipElm.innerHTML = "<div class='"+ opts.id + "__text" +"'>" + titledElm.title + "</div>"
				// save current title and empty the attribute. restore on mouse-out
				titledElm._entitled = titledElm.title
				titledElm.title = ''
			}
			else
				onOut()
		}

		function onOut(e){
			clearTimeout(hoverTimeout)
			document.removeEventListener('mousemove', onMove)
			tipElm.removeAttribute('style')
			tipElm.removeAttribute('data-over')
				if( titledElm && titledElm._entitled )
				titledElm.title = titledElm._entitled
				opts.onHide(titledElm, tipElm)
			titledElm = null
		}

		function onMove(e){
			mousePos.x = e.clientX
			requestAnimationFrame(() => setMousePos(e) )
		}
		function setMousePos(){
			var rect = tipElm.getBoundingClientRect()
			tipElm.style.setProperty('--mouse-pos', mousePos.x - rect.left)
		}

		function destroy(){
			document.removeEventListener('mouseover', onOver)
			document.removeEventListener('mouseout', onOut)
			document.removeEventListener('mousemove', onMove)
			document.body.removeChild(tipElm)
		}

		return {
			onOver, onOut, tipElm, destroy
		}
	}