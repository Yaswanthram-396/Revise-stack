import fs from "fs/promises";
// fs.writeFile("data.txt","Helllo",(err,data)=>{
//     if(err)return "Error";

// })
// fs.readFile("data.txt","utf-8",(err,data)=>{
//     if(err)return "Error";
    
//     console.log(data);
// });

// fs.appendFile(
//     "data.txt",
//     "\nNew line",
//     (err) => {
//         if (err) {
//             console.log(err);
//         }
//     }
// );
// fs.readFile("data.txt","utf-8",(err,data)=>{
//     if(err)return "Error";
    
//     console.log(data);
// });

// async function main(){
//     let data = await fs.readFile(".env", "utf-8");
//     let usersdata= JSON.parse(data);
//     usersdata.forEach(element => {
//         fs.appendFile(
//          "output.txt",
//          `\n${element.profile.first_name} ${element.profile.last_name}`,
//           (err) => {
//          if (err) {
//             console.log(err);
//         }
//       }
//     );
//     });
    
// }

async function main(){
    let data = await fs.readFile(".env", "utf-8");
    const words=data.split(" ");

    const count={};
    words.forEach(element => {
        count[element]=(count[element]||0)+1;
    });
   const sorted = Object.entries(count);
   sorted.sort((a, b) => b[1] - a[1]);
   const output=sorted.slice(0,5)
   console.log(output);
    fs.appendFile(
        "output.txt",
        words,
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
    
}
main();