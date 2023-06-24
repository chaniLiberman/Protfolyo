
let projects = [
    {
        imgProject: "Images/techIt.png",
        nameProject: "TECHIT",
        description: "A store website for electrical products, it is possible to view the products, in existing and new branches, as well as to view the full details of the product and mark it as a favorite",
        stack: "html, Java Script, Boot-Strap",
        linkNetlify: "https://techit-by-chani.netlify.app",
        linkGitHub: "https://github.com/chaniLiberman/TechIt.git",
    },
    {
        imgProject: "Images/myAccount.png",
        nameProject: "MY ACCOUNT",
        description: "A convenient application for organizing finances. It is possible to enter an amount of money and the nature of the expenditure / income and to watch actions at any time, and it is also possible to edit or delete",
        stack: "html, Java Script, Boot-Strap ,Font awsome",
        linkNetlify: "https://my-account-by-chani.netlify.app",
        linkGitHub: "https://github.com/chaniLiberman/Account.git",
    },
    {
        imgProject: "Images/manageu.jpg",
        nameProject: "MANAGE-U",
        description: "A convenient application for managing tasks - it is possible to enter several actions that have not yet been done and there is the possibility to edit the action - delete and mark it - as completed",
        stack: "html, Java Script, Type Script, Boot-Strap ,Font awesome",
        linkNetlify: "https://manageu-by-chani.netlify.app",
        linkGitHub: "https://github.com/chaniLiberman/MANAGEU-project.git",
    },
];


function showProjects() {
    for (let project of projects) {
        document.getElementById("projects").innerHTML +=
            `<div class="col-lg-4 col-md-12 col-sm-12">
            <div class="card h-100 w-20">

            <a href="${project.linkNetlify}" target="_blank"> 
              <img class="card-img-top" src="${project.imgProject}" alt="${project.nameProject}">
            </a>
          
            <div class="card-body">
          <h5 class="card-title">${project.nameProject}</h5>
          <p class="card-text">${project.description}</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">${project.stack}</li>
    </ul>
    <div class="card-body">
        <a href="${project.linkNetlify}" target="_blank" class="card-link">netlify link</a>
        <a href="${project.linkGitHub}" target="_blank" class="card-link"><i class="fa-brands fa-github"></i>GitHub repo</a>
    </div>
             </div>
        </div>`
    }

}
showProjects();


// <img src="..." class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
//             card's
//             content.</p>
//     </div>
//     <ul class="list-group list-group-flush">
//         <li class="list-group-item">An item</li>
//         <li class="list-group-item">A second item</li>
//         <li class="list-group-item">A third item</li>
//     </ul>
//     <div class="card-body">
//         <a href="#" class="card-link">Card link</a>
//         <a href="#" class="card-link">Another link</a>
//     </div>
