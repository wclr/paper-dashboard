//require('./assets/js/jquery-1.10.2')
require('./assets/css/bootstrap.min.css')
require('./assets/js/bootstrap.min')
require('./assets/js/bootstrap-checkbox-radio')


require('./assets/js/chartist.min')
require('./assets/js/bootstrap-notify')
require('./assets/js/paper-dashboard')


require('./assets/css/animate.min.css')
require('./assets/css/paper-dashboard.css')
require('./assets/css/pagination.css')
require('./assets/css/preloader.css')

function loadCss (url) {
  let link = document.createElement('link');
  link.href = url;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  
  let head = document.getElementsByTagName('head')[0];
  let links = head.getElementsByTagName('link');
  let style = head.getElementsByTagName('style')[0];
  
  let isLoaded = false;  
  for (var i = 0; i < links.length; i++) {
    var node = links[i];
    if (node.href.indexOf(link.href) > -1) {
      isLoaded = true;
    }
  }
  if (isLoaded) return;
  head.insertBefore(link, style);
}

loadCss('http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css')
loadCss('https://fonts.googleapis.com/css?family=Muli:400,300')
require('./assets/css/themify-icons.css')