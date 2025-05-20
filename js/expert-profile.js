document.addEventListener("DOMContentLoaded", () => {
  // Get expert ID from URL parameter
  const urlParams = new URLSearchParams(window.location.search)
  const expertId = urlParams.get("id") || "pavlo" // Default to 'pavlo' if no ID provided

  // Fetch expert data
  fetchExpertData(expertId)
})

// Function to fetch expert data
function fetchExpertData(expertId) {
  // In a real application, this would be an API call
  // For this example, we'll use a static data object
  const expertsData = {
    pavlo: {
      name: "PAVLO HOLOVKO",
      title: "Solicitor",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
      phone: "+38 50 22 33 44",
      email: "PAVLO@ALARIUS.COM",
      linkedin: "PAVLO.LINKEDIN",
      specialization: "SPECIALIZATION: CRIMINAL LAW AND PROCESS, BUSINESS PROTECTION, WHITE COLLAR CRIME",
      bio: [
        "As a lawyer with many years of experience in the positions of investigator and prosecutor, Pavlo focuses on providing high-quality legal protection to clients in the field of criminal law. His goal is to be a reliable partner for those faced with legal challenges, ensuring justice and protecting their rights in difficult situations.",
        "Pavlo has extensive experience in criminal proceedings, in particular, related to corruption, official crimes, business protection and anti-raider activities. This allows him to better understand the nuances of affairs and effectively defend the interests of clients.",
        "Pavlo always strives not only to solve the legal problems that clients face, but also to ensure their confidence in the outcome. Using his experience, Pavlo develops individual strategies that meet their specific needs.",
        "Understanding how important it is for clients to have reliable support in the face of legal challenges, Pavlo focuses on an individual approach, developing strategies that meet their specific needs. His experience at all stages of criminal proceedings allows him to accurately assess the situation and protect the interests of clients at the highest level.",
        "Pavlo's goal is to create an atmosphere of trust and openness, where every client can be sure that their interests are represented with maximum commitment and professionalism. Pavlo is always ready to become your advocate in the world of criminal law, helping you overcome difficulties and achieve justice.",
      ],
      memberships: [
        "Member of the National Association of Lawyers of Ukraine",
        "Participant of all-Ukrainian and international conferences on family and labor law",
      ],
      certificates: [
        "Certificate for the right to practice as a lawyer - October 2015.",
        "Certificate for the right to practice as a lawyer - October 2015.",
      ],
      education: [
        "Master of Jurisprudence, Institute of Personnel Training for Prosecution Bodies of Ukraine, National Law Academy of Ukraine named after Yaroslav the Wise, Kharkiv - 2012",
        'Postgraduate student of the Department of Constitutional Law of the National University "Odessa Law Academy"',
      ],
      languages: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "Advanced" },
      ],
    },
    viktor: {
      name: "VIKTOR SURNYK",
      title: "Managing Partner",
      photo:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
      phone: "+38 50 11 22 33",
      email: "VIKTOR@ALARIUS.COM",
      linkedin: "VIKTOR.LINKEDIN",
      specialization: "SPECIALIZATION: CORPORATE LAW, MERGERS & ACQUISITIONS, BUSINESS RESTRUCTURING",
      bio: [
        "Viktor Surnyk is the Managing Partner at Alarius Law, with over 20 years of experience in corporate law and complex business transactions. He specializes in mergers and acquisitions, corporate restructuring, and high-stakes business negotiations.",
        "Throughout his distinguished career, Viktor has advised Fortune 500 companies, international corporations, and high-growth startups on their most significant transactions and strategic initiatives. His deep understanding of both legal complexities and business objectives allows him to deliver practical solutions that protect client interests while facilitating growth.",
        "Viktor is known for his strategic thinking, meticulous attention to detail, and ability to navigate complex multi-jurisdictional matters. He has successfully led legal teams on transactions valued at over $10 billion throughout his career.",
        "As Managing Partner, Viktor is committed to maintaining the firm's reputation for excellence while fostering a collaborative culture that prioritizes client service, innovation, and professional development. He regularly mentors junior attorneys and is passionate about advancing diversity and inclusion in the legal profession.",
      ],
      memberships: [
        "American Bar Association, Business Law Section",
        "International Bar Association",
        "Board of Directors, Legal Aid Society",
      ],
      certificates: [
        "Certificate in Advanced Corporate Law - Harvard Law School, 2010",
        "Certificate in International Business Transactions - Oxford University, 2008",
      ],
      education: [
        "Juris Doctor, Yale Law School - 2003",
        "Bachelor of Arts in Economics, Princeton University, magna cum laude - 2000",
      ],
      languages: [
        { name: "English", level: "Native" },
        { name: "Ukrainian", level: "Native" },
        { name: "French", level: "Fluent" },
      ],
    },
    vitaliy: {
      name: "VITALIY NESTOR",
      title: "Managing Partner",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
      phone: "+38 50 33 44 55",
      email: "VITALIY@ALARIUS.COM",
      linkedin: "VITALIY.LINKEDIN",
      specialization: "SPECIALIZATION: INTELLECTUAL PROPERTY, TECHNOLOGY LAW, DATA PRIVACY",
      bio: [
        "Vitaliy Nestor is a Managing Partner at Alarius Law specializing in intellectual property law, technology transactions, and data privacy. With over 15 years of experience, Vitaliy has established himself as a leading authority in helping clients protect and leverage their intellectual assets in the digital economy.",
        "Vitaliy represents a diverse portfolio of clients ranging from emerging technology startups to multinational corporations across various industries including software, biotechnology, entertainment, and consumer products. He provides comprehensive counsel on patent prosecution, trademark registration, copyright protection, and trade secret safeguarding.",
        "In the rapidly evolving field of technology law, Vitaliy excels at structuring and negotiating complex licensing agreements, technology transfers, joint development agreements, and strategic alliances. His forward-thinking approach helps clients maximize the value of their intellectual property while minimizing legal risks.",
        "As data privacy regulations continue to expand globally, Vitaliy has developed particular expertise in helping organizations navigate compliance with GDPR, CCPA, and other privacy frameworks. He works closely with clients to develop practical data governance strategies that balance regulatory requirements with business objectives.",
      ],
      memberships: [
        "International Association of Privacy Professionals (IAPP)",
        "American Intellectual Property Law Association",
        "International Trademark Association",
      ],
      certificates: [
        "Certified Information Privacy Professional (CIPP/US) - 2018",
        "Certified Licensing Professional (CLP) - 2015",
      ],
      education: [
        "Juris Doctor, Stanford Law School - 2008",
        "Bachelor of Science in Computer Science, Massachusetts Institute of Technology - 2005",
      ],
      languages: [
        { name: "English", level: "Native" },
        { name: "Ukrainian", level: "Native" },
        { name: "German", level: "Intermediate" },
      ],
    },
    olga: {
      name: "OLGA GOLOVACHEVA",
      title: "Solicitor",
      photo:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
      phone: "+38 50 44 55 66",
      email: "OLGA@ALARIUS.COM",
      linkedin: "OLGA.LINKEDIN",
      specialization: "SPECIALIZATION: FAMILY LAW, INHERITANCE, DISPUTE RESOLUTION",
      bio: [
        "Olga Golovacheva is a Solicitor at Alarius Law with extensive experience in family law, inheritance matters, and dispute resolution. With over 12 years of practice, she has established herself as a trusted advisor to clients navigating complex personal and family legal challenges.",
        "Olga represents individuals in a wide range of family law matters, including divorce, child custody, property division, and domestic violence protection. Her compassionate approach combined with strategic advocacy helps clients achieve favorable outcomes during difficult life transitions.",
        "In her inheritance practice, Olga assists clients with estate planning, will drafting, probate proceedings, and inheritance disputes. She works closely with clients to ensure their wishes are properly documented and their assets are protected for future generations.",
        "As an accomplished mediator, Olga helps clients resolve disputes through alternative dispute resolution methods, often saving them the emotional and financial costs of protracted litigation. Her ability to find common ground while protecting her clients' interests makes her particularly effective in high-conflict situations.",
      ],
      memberships: [
        "Family Law Association of Ukraine",
        "International Academy of Family Lawyers",
        "Association of Women Lawyers",
      ],
      certificates: ["Certified Family Law Specialist - 2016", "Certified Mediator - 2014"],
      education: [
        "Master of Laws, Kyiv National University - 2010",
        "Bachelor of Laws, Kyiv National University - 2008",
      ],
      languages: [
        { name: "Ukrainian", level: "Native" },
        { name: "Russian", level: "Native" },
        { name: "English", level: "Fluent" },
      ],
    },
    maksym: {
      name: "MAKSYM PYROZHOK",
      title: "Junior Lawyer",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
      phone: "+38 50 55 66 77",
      email: "MAKSYM@ALARIUS.COM",
      linkedin: "MAKSYM.LINKEDIN",
      specialization: "SPECIALIZATION: CORPORATE LAW, COMMERCIAL CONTRACTS, REGULATORY COMPLIANCE",
      bio: [
        "Maksym Pyrozhok is a Junior Lawyer at Alarius Law focusing on corporate law, commercial contracts, and regulatory compliance. Despite his junior status, Maksym has quickly established himself as a valuable team member with a keen analytical mind and strong work ethic.",
        "Maksym assists senior attorneys with corporate transactions, including mergers and acquisitions, corporate restructurings, and joint ventures. His attention to detail and thorough due diligence work have been instrumental in identifying potential issues and ensuring smooth transaction closings.",
        "In the area of commercial contracts, Maksym drafts and reviews various agreements including supply agreements, distribution agreements, service contracts, and licensing arrangements. He works closely with clients to understand their business objectives and ensure their interests are properly protected.",
        "Maksym also supports the firm's regulatory compliance practice, helping clients navigate complex regulatory frameworks in various industries. He stays current on legislative and regulatory developments to provide timely and accurate advice to clients.",
      ],
      memberships: ["Ukrainian Bar Association, Young Lawyers Division", "European Law Students Association"],
      certificates: ["Certificate in Corporate Governance - 2022", "Certificate in Contract Drafting - 2021"],
      education: ["Master of Laws, Kyiv-Mohyla Academy - 2020", "Bachelor of Laws, Kyiv-Mohyla Academy - 2018"],
      languages: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "Advanced" },
        { name: "Polish", level: "Intermediate" },
      ],
    },
    oleksandr: {
      name: "OLEKSANDR MARTYNIUK",
      title: "Solicitor",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
      phone: "+38 50 66 77 88",
      email: "OLEKSANDR@ALARIUS.COM",
      linkedin: "OLEKSANDR.LINKEDIN",
      specialization: "SPECIALIZATION: LITIGATION, DISPUTE RESOLUTION, INTERNATIONAL ARBITRATION",
      bio: [
        "Oleksandr Martyniuk is a Solicitor at Alarius Law specializing in litigation, dispute resolution, and international arbitration. With over 10 years of experience, he has established himself as a formidable advocate in complex commercial disputes.",
        "Oleksandr represents clients in high-stakes litigation across a wide range of industries, including financial services, energy, manufacturing, and technology. His strategic approach to litigation, combined with his persuasive advocacy skills, has resulted in numerous favorable outcomes for clients.",
        "In the field of international arbitration, Oleksandr has represented clients in proceedings under the rules of major arbitral institutions, including the ICC, LCIA, and SCC. His cross-border experience spans disputes in Europe, Asia, and the Middle East.",
        "Oleksandr is also skilled in alternative dispute resolution methods, including mediation and negotiation. He works closely with clients to develop dispute resolution strategies that align with their business objectives and risk tolerance.",
      ],
      memberships: [
        "Ukrainian Bar Association",
        "International Bar Association, Litigation Committee",
        "Ukrainian Arbitration Association",
      ],
      certificates: [
        "Certificate in International Arbitration - 2018",
        "Advanced Certification in Trial Advocacy - 2015",
      ],
      education: [
        "Master of Laws, Kyiv National University - 2012",
        "Bachelor of Laws, Lviv National University - 2010",
      ],
      languages: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "Fluent" },
        { name: "German", level: "Intermediate" },
      ],
    },
  }

  // Get expert data
  const expertData = expertsData[expertId]

  if (!expertData) {
    console.error("Expert not found")
    return
  }

  // Update page title
  document.title = `${expertData.name} | Alarius Law`

  // Update expert information
  document.getElementById("expert-name").textContent = expertData.name
  document.getElementById("expert-title").textContent = expertData.title
  document.getElementById("expert-photo").src = expertData.photo
  document.getElementById("expert-photo").alt = expertData.name
  document.getElementById("expert-phone").textContent = expertData.phone
  document.getElementById("expert-email").textContent = expertData.email
  document.getElementById("expert-linkedin").textContent = expertData.linkedin
  document.getElementById("specialization-title").textContent = expertData.specialization

  // Update bio
  const bioContainer = document.getElementById("expert-bio")
  bioContainer.innerHTML = ""
  expertData.bio.forEach((paragraph) => {
    const p = document.createElement("p")
    p.textContent = paragraph
    bioContainer.appendChild(p)
  })

  // Update memberships
  const membershipsContainer = document.getElementById("memberships-list")
  membershipsContainer.innerHTML = ""
  expertData.memberships.forEach((membership) => {
    const li = document.createElement("li")
    li.textContent = membership
    membershipsContainer.appendChild(li)
  })

  // Update certificates
  const certificatesContainer = document.getElementById("certificates-list")
  certificatesContainer.innerHTML = ""
  expertData.certificates.forEach((certificate) => {
    const li = document.createElement("li")
    li.textContent = certificate
    certificatesContainer.appendChild(li)
  })

  // Update education
  const educationContainer = document.getElementById("education-list")
  educationContainer.innerHTML = ""
  expertData.education.forEach((education) => {
    const li = document.createElement("li")
    li.textContent = education
    educationContainer.appendChild(li)
  })

  // Update languages
  const languagesContainer = document.getElementById("languages-list")
  languagesContainer.innerHTML = ""
  expertData.languages.forEach((language) => {
    const li = document.createElement("li")
    li.innerHTML = `<span class="language-name">${language.name}</span><span class="language-level">${language.level}</span>`
    languagesContainer.appendChild(li)
  })
}
