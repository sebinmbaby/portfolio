fetch("portfolio.json")
.then(response => response.json())
.then(data => {
  document.getElementById("location").textContent = data.location;
  document.getElementById("name").textContent = data.name;
  document.getElementById("title").textContent = data.title;
  document.getElementById("summary").textContent = data.summary;
  document.getElementById("aboutText").textContent = data.about;
  document.getElementById("contactText").textContent = data.contactText;

  document.getElementById("githubLink").href = data.links.github;
  document.getElementById("linkedinLink").href = data.links.linkedin;

  document.getElementById("emailLink").href = "mailto:" + data.email;
  document.getElementById("contactEmail").textContent = data.email;
  document.getElementById("contactEmail").href = "mailto:" + data.email;
  document.getElementById("contactEmailButton").href = "mailto:" + data.email;

  document.getElementById("contactPhone").textContent = data.phone;
  document.getElementById("contactPhone").href = "tel:" + data.phone.replace(/\s+/g, "");
  document.getElementById("contactPhoneButton").href = "tel:" + data.phone.replace(/\s+/g, "");

  document.getElementById("resumeLink").href = data.resume;
  document.getElementById("contactResumeButton").href = data.resume;

  document.getElementById("experienceList").innerHTML = data.experience.map(item => `
    <div class="card">
      <p class="meta">${item.company} | ${item.period}</p>
      <h3>${item.role}</h3>
      <p>${item.description}</p>
    </div>
  `).join("");

  document.getElementById("projectList").innerHTML = data.projects.map(project => `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.description}</p>

      ${project.github ? `
        <a href="${project.github}"
           target="_blank"
           style="display:inline-block;margin-top:10px;color:#38bdf8;">
           View on GitHub →
        </a>
      ` : ""}
    </div>
  `).join("");

  document.getElementById("skillList").innerHTML = data.skills.map(skill => `
    <span class="skill">${skill}</span>
  `).join("");
})
.catch(error => console.error("Error loading portfolio.json:", error));
