// Code to link projects and auto add new projects
const dis = document.getElementById("cell_dis");

const cell_proj = [
    {
        Proj_Title: "Cellular Division",
        Proj_des: "Code to simulate cell growth/division",
        Proj_link: ""
    },
    {
        Proj_Title: "Cellular Pathways",
        Proj_des: "Code to simulate cell growth propabilities",
        Proj_link: ""
    }
];

cell_proj.forEach((proj) => {
    const card = document.createElement("div");

    const title = document.createElement("h3");
    title.textContent = proj.Proj_Title;

    const desc = document.createElement("p");
    desc.textContent = proj.Proj_des;

    const link = document.createElement("a");
    link.href = proj.Proj_link;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "View Code";
    link.className = "btn"; // style this like a button in CSS

    card.append(title, desc, link);
    dis.appendChild(card);
});