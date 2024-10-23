
  // Function to insert iframe
  function insertIframe(theme) {
    const iframeContainer = document.getElementById("iframe-container");
    var bodyClass = window.document.body.classList;
    iframeContainer.innerHTML = ''; // Clear previous iframe
  
    let iframe = document.createElement("iframe");
    iframe.width = "100%";
    iframe.height = "700";
    iframe.frameborder="0";
  
    iframe.scrolling="auto";
  
  
    if (bodyClass.contains('quarto-light')) {
      iframe.src = "https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?auteur_exp=Theodore+Cherriere&idHal=theodore-cherriere&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_DOI=oui&CB_typdoc=oui&langue=Anglais&tri_exp=typdoc&tri_exp2=date_publi&tri_exp3=titre&ordre_aff=TA&Fen=Aff&css=https://tcherrie.github.io/Hal_css.css";
    } else {
      iframe.src = "https://haltools.archives-ouvertes.fr/Public/afficheRequetePubli.php?auteur_exp=Theodore+Cherriere&idHal=theodore-cherriere&CB_auteur=oui&CB_titre=oui&CB_article=oui&CB_DOI=oui&CB_typdoc=oui&langue=Anglais&tri_exp=typdoc&tri_exp2=date_publi&tri_exp3=titre&ordre_aff=TA&Fen=Aff&css=https://tcherrie.github.io/Hal_css_dark.css";
      // iframe.style="background: #222;";
      // iframe.allowtransparency="true";
    }
  
    iframeContainer.appendChild(iframe);
  }
  
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        insertIframe();
      }
    });
  });
  
  observer.observe(window.document.body, {
    attributes: true
  });
  
  insertIframe();
  
  
  