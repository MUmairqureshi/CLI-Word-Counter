import inquirer from "inquirer";

type  ans = (str : string ) => void

const wordCount  : ans = (string) =>{
    const words =  string.trim().split(/\s+/g);

    console.log("Your total words is  : " , words.length)

}

async function totalword() {
    const word = await inquirer .prompt([
        {
            type : "input",
            name : "paragraph",
            message : " Enter your Paragraph"
        }
    ])
    await wordCount(word.paragraph)
}
await totalword( )