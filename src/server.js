require('express')()
.get("/", (req, res) => {
    return res.send("Hi from Brazil")
})
.get("/study", (req, res) => {
    return res.send("Página study")
})
.listen(5500)