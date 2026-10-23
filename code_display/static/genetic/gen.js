// Code to link projects and auto add new projects
const dis = document.getElementById("gen_dis")

const genetic_proj = [
    {
        Proj_Title : "DNA Sequencing",
        Proj_des : "Generate possible DNA sequences.",
        Proj_link : "https://github.com/Astro0re/Bio-Codes/blob/main/Genetic/DNA_Sequence.py"
    },
    {
        Proj_Title : "Phylogenetic Tree",
        Proj_des : "Calculate distances among DNA sequences for phylogenetic analysis.",
        Proj_link : "https://github.com/Astro0re/Bio-Codes/blob/main/Genetic/Phylogenetic_tree.py"
    },
    {
        Proj_Title : "Punnett Squares",
        Proj_des : "Explore possible allele combinations and their inheritance probabilities.",
        Proj_link : "https://github.com/Astro0re/Bio-Codes/blob/main/Genetic/Punnett_Squares.py"
    },
    {
        Proj_Title : "Sequence Alignment",
        Proj_des : "Compare two DNA sequences to identify aligned regions and similarities.",
        Proj_link : "https://github.com/Astro0re/Bio-Codes/blob/main/Genetic/Sequence_Alignment.py"
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

