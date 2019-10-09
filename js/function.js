const mqMobile = window.matchMedia("(max-width : 600px)");
const mqTablet = window.matchMedia("(min-width : 601px) and (max-width : 992px)");


if (mqMobile.matches) {
	console.log('mobile');
} else if (mqTablet.matches) {
  	console.log('tablet');
} else {
  	console.log('desktop');
}
