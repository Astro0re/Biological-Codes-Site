// Code to link projects and auto add new projects
const dis = document.getElementById("gen_dis")

const genetic_proj = [
    {
        Proj_Title : "DNA Sequencing",
        Proj_des : "Simuate possible DNA sequences",
        Proj_link : ""
    },
    {
        Proj_Title : "Phylogenetic Tree",
        Proj_des : "",
        Proj_link : ""
    },
    {
        Proj_Title : "Protein Folding",
        Proj_des : "",
        Proj_link : ""
    },
    {
        Proj_Title : "Punnett Squares",
        Proj_des : "",
        Proj_link : ""
    },
    {
        Proj_Title : "Sepuence Alignment",
        Proj_des : "",
        Proj_link : ""
    }
];

// map through list and return h1-Title, p-Description and a-link
genetic_proj.forEach((proj) => {
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
    