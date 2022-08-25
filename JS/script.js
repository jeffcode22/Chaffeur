function changeCarCard(){
    const btn1 = document.getElementById("btn-1-car")
    const btn2 = document.getElementById("btn-2-car")
    const btn3 = document.getElementById("btn-3-car")
    const carTitle = document.querySelector(".carTitles")
    const carName = document.querySelector(".carName")
    const carImg = document.querySelector(".carImg")

    btn1.addEventListener("click", () =>{
        carName.textContent = "Mercedes maybach s600"
        carTitle.textContent = "First Class"
        btn1.setAttribute("id", "btn-clicked")
        btn2.setAttribute("id", "btn-remove-bg")
        btn3.setAttribute("id", "btn-remove-bg")
        carImg.src = "img/first-class.svg"
    })

    btn2.addEventListener("click", () =>{
        carTitle.textContent = "Business Class"
        carName.textContent = "Mercedes G - wagon"
        btn2.setAttribute("id", "btn-clicked")
        btn1.setAttribute("id", "btn-remove-bg")
        btn3.setAttribute("id", "btn-remove-bg")
        carImg.src = "img/business-car2.svg"
    })

    btn3.addEventListener("click", () =>{
        carTitle.textContent = "SUV"
        carName.textContent = "Mercedes M class"
        btn3.setAttribute("id", "btn-clicked")
        btn2.setAttribute("id", "btn-remove-bg")
        btn1.setAttribute("id", "btn-remove-bg")
        carImg.setAttribute("id", "suv-img-dom")
        carImg.src = "img/suv.svg"
    })
}

changeCarCard()




function changeTestimCard(){
    const btnTestim1 = document.getElementById("btn-1-testim")
    const btnTestim2 = document.getElementById("btn-2-testim")
    const btnTestim3 = document.getElementById("btn-3-testim")
    const avatar = document.querySelector(".avatarPics")
    const name = document.querySelector(".clientName")
    const city = document.querySelector(".clientCity")

    btnTestim1.addEventListener("click", () =>{
        btnTestim1.setAttribute("id", "btn-testim-clicked")
        btnTestim2.setAttribute("id", "btn-testim-remove")
        btnTestim3.setAttribute("id", "btn-testim-remove")
        avatar.src = "img/client-2.svg"
        name.textContent = "Anne Rudy"
        city.textContent = "Las Vegas"
    })

    btnTestim2.addEventListener("click", () =>{
        btnTestim2.setAttribute("id", "btn-testim-clicked")
        btnTestim1.setAttribute("id", "btn-testim-remove")
        btnTestim3.setAttribute("id", "btn-testim-remove")
        avatar.src = "img/white-w.svg"
        name.textContent = "Mary Hill"
        city.textContent = "Boston"
    })

    btnTestim3.addEventListener("click", () =>{
        btnTestim3.setAttribute("id", "btn-testim-clicked")
        btnTestim2.setAttribute("id", "btn-testim-remove")
        btnTestim1.setAttribute("id", "btn-testim-remove")
        avatar.src = "img/black-dud.svg"
        name.textContent = "James Smith"
        city.textContent = "New York"
    })

}

changeTestimCard()