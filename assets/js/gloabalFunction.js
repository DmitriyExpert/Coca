
// Add loading lazy to img

const allImg = document.querySelectorAll('img');

function addLazyToImg() {
      allImg.forEach((item) => {
            if(item.hasAttribute('loading') && item.getAttribute('loading' === 'lazy')) {
                  return;
            } else {
                  item.setAttribute('loading', 'lazy');
            }
      })
}

addLazyToImg();