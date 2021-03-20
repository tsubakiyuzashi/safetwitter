(() => {
  
const delete_sidebar = () => {
  const sidebar = document.getElementsByTagName("main")[0].children[0].children[0].children[0].children;

  for (s of sidebar) {
    if (s.getAttribute("data-testid") === "sidebarColumn") {
      s.parentNode.removeChild(s);
    }
  }
}
  
const observer = new MutationObserver(delete_sidebar);

observer.observe(document.getElementsByTagName("body")[0], {
  childList: true,
  subtree: true
});
  
})();