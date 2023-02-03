function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  if (!terms) {
    return; // quit this there isn't that item on the page
  }

  const button = document.querySelector('.accept');

  function obCallBack(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing the button
      ob.unobserve(terms.lastElementChild);
    }
  }
  const ob = new IntersectionObserver(obCallBack, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);
}

scrollToAccept();
