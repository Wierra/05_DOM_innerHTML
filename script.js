const nadpis = document.querySelector("h1")     //vybere první nadpis H1
//const nadpis2 = document.querySelectorAll("h2")       //vybere další nadpis, jedná se o objekty

nadpis.textContent = "Toto jsme změnil za pomocí JS"
nadpis.style.color = "yellow"
nadpis.style.backgroundColor = "red"

console.log(nadpis)

nadpis.classList.add("ramecek")