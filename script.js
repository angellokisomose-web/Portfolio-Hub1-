const siteData = {
    profile: {
        name: "Your Name",
        role: "Creative Developer and Project Creator",
        bio: "I build practical and creative projects, and this website is where people can learn about me, explore my work, and download selected files directly from Google Drive.",
        summary: "I create digital work and practical project files that can be shared easily with clients, collaborators, students, or customers.",
        email: "you@example.com",
        phone: "+256700000000",
        phoneLabel: "+256 700 000000",
        location: "Kampala, Uganda"
    },
    projects: [
        {
            title: "Website Starter Project",
            category: "Web Design",
            description: "A ready-to-use starter package for a modern website layout, ideal for portfolios, business pages, or landing pages.",
            tools: "HTML, CSS, JavaScript",
            driveUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing",
            previewUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing"
        },
        {
            title: "Brand Assets Pack",
            category: "Design Kit",
            description: "A downloadable bundle of graphics, mockups, and editable visual assets prepared for presentations or marketing work.",
            tools: "Canva, Photoshop, Figma",
            driveUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing",
            previewUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing"
        },
        {
            title: "Business Document Template",
            category: "Productivity",
            description: "A polished set of templates for proposals, invoices, and client-facing documents that can be downloaded from Drive.",
            tools: "Docs, PDF, Office",
            driveUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing",
            previewUrl: "https://drive.google.com/file/d/REPLACE_WITH_FILE_ID/view?usp=sharing"
        }
    ]
};

const initials = siteData.profile.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

const textTargets = [
    ["hero-name", siteData.profile.name],
    ["hero-role", siteData.profile.role],
    ["hero-bio", siteData.profile.bio],
    ["card-name", siteData.profile.name],
    ["card-title", siteData.profile.role],
    ["profile-location", siteData.profile.location],
    ["about-summary", siteData.profile.summary]
];

textTargets.forEach(([id, value]) => {
    document.getElementById(id).textContent = value;
});

document.getElementById("profile-avatar").textContent = initials || "YN";

const emailLink = document.getElementById("profile-email");
emailLink.textContent = siteData.profile.email;
emailLink.href = `mailto:${siteData.profile.email}`;

const phoneLink = document.getElementById("profile-phone");
phoneLink.textContent = siteData.profile.phoneLabel;
phoneLink.href = `tel:${siteData.profile.phone}`;

const contactEmailButton = document.getElementById("contact-email-button");
contactEmailButton.href = `mailto:${siteData.profile.email}`;

const contactPhoneButton = document.getElementById("contact-phone-button");
contactPhoneButton.href = `tel:${siteData.profile.phone}`;
contactPhoneButton.textContent = `Call ${siteData.profile.phoneLabel}`;

const projectsGrid = document.getElementById("projects-grid");

siteData.projects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project-card";
    article.innerHTML = `
    <span class="project-tag">${project.category}</span>
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <div class="project-meta">
      <span>${project.tools}</span>
    </div>
    <div class="project-actions">
      <a class="button primary" href="${project.driveUrl}" target="_blank" rel="noreferrer">Download Project</a>
      <a class="button secondary" href="${project.previewUrl}" target="_blank" rel="noreferrer">Preview Link</a>
    </div>
  `;
    projectsGrid.appendChild(article);
});