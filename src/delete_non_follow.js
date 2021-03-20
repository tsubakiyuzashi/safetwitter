(() => {

const delete_not_follow = () => {
  const articles = document.getElementsByTagName("article");
  for (article of articles) {
    const img = article.getElementsByTagName("img");
    for (i of img) {
      if (!i.getAttribute("src").match(/profile_images/)) {
        continue;
      }

      let remove = true;
      for (l of g_follow_list) {
        if (i.parentNode.parentNode.parentNode.parentNode.getAttribute("href") === `/${l}`) {
          remove = false;
          break;
        }
      }

      if (remove) {
        if (article.parentNode !== null && article.parentNode !== undefined) {
          if (article.parentNode.removeChild !== null && article.parentNode.removeChild !== undefined) {
            article.parentNode.removeChild(article);
          }
        }
      }
    }
  }
}

const observer = new MutationObserver(delete_not_follow);

observer.observe(document.getElementsByTagName("body")[0], {
  childList: true,
  subtree: true
});
    
})();