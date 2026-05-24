window.addEventListener("load", () => {
    const availableDiv = document.getElementById("availability");
    const navigation = document.getElementsByTagName("nav");
    const introductionHeading = document.getElementById("greeting");
    const descriptionSubHeading = document.getElementById("description");
    const descriptionParagraph = document.getElementById("description-detail");
    const quickActionButtons = document.getElementById("quick-action");
    const scrollPrompt = document.getElementById("scroll-prompt");
    const name = document.getElementById("name");
    availableDiv.style.display = "none";
    introductionHeading.style.display = "none";
    descriptionSubHeading.style.display = "none";
    descriptionParagraph.style.display = "none";
    quickActionButtons.style.display = "none";
    scrollPrompt.style.display = "none";
    setTimeout(() => {availableDiv.style.animation = "float-in 1s ease-in-out forwards"; availableDiv.style.display = "flex"}, 100);
    setTimeout(() => {introductionHeading.style.animation = "float-in 1s ease-in-out forwards"; introductionHeading.style.display = "block";}, 200);
    setTimeout(() => {descriptionSubHeading.style.animation = "float-in 1s ease-in-out forwards"; descriptionSubHeading.style.display = "flex"}, 300);
    setTimeout(() => {descriptionParagraph.style.animation = "float-in 1s ease-in-out forwards"; descriptionParagraph.style.display = "flex"}, 400);
    setTimeout(() => {quickActionButtons.style.animation = "float-in 1s ease-in-out forwards"; quickActionButtons.style.display = "flex"}, 500);
    setTimeout(() => {scrollPrompt.style.animation = "float-in 1s ease-in-out forwards"; scrollPrompt.style.display = "flex"}, 600);
    setTimeout(() => { name.style.animation = "intensified-glow 1s ease-in-out forwards";}, 700)
    
})