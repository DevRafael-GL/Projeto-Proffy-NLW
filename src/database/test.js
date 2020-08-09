const Database = require('./db')
const createProffy = require('./createProffy')


Database.then(async (db) => {
    // Inserir dados
    proffyValue = {
        name: "Rafael Gonçalves",
        avatar: "https://avatars3.githubusercontent.com/u/68398729?s=460&u=4df079c38961bac1bed5ae54c08f352f07c87947&v=4",
        whatsapp: "987496321",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "1.000",
        // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
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

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar dados inseridos

    // Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    // o horário que a pessoa trabalha, por exemplo, é das 8h - 18h
    // o horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    // o time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT class_schelule.*
        FROM class_schelule
        WHERE class_schelule.class_id = "1"
        AND class_schelule.weekday = "1"
        AND class_schelule.time_from <= "520"
        AND class_schelule.time_to > "700"
        
    `)

    // console.log(selectClassesSchedules)

})