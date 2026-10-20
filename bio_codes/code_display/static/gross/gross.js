// Code to link projects and auto add new projects
const dis = document.getElementById("gross_dis")

const gross_proj = [
    {
        Proj_Title : "Skeletal Database",
        Proj_des : "Data base of the skeletal system",
        Proj_link : ""
    }
];

// map through list and return h1-Title, p-Description and a-link

gross_proj.forEach((proj) =>{
    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = proj.Proj_Title;

    const desc = document.createElement("p");
    desc.textContent = proj.Proj_des;

    const link = document.createElement("a");
    link.href=proj.Proj_link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View Code";
    link.className = "btn"; // style this like a button in CSS
    
    card.append(title, desc, link);
    dis.appendChild(card);
})   