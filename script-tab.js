var buttons = document.getElementsByTagName("button")

for(var x of buttons){
    x.addEventListener("click", function(){
        for(var y of buttons){
            y.classList.remove("selected")
        }

        this.classList.add("selected")

        var index = this.getAttribute("index")

        swiper.slideTo(index)
    })
}
swiper.on("slideChange", function(){
        for(var y of buttons){
            y.classList.remove("selected")
        }
    var currentSlide = swiper.activeIndex
    var activeButton = buttons[currentSlide]
    activeButton.classList.add("selected")

})