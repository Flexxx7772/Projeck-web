const express = require("express");
const multer = require("multer");
const OpenAI = require("openai");

const app = express();

const upload = multer({
    dest: "uploads/"
});

const openai = new OpenAI({
    apiKey: "API_KEY"
});

app.post("/generate",
upload.single("image"),
async (req,res)=>{

    const result =
    await openai.chat.completions.create({
        model:"gpt-4o",
        messages:[
        {
            role:"user",
            content:[
            {
                type:"text",
                text:"Buatkan kode HTML CSS dari screenshot ini"
            },
            {
                type:"image_url",
                image_url:{
                    url:"data:image/png;base64,..."
                }
            }
            ]
        }]
    });

    res.json({
        code:
        result.choices[0].message.content
    });

});

app.listen(3000);
