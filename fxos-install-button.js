(function() {

  var install = function() {
    console.log('installing');
    if (!navigator.mozApps) return;

    var url = location.href.substring(0, location.href.lastIndexOf("/")) + "manifest.webapp";
    var request = navigator.mozApps.install(url);
    request.onsuccess = function() {
      console.log('installation succesfull', this.result);
    };
    request.onerror = function() {
      console.log('installation failed')
    };
  };

  document.register('x-fxos-install-button', {
    lifecycle: {
      created: function() {
        button = document.createElement('button');
        button.innerHTML = 'install'
        button.onclick = install
        this.appendChild(button);
      }
     }
  });

})()
