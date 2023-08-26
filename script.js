const click = document.querySelector(".share");
const men = document.querySelector(".info")
click.addEventListener('click' , () => {
    click.classList.toggle("active");
    })
    men.addEventListener('click' , () => {
        men.classList.toggle("active");
  })