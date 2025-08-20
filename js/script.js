

//?-------      navbar

    // get pageName
const currentPage = location.pathname.split("/").pop();
  
  console.log(currentPage);
  
  const links = document.querySelectorAll("nav a");
  links.forEach(link => {
    if(link.getAttribute("href") === currentPage){
      link.classList.add("activeted");
    } else {
      link.classList.remove("activeted");
    }
  });
