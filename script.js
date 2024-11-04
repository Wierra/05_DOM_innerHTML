const nadpis = document.querySelector("h1")     //vybere první nadpis H1
//const nadpis2 = document.querySelectorAll("h2")       //vybere další nadpis, jedná se o objekty

nadpis.textContent = "Toto jsme změnil za pomocí JS"
nadpis.style.color = "yellow"
nadpis.style.backgroundColor = "red"

console.log(nadpis)

nadpis.classList.add("ramecek")
nadpis.classList.remove("ramecek")  //smazání třídy


document.querySelector("#img-kocka").src = "https://1gr.cz/fotky/idnes/16/102/r7/MCE66b5b9_profimedia_0131330855.jpg"
document.querySelector("#img-kocka").style.width = "200px"  //v rámci JS pracujeme s id

document.querySelector("#img-kocka").alt = "Malé kotě, mňau"

document.querySelector(".produkty p")       //výběr prvku z určité části = kontextový selektor; univerzálnější

//document.getElementById       = historický zápis, můžeme se setkat, dnes se již nepoužívá