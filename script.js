window.addEventListener("load", () => {
    const availableDiv = document.getElementById("availability");
    const navigation = document.getElementsByTagName("nav");
    const introductionHeading = document.getElementById("greeting");
    const descriptionSubHeading = document.getElementById("description");
    const descriptionParagraph = document.getElementById("description-detail");
    const quickActionButtons = document.getElementById("quick-action");
    const scrollPrompt = document.getElementById("scroll-prompt");
    const name = document.getElementById("name");
    const aboutMeDiv = document.getElementById("about-me");
    const projectsDiv = document.getElementById("projects");
    const contactDiv = document.getElementById("contact");
    const spaceDiv = document.getElementById("space");

    availableDiv.style.display = "none";
    introductionHeading.style.display = "none";
    descriptionSubHeading.style.display = "none";
    descriptionParagraph.style.display = "none";
    quickActionButtons.style.display = "none";
    scrollPrompt.style.display = "none";
    aboutMeDiv.style.display = "none";
    projectsDiv.style.display = "none";
    contactDiv.style.display = "none";
    spaceDiv.style.height = "100vh";
    

    setTimeout(() => {availableDiv.style.animation = "float-in 1s ease-in-out forwards"; availableDiv.style.display = "flex"}, 100);
    setTimeout(() => {introductionHeading.style.animation = "float-in 1s ease-in-out forwards"; introductionHeading.style.display = "block";}, 200);
    setTimeout(() => {descriptionSubHeading.style.animation = "float-in 1s ease-in-out forwards"; descriptionSubHeading.style.display = "flex"}, 300);
    setTimeout(() => {descriptionParagraph.style.animation = "float-in 1s ease-in-out forwards"; descriptionParagraph.style.display = "flex"}, 400);
    setTimeout(() => {quickActionButtons.style.animation = "float-in 1s ease-in-out forwards"; quickActionButtons.style.display = "flex"}, 500);
    setTimeout(() => {scrollPrompt.style.animation = "float-in 1s ease-in-out forwards"; scrollPrompt.style.display = "flex"}, 600);
    
    window.addEventListener("scroll", () => {
        const scrollAmount = window.scrollY;
        if (scrollAmount > window.innerHeight * 0.5) {
            aboutMeDiv.style.animation = "float-in 1s ease-in-out forwards";
            aboutMeDiv.style.display = "block";
        }
        if (scrollAmount > window.innerHeight * 1.5) {
            projectsDiv.style.animation = "float-in 1s ease-in-out forwards";
            projectsDiv.style.display = "block";
        }
        if (scrollAmount > window.innerHeight * 3.5) {
            contactDiv.style.animation = "float-in 1s ease-in-out forwards";
            contactDiv.style.display = "flex";
            spaceDiv.style.height = "0";
        }
    })
})