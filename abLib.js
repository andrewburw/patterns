var $ = (function () {

	//'use strict';

	let Constructor = function (selector) {
		this.elems = document.querySelectorAll(selector);
	};

	Constructor.prototype.attr = function (name,value) {

   if (value == null) {

			return this.elems[0].getAttribute(name) ;
   } else {

	  		this.elems[0].setAttribute(name, value)
   }



    };

		Constructor.prototype.htmL = function (ht) {
					this.elems[0].innerHTML = ht;
			};
		Constructor.prototype.hide = function () {
        this.elems[0].classList.remove('visible');
        this.elems[0].classList.add('hidden');

				};

		Constructor.prototype.show = function () {

						this.elems[0].classList.remove('hidden');
	          this.elems[0].classList.add('visible');


	  				};
	



  let instantiate = function (selector) {
  		return new Constructor(selector);
  	};

	return instantiate;

})();
