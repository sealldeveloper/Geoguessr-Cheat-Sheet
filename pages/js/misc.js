setTimeout(function() {
    let e = document.getElementsByClassName('textsmall');
    for (let i = 0; i < e.length; i++) {
      e[i].style.opacity = '1';
    }
  
    let result = UAParser(navigator.userAgent);
    document.getElementsByClassName('textsmall')[0].innerHTML = result.browser.name + " " + result.browser.version + " on " + result.os.name + " " + result.os.version;
  }, 500);
  
  