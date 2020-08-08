const Database = require('./db')

Database.then((db) => {
    // Inserir dados

    proffyValue =  {
        name: "Rafael Gonçalves",
        avatar: "https://avatars3.githubusercontent.com/u/68398729?s=460&u=4df079c38961bac1bed5ae54c08f352f07c87947&v=4",
        whatsapp: "987496321",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        }

    classValue = {
        subject: "Química",
        cost: "1.000",
        // O proffy id virá pelo banco de dados
    }

    classScheduleValue = [
        // class_id virá com o banco de dados, após cadastramos a class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 1,
            time_from: 520,
            time_to: 1220
        }
    ]

    // createProffy(db, {proffyValue, classValue, classScheduleValue})

    // Consultar dados inseridos

})