document.addEventListener("DOMContentLoaded", () => {
  // Practice area data
  const practiceAreas = {
    corporate: {
      title: "Corporate Law",
      description:
        "Expert guidance on formation, governance, mergers, acquisitions, and compliance matters for businesses of all sizes.",
      heroImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Corporate Law</span>
          <h2 class="animate-in">Navigating complex business challenges</h2>
        </div>
        
        <p class="animate-in">Our Corporate Law practice provides sophisticated counsel to businesses at every stage of their development, from startups to multinational corporations. We combine deep legal knowledge with practical business acumen to help our clients achieve their strategic objectives while managing legal risks effectively.</p>
        
        <p class="animate-in">Our team has extensive experience in all aspects of corporate law, including entity formation, governance, mergers and acquisitions, securities compliance, and commercial contracts. We work closely with our clients to understand their unique business challenges and develop tailored solutions that address their specific needs.</p>
        
        <div class="service-card animate-in">
          <h3>Mergers & Acquisitions</h3>
          <p>We guide clients through every stage of the M&A process, from initial strategy and due diligence to negotiation, documentation, and post-closing integration. Our goal is to help clients execute transactions efficiently while managing risks and maximizing value.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Strategic Acquisitions</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Divestitures</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Joint Ventures</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Due Diligence</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Corporate Governance</h3>
          <p>We advise boards of directors, committees, and executives on corporate governance matters, helping them fulfill their fiduciary duties while balancing business objectives with legal requirements.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Board Advisory</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Fiduciary Duties</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Compliance Programs</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Risk Management</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "James Wilson",
          title: "Managing Partner",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Emily Chen",
          title: "Partner, Corporate",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Technology",
        title: "Strategic Merger of Tech Companies",
        description:
          "We represented a leading technology company in its $2.5 billion merger with a complementary business, creating a market leader in enterprise software solutions. Our team handled all aspects of the transaction, from due diligence and regulatory approvals to integration planning.",
        stats: [
          { number: "$2.5B", label: "Transaction Value" },
          { number: "6", label: "Jurisdictions" },
          { number: "3", label: "Months to Completion" },
        ],
      },
      faqs: [
        {
          question: "What are the advantages of different business entity structures?",
          answer:
            "Different business entity structures offer varying advantages in terms of liability protection, tax treatment, management flexibility, and capital raising capabilities. Corporations provide strong liability protection but face double taxation. LLCs combine liability protection with tax flexibility. Partnerships offer simplicity but less liability protection. S Corporations avoid double taxation but have ownership restrictions. The optimal structure depends on your specific business goals, growth plans, tax situation, and risk profile.",
        },
        {
          question: "How can my company prepare for a merger or acquisition?",
          answer:
            "Preparing for a merger or acquisition involves several key steps: First, ensure your financial records are accurate and up-to-date. Second, organize all corporate documents, contracts, and intellectual property. Third, identify and address any potential legal issues or liabilities. Fourth, develop a clear understanding of your company's value and growth potential. Fifth, assemble a strong advisory team including legal counsel, financial advisors, and accountants. Finally, establish clear objectives for the transaction and develop a communication strategy for employees, customers, and other stakeholders.",
        },
        {
          question: "What corporate governance best practices should my company follow?",
          answer:
            "Effective corporate governance typically includes: a well-structured board with independent directors; clear delineation of roles and responsibilities; transparent decision-making processes; robust risk management and compliance programs; regular board and committee meetings with thorough documentation; comprehensive policies addressing conflicts of interest, ethics, and insider trading; regular review of executive compensation; and open communication with shareholders. These practices should be tailored to your company's size, industry, and stage of development.",
        },
      ],
    },
    litigation: {
      title: "Litigation",
      description:
        "Strategic representation in complex disputes, from pre-litigation counseling through trial and appeal.",
      heroImage:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Litigation</span>
          <h2 class="animate-in">Strategic advocacy in complex disputes</h2>
        </div>
        
        <p class="animate-in">Our Litigation practice provides sophisticated representation in high-stakes disputes across a wide range of industries and substantive areas of law. We combine rigorous legal analysis with strategic thinking and practical judgment to achieve optimal results for our clients, whether through negotiated resolution or trial.</p>
        
        <p class="animate-in">Our litigators have extensive experience in federal and state courts, arbitration forums, and administrative proceedings. We handle complex commercial disputes, securities litigation, antitrust matters, intellectual property litigation, employment disputes, and white-collar defense, among other areas.</p>
        
        <div class="service-card animate-in">
          <h3>Commercial Litigation</h3>
          <p>We represent businesses and individuals in complex commercial disputes, including contract disputes, business torts, fraud claims, partnership and shareholder disputes, and unfair competition claims.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Contract Disputes</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Business Torts</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Shareholder Disputes</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Class Actions</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Arbitration & Alternative Dispute Resolution</h3>
          <p>We represent clients in arbitration proceedings and other forms of alternative dispute resolution, helping them resolve disputes efficiently and cost-effectively outside of traditional court proceedings.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Domestic Arbitration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>International Arbitration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Mediation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Early Case Assessment</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Sarah Johnson",
          title: "Partner, Litigation",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Michael Thompson",
          title: "Senior Associate",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Healthcare",
        title: "Precedent-Setting Healthcare Antitrust Case",
        description:
          "We successfully defended a major healthcare provider in a complex antitrust lawsuit, securing a complete dismissal of all claims. The case established important precedent regarding market definition in the healthcare industry.",
        stats: [
          { number: "$500M+", label: "Damages Avoided" },
          { number: "24", label: "Witnesses Deposed" },
          { number: "3", label: "Appeals Won" },
        ],
      },
      faqs: [
        {
          question: "What factors should I consider when deciding whether to litigate a dispute?",
          answer:
            "When deciding whether to litigate, consider: the strength of your legal position; the potential damages or remedies available; the costs and time involved in litigation; the impact on business relationships and reputation; the availability of alternative dispute resolution methods; the likelihood of collecting a judgment; the precedential value of a court decision; and your risk tolerance. A thorough cost-benefit analysis with experienced counsel can help determine whether litigation is the right approach for your specific situation.",
        },
        {
          question: "How long does commercial litigation typically take?",
          answer:
            "The duration of commercial litigation varies widely depending on the complexity of the case, the court's docket, and the parties' approach. Simple cases might resolve in 6-12 months, while complex commercial disputes often take 2-3 years or more to reach trial. Factors affecting timeline include discovery scope, motion practice, court scheduling, settlement discussions, and appeals. Alternative dispute resolution methods like arbitration or mediation can often provide faster resolution.",
        },
        {
          question: "What are the advantages of arbitration versus court litigation?",
          answer:
            "Arbitration offers several potential advantages over court litigation: greater privacy and confidentiality; more flexibility in procedural rules; potentially faster resolution; the ability to select decision-makers with relevant expertise; limited discovery, potentially reducing costs; finality with limited appeal rights; and enforceability of awards across international borders. However, arbitration also has limitations, including restricted ability to join third parties, limited discovery that may disadvantage certain claims, and fewer procedural protections. The best forum depends on your specific dispute and objectives.",
        },
      ],
    },
    bankruptcy: {
      title: "Bankruptcy & Restructuring",
      description:
        "Comprehensive advice on financial restructuring, Chapter 11 proceedings, and distressed asset transactions.",
      heroImage:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Bankruptcy & Restructuring</span>
          <h2 class="animate-in">Expert guidance through financial challenges</h2>
        </div>
        
        <p class="animate-in">Our Bankruptcy & Restructuring practice provides sophisticated counsel to companies facing financial distress, as well as to creditors, investors, and other parties with interests in distressed businesses. We combine deep legal knowledge with practical business acumen to develop strategic solutions that protect our clients' interests and maximize value.</p>
        
        <p class="animate-in">Our team has extensive experience in all aspects of bankruptcy and restructuring, including Chapter 11 reorganizations, out-of-court workouts, distressed asset sales, and cross-border insolvency proceedings. We work closely with our clients to understand their unique challenges and objectives, and to develop tailored strategies that address their specific needs.</p>
        
        <div class="service-card animate-in">
          <h3>Debtor Representation</h3>
          <p>We guide companies through the complex process of financial restructuring, whether in or out of court. Our goal is to help clients stabilize operations, preserve value, and position themselves for future success.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Chapter 11 Reorganizations</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Out-of-Court Workouts</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Debt Restructuring</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Operational Restructuring</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Creditor Representation</h3>
          <p>We represent secured and unsecured creditors, bondholders, and creditors' committees in bankruptcy proceedings and out-of-court restructurings, helping them maximize recoveries and protect their rights.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Secured Creditor Representation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Creditors' Committee Representation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Claim Trading</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Preference and Fraudulent Transfer Defense</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Muhammed Abdul",
          title: "Partner",
          image:
            "https://images.unsplash.com/photo-1662104935762-707db0439ecd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Victoria Reynolds",
          title: "Managing Partner",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=500&q=80",
        },
      ],
      caseStudy: {
        tag: "Manufacturing",
        title: "$500M Restructuring of Global Manufacturing Company",
        description:
          "We represented a global manufacturing company in its comprehensive financial restructuring, which involved complex negotiations with multiple creditor groups across several jurisdictions. Our team developed and implemented a strategy that allowed the company to reduce its debt burden by over $200 million, streamline operations, and emerge as a stronger, more competitive business.",
        stats: [
          { number: "$200M+", label: "Debt Reduction" },
          { number: "3,500+", label: "Jobs Preserved" },
          { number: "18", label: "Months to Completion" },
        ],
      },
      faqs: [
        {
          question: "What is Chapter 11 bankruptcy?",
          answer:
            "Chapter 11 bankruptcy is a form of bankruptcy that involves a reorganization of a debtor's business affairs, debts, and assets. It is generally filed by corporations that need time to restructure their debts. Chapter 11 gives the debtor a fresh start, subject to the debtor's fulfillment of obligations under the plan of reorganization. During a Chapter 11 case, the debtor typically remains in control of its business operations as a 'debtor in possession,' subject to the oversight of the court and the creditors' committee.",
        },
        {
          question: "What is the difference between restructuring and bankruptcy?",
          answer:
            "Restructuring refers to the process of making significant changes to a company's financial or operational structure, often to address financial difficulties or to improve efficiency. This can be done outside of court through negotiations with creditors and other stakeholders. Bankruptcy, on the other hand, is a legal process governed by federal law that provides protection for debtors and a framework for resolving claims with creditors. Restructuring can occur within bankruptcy (such as in Chapter 11) or outside of bankruptcy (often called an 'out-of-court restructuring').",
        },
        {
          question: "How long does a typical Chapter 11 bankruptcy case take?",
          answer:
            "The duration of a Chapter 11 bankruptcy case can vary widely depending on the complexity of the business, the number of creditors, the amount of debt, and other factors. Simple cases might be completed in a few months, while complex cases involving large corporations can take several years. On average, a Chapter 11 case might take 12-24 months from filing to confirmation of a plan of reorganization. However, even after confirmation, the implementation of the plan and the final resolution of all claims can take additional time.",
        },
      ],
    },
    ip: {
      title: "Intellectual Property",
      description:
        "Protection and enforcement of patents, trademarks, copyrights, and trade secrets in the digital age.",
      heroImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Intellectual Property</span>
          <h2 class="animate-in">Protecting innovation and creative assets</h2>
        </div>
        
        <p class="animate-in">Our Intellectual Property practice helps clients protect, manage, and enforce their intellectual property rights in an increasingly digital and global economy. We work with companies of all sizes, from startups to multinational corporations, across a wide range of industries.</p>
        
        <p class="animate-in">Our team includes experienced patent attorneys, trademark specialists, and copyright experts who provide comprehensive counsel on all aspects of intellectual property law. We understand the technical, business, and legal dimensions of intellectual property and develop strategies that align with our clients' overall business objectives.</p>
        
        <div class="service-card animate-in">
          <h3>Patent Services</h3>
          <p>We help clients obtain, maintain, and enforce patent protection for their inventions in the United States and around the world. Our team includes attorneys with technical backgrounds in various fields who understand the complex technologies involved.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Patent Prosecution</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Patent Portfolio Management</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Patent Litigation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>IP Due Diligence</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Trademark & Copyright</h3>
          <p>We help clients protect their brands, creative works, and other intellectual property through trademark and copyright registration, enforcement, and litigation. Our team develops comprehensive strategies to maximize the value of these important assets.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Trademark Registration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Copyright Registration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Brand Protection</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Licensing Agreements</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "David Chen",
          title: "Partner, IP",
          image:
            "https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Jessica Williams",
          title: "Senior Associate",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Technology",
        title: "Landmark Patent Litigation Victory",
        description:
          "We secured a major victory for a technology client in a patent infringement case involving critical smartphone technology. After a three-week trial, the jury returned a verdict in our client's favor, awarding $75 million in damages and finding willful infringement.",
        stats: [
          { number: "$75M", label: "Damages Awarded" },
          { number: "12", label: "Patents Defended" },
          { number: "3", label: "Week Trial" },
        ],
      },
      faqs: [
        {
          question: "When should my company file for patent protection?",
          answer:
            "Companies should file for patent protection as early as possible after conceiving a novel, useful, and non-obvious invention. In the United States, which follows a first-to-file system, timing is critical. Ideally, file before any public disclosure, sale, or commercial use of the invention, as these activities can bar patent protection in many countries. However, the U.S. provides a one-year grace period after public disclosure. Balance filing early with having sufficient development to adequately describe the invention. Consider filing provisional applications to establish priority dates while development continues.",
        },
        {
          question: "What's the difference between trademark, copyright, and patent protection?",
          answer:
            "These three forms of intellectual property protection serve different purposes: Trademarks protect brand identifiers like names, logos, and slogans that distinguish your goods or services from others. They can last indefinitely with proper use and renewal. Copyrights protect original creative works like literature, music, art, and software. They arise automatically upon creation and generally last for the author's life plus 70 years. Patents protect inventions and grant the exclusive right to make, use, or sell the invention for a limited period (typically 20 years from filing). Each type of protection has different application processes, requirements, and enforcement mechanisms.",
        },
        {
          question: "How can my company protect its trade secrets?",
          answer:
            "To protect trade secrets, implement a comprehensive strategy including: identifying and classifying confidential information; developing clear policies and procedures for handling sensitive information; using confidentiality agreements with employees, contractors, and business partners; implementing physical security measures; utilizing technical safeguards like encryption and access controls; training employees regularly; restricting access on a need-to-know basis; monitoring for potential breaches; including non-compete clauses where legally permissible; and creating an incident response plan. Regular audits and updates to your protection strategy are essential as your business and technology evolve.",
        },
      ],
    },
    "real-estate": {
      title: "Real Estate & Construction",
      description:
        "Advice on acquisitions, development, financing, leasing, and construction projects across all sectors.",
      heroImage:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Real Estate & Construction</span>
          <h2 class="animate-in">Building assets and managing property interests</h2>
        </div>
        
        <p class="animate-in">Our Real Estate & Construction practice provides comprehensive legal services for all aspects of real estate development, investment, financing, and construction. We represent developers, investors, lenders, owners, and tenants in transactions and projects of all types and sizes.</p>
        
        <p class="animate-in">Our team has deep experience in all real estate sectors, including office, retail, industrial, multifamily, hospitality, and mixed-use. We understand the business and legal issues involved in complex real estate transactions and projects, and we work closely with our clients to achieve their objectives efficiently and effectively.</p>
        
        <div class="service-card animate-in">
          <h3>Real Estate Development</h3>
          <p>We guide clients through all phases of real estate development, from site acquisition and entitlements to construction and disposition. Our team helps clients navigate complex regulatory requirements and structure transactions to achieve their business objectives.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Site Acquisition</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Entitlements</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Project Financing</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Disposition</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Construction</h3>
          <p>We represent owners, contractors, subcontractors, and design professionals in all aspects of construction projects, from contract negotiation and drafting to dispute resolution. Our team helps clients manage risk and achieve successful project outcomes.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Contract Negotiation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Risk Management</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Dispute Resolution</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Project Delivery Methods</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Maria Rodriguez",
          title: "Partner, Real Estate",
          image:
            "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Robert Johnson",
          title: "Senior Counsel",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Mixed-Use Development",
        title: "$1.2B Urban Redevelopment Project",
        description:
          "We represented a developer in all aspects of a transformative mixed-use project that revitalized an urban neighborhood. Our work included complex land assemblage, public-private partnerships, financing, and leasing.",
        stats: [
          { number: "$1.2B", label: "Project Value" },
          { number: "12", label: "Acres Developed" },
          { number: "5", label: "Year Timeline" },
        ],
      },
      faqs: [
        {
          question: "What legal issues should I consider when purchasing commercial real estate?",
          answer:
            "When purchasing commercial real estate, consider: conducting thorough due diligence on title, survey, environmental conditions, and zoning/land use restrictions; carefully structuring the purchase agreement with appropriate contingencies, representations, and remedies; evaluating financing options and terms; assessing potential tax implications and structuring the transaction accordingly; reviewing and negotiating existing leases or other occupancy agreements; investigating physical condition and potential capital needs; understanding development potential and restrictions; addressing environmental liabilities; considering entity structure for ownership; and planning for post-closing operations and management. Each property type and location may present unique legal considerations.",
        },
        {
          question: "How can I minimize risk in construction projects?",
          answer:
            "To minimize risk in construction projects: use well-drafted contracts that clearly allocate responsibilities and risks; conduct thorough due diligence on project participants; implement appropriate insurance coverage; establish clear change order procedures; develop comprehensive project schedules with milestone deadlines; create detailed specifications and scope documents; include dispute resolution mechanisms; maintain open communication channels; document all decisions and changes; conduct regular site inspections; establish quality control processes; comply with all regulatory requirements; maintain proper lien waivers and releases; and consider performance bonds for critical participants. Early legal involvement can help identify and mitigate potential issues before they become problems.",
        },
        {
          question: "What are the key components of a commercial lease?",
          answer:
            "Key components of a commercial lease include: premises description and measurement method; lease term and renewal options; rent structure (including base rent, escalations, and additional rent); security deposit requirements; permitted use and exclusivity provisions; maintenance and repair responsibilities; alterations and improvements rights; assignment and subletting provisions; insurance requirements; default provisions and remedies; surrender conditions; operating expense definitions and audit rights; utilities and services; parking rights; signage rights; compliance with laws obligations; casualty and condemnation provisions; and subordination, non-disturbance, and attornment provisions. The importance of each component varies based on property type, location, and the parties' relative bargaining power.",
        },
      ],
    },
    tax: {
      title: "Tax Practice",
      description:
        "Strategic tax planning, compliance, and controversy resolution for businesses and high-net-worth individuals.",
      heroImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Tax Practice</span>
          <h2 class="animate-in">Strategic tax planning and compliance</h2>
        </div>
        
        <p class="animate-in">Our Tax practice provides sophisticated counsel on tax planning, compliance, and controversy resolution for businesses and high-net-worth individuals. We help clients structure transactions and operations to optimize tax efficiency while ensuring compliance with applicable laws and regulations.</p>
        
        <p class="animate-in">Our team includes attorneys with advanced degrees in taxation, former government tax officials, and certified public accountants who bring deep technical knowledge and practical experience to complex tax matters. We work closely with our clients' other advisors to develop comprehensive strategies that address their specific tax needs and objectives.</p>
        
        <div class="service-card animate-in">
          <h3>Business Tax Planning</h3>
          <p>We advise businesses on tax-efficient structures for domestic and international operations, mergers and acquisitions, restructurings, and other transactions. Our goal is to help clients minimize their tax burden while achieving their business objectives.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Entity Selection</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Transaction Structuring</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Cross-Border Planning</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Tax Credits & Incentives</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Tax Controversy & Litigation</h3>
          <p>We represent clients in tax disputes with federal, state, and local tax authorities, from administrative proceedings to litigation in court. Our team has extensive experience in resolving tax controversies efficiently and favorably.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Audit Defense</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Administrative Appeals</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Tax Court Litigation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Penalty Abatement</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Robert Thompson",
          title: "Partner, Tax",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Jennifer Lee",
          title: "Counsel",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "International Tax",
        title: "Cross-Border Restructuring",
        description:
          "We advised a multinational corporation on a comprehensive restructuring of its global operations, resulting in annual tax savings of over $15 million while ensuring compliance with complex international tax rules.",
        stats: [
          { number: "$15M+", label: "Annual Tax Savings" },
          { number: "12", label: "Countries Involved" },
          { number: "0", label: "Tax Controversies" },
        ],
      },
      faqs: [
        {
          question: "How can my business minimize its tax liability?",
          answer:
            "Businesses can minimize tax liability through several strategies: choosing the optimal business entity structure; maximizing available deductions and credits; timing income recognition and expense payments strategically; implementing retirement plans and employee benefits; utilizing cost segregation studies for property; considering international tax planning for cross-border operations; exploring research and development credits; leveraging opportunity zones and other incentive programs; implementing effective transfer pricing policies; and planning for state and local tax obligations. A comprehensive approach should align with your business objectives while maintaining compliance with tax laws. Regular review of tax strategies is essential as laws change and your business evolves.",
        },
        {
          question: "What should I do if my business receives an IRS audit notice?",
          answer:
            "If your business receives an IRS audit notice: first, verify the notice's authenticity and note all deadlines; immediately contact a tax professional experienced in audit defense; gather and organize all relevant documentation; determine the audit's scope and type (correspondence, office, or field); prepare a strategy for responding to information requests; consider extending the statute of limitations if more time is needed; maintain professionalism in all communications; provide only the requested information without volunteering additional details; keep detailed records of all communications with the IRS; and consider available appeal options if you disagree with the findings. Early professional involvement often leads to better outcomes.",
        },
        {
          question: "How do recent tax law changes affect my business?",
          answer:
            "Recent tax law changes have introduced significant modifications to business taxation, including: adjustments to corporate tax rates; changes to pass-through entity deductions; modifications to depreciation and expensing rules; revisions to international tax provisions; alterations to net operating loss utilization; changes to business interest expense limitations; modifications to research and development expense treatment; revisions to employee benefit and executive compensation rules; and updates to state and local tax conformity with federal changes. The impact varies based on your business structure, industry, size, and specific activities. Regular consultation with tax professionals is essential to adapt your tax strategy to these evolving rules.",
        },
      ],
    },
    family: {
      title: "Family & Inheritance Law",
      description: "Sensitive guidance on estate planning, wealth transfer, and family legal matters with discretion.",
      heroImage:
        "https://images.unsplash.com/photo-1581579438747-104c53d7fbc4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Family & Inheritance Law</span>
          <h2 class="animate-in">Protecting family legacies</h2>
        </div>
        
        <p class="animate-in">Our Family & Inheritance Law practice provides sensitive and sophisticated counsel on estate planning, wealth transfer, and family legal matters. We work with high-net-worth individuals and families to preserve and protect their assets across generations while addressing complex family dynamics.</p>
        
        <p class="animate-in">Our team understands the personal nature of family and inheritance matters and approaches each client relationship with empathy, discretion, and respect. We combine technical expertise with practical wisdom to develop solutions that address our clients' unique circumstances and objectives.</p>
        
        <div class="service-card animate-in">
          <h3>Estate Planning</h3>
          <p>We help clients develop comprehensive estate plans that reflect their wishes, minimize tax implications, and provide for the smooth transfer of assets to future generations. Our approach is tailored to each client's unique circumstances and objectives.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Wills & Trusts</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Business Succession</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Charitable Planning</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Tax Planning</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Trust & Estate Administration</h3>
          <p>We guide executors, trustees, and beneficiaries through the complex process of administering trusts and estates. Our team helps clients fulfill their fiduciary duties while navigating potential challenges and disputes.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Probate Administration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Trust Administration</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Fiduciary Representation</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Beneficiary Representation</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Elizabeth Park",
          title: "Partner, Family Law",
          image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Thomas Wilson",
          title: "Senior Counsel",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Family Business",
        title: "Multi-Generation Business Succession Plan",
        description:
          "We developed and implemented a comprehensive succession plan for a family-owned business with operations in multiple states. The plan addressed ownership transition, management succession, and wealth transfer while minimizing family conflict and tax implications.",
        stats: [
          { number: "$350M", label: "Business Value" },
          { number: "3", label: "Generations" },
          { number: "0", label: "Family Disputes" },
        ],
      },
      faqs: [
        {
          question: "When should I start estate planning?",
          answer:
            "Estate planning should begin as soon as you have assets or responsibilities. While many people delay until major life events like marriage, having children, or significant asset acquisition, basic estate planning is valuable for adults of all ages. Young adults should at minimum have powers of attorney for healthcare and finances. As you acquire assets, start a family, or build a business, your estate plan should evolve accordingly. Regular reviews (every 3-5 years or after major life changes) ensure your plan remains aligned with your goals and current laws. The complexity of your plan will naturally increase as your wealth and family situation become more complex.",
        },
        {
          question: "What's the difference between a will and a trust?",
          answer:
            "Wills and trusts serve different functions in estate planning: A will takes effect only after death and goes through probate court, becoming public record. It names guardians for minor children, specifies how assets should be distributed, and names an executor. A trust takes effect immediately upon creation and funding, continues through incapacity and death, and avoids probate, maintaining privacy. Trusts can manage assets during your lifetime and provide detailed instructions for asset distribution. While wills are simpler and less expensive to create, trusts offer greater privacy, probate avoidance, potential tax benefits, and more control over asset distribution. Many comprehensive estate plans include both instruments.",
        },
        {
          question: "How can I minimize family conflicts over inheritance?",
          answer:
            "To minimize family conflicts over inheritance: communicate your intentions clearly with family members during your lifetime; create detailed, legally sound estate planning documents that express your wishes unambiguously; consider using a corporate or professional fiduciary if family dynamics are complicated; treat children equitably (which doesn't necessarily mean equally); explain the reasoning behind potentially controversial decisions; use non-contestability clauses where appropriate; keep your estate plan updated as circumstances change; consider creating a letter of wishes to explain your decisions; use mediation provisions for dispute resolution; and consider lifetime gifting to address immediate needs while observing family dynamics. Professional guidance from both legal and family counseling perspectives can be invaluable.",
        },
      ],
    },
    employment: {
      title: "Employment Law",
      description: "Advisory and litigation services on employment issues, compliance, and workplace policies.",
      heroImage:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80",
      content: `
        <div class="section-header">
          <span class="section-tag animate-in">Employment Law</span>
          <h2 class="animate-in">Managing workforce relationships</h2>
        </div>
        
        <p class="animate-in">Our Employment Law practice provides comprehensive counsel to employers on all aspects of the employment relationship, from hiring and compensation to termination and dispute resolution. We help clients navigate complex and evolving employment laws while achieving their business objectives.</p>
        
        <p class="animate-in">Our team includes attorneys with deep experience in employment counseling, compliance, and litigation. We work with employers of all sizes across a wide range of industries, providing practical advice and effective representation tailored to each client's specific needs and risk profile.</p>
        
        <div class="service-card animate-in">
          <h3>Employment Counseling</h3>
          <p>We advise employers on day-to-day employment issues, including hiring practices, performance management, compensation and benefits, and workplace policies. Our goal is to help clients minimize legal risks while maintaining a productive workplace.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Handbook Development</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Policy Review</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Compliance Training</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Risk Management</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
        
        <div class="service-card animate-in">
          <h3>Employment Litigation</h3>
          <p>We represent employers in litigation involving employment discrimination, harassment, retaliation, wage and hour disputes, and other employment-related claims. Our team has extensive experience in federal and state courts, as well as before administrative agencies.</p>
          <div class="service-features">
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Discrimination Defense</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Wage & Hour Claims</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Wrongful Termination</span>
            </div>
            <div class="service-feature">
              <i class="fas fa-check"></i>
              <span>Class Action Defense</span>
            </div>
          </div>
          <a href="#" class="btn-text">Learn More <i class="fas fa-arrow-right"></i></a>
        </div>
      `,
      attorneys: [
        {
          name: "Michael Davidson",
          title: "Partner, Employment",
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
        {
          name: "Sophia Martinez",
          title: "Senior Associate",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        },
      ],
      caseStudy: {
        tag: "Class Action",
        title: "Wage and Hour Class Action Defense",
        description:
          "We successfully defended a national retailer against a class action lawsuit alleging misclassification of managers and failure to pay overtime. Through strategic motion practice and favorable settlement negotiations, we resolved the matter for a fraction of the initial demand.",
        stats: [
          { number: "5,000+", label: "Potential Class Members" },
          { number: "$50M+", label: "Initial Demand" },
          { number: "$3.5M", label: "Settlement Amount" },
        ],
      },
      faqs: [
        {
          question: "How can my company minimize employment litigation risks?",
          answer:
            "To minimize employment litigation risks: develop comprehensive, legally compliant employment policies; ensure consistent application of policies across all employees; document performance issues and disciplinary actions thoroughly; train managers on proper hiring, evaluation, and termination practices; conduct regular compliance audits of wage and hour practices; implement effective anti-harassment and discrimination policies with reporting mechanisms; use well-drafted employment agreements with appropriate protections; consider alternative dispute resolution provisions; maintain open communication channels with employees; conduct proper exit interviews; stay current with changing employment laws; and consult with employment counsel before making significant employment decisions. Proactive risk management is far more cost-effective than defending litigation.",
        },
        {
          question: "What should be included in an employee handbook?",
          answer:
            "A comprehensive employee handbook should include: a welcome statement and company overview; at-will employment disclaimer; equal employment opportunity statement; anti-harassment and discrimination policies with reporting procedures; workplace conduct expectations; compensation and benefits information; work hours, attendance, and leave policies; performance evaluation procedures; disciplinary process; technology and social media policies; confidentiality and conflict of interest provisions; safety and security protocols; complaint procedures; acknowledgment form; and state-specific addenda where applicable. The handbook should be regularly reviewed and updated to reflect changes in laws and company practices. While comprehensive, it should avoid language that could be interpreted as creating contractual obligations.",
        },
        {
          question: "How should my company handle an employee's request for accommodation?",
          answer:
            "When handling accommodation requests: treat all requests seriously and respond promptly; engage in an interactive process with the employee to understand limitations and potential accommodations; request medical documentation when appropriate, but only what's necessary to evaluate the request; consider various accommodation options, including those suggested by the employee; assess whether proposed accommodations would cause undue hardship; document the entire process, including discussions and decisions; implement reasonable accommodations effectively; follow up periodically to ensure the accommodation is working; maintain confidentiality of medical information; and train managers to recognize and properly respond to accommodation requests. Remember that what constitutes a 'reasonable accommodation' varies by jurisdiction and individual circumstances.",
        },
      ],
    },
  }

  // DOM elements
  const practiceOverview = document.getElementById("practice-overview")
  const practiceDetail = document.getElementById("practice-detail")
  const caseStudySection = document.getElementById("case-study-section")
  const faqSection = document.getElementById("faq-section")
  const practiceTitle = document.getElementById("practice-title")
  const practiceBreadcrumb = document.getElementById("practice-breadcrumb")
  const practiceDescription = document.getElementById("practice-description")
  const practiceMainContent = document.getElementById("practice-main-content")
  const practiceAttorneys = document.getElementById("practice-attorneys")
  const caseStudyContent = document.getElementById("case-study-content")
  const faqContent = document.getElementById("faq-content")
  const practiceHeroImage = document.querySelector(".practice-hero-image img")
  const practiceLinks = document.querySelectorAll(".practice-link")
  const practiceSidebarLinks = document.querySelectorAll(".practice-sidebar-link")

  // Function to show practice area details
  function showPracticeArea(practiceId) {
    // Get practice area data
    const practice = practiceAreas[practiceId]
    if (!practice) return

    // Update URL with practice area
    const url = new URL(window.location)
    url.searchParams.set("practice", practiceId)
    window.history.pushState({}, "", url)

    // Update hero section
    practiceTitle.textContent = practice.title
    practiceBreadcrumb.textContent = practice.title
    practiceDescription.textContent = practice.description
    practiceHeroImage.src = practice.heroImage
    practiceHeroImage.alt = practice.title

    // Update main content
    practiceMainContent.innerHTML = practice.content

    // Update attorneys
    let attorneysHTML = ""
    practice.attorneys.forEach((attorney) => {
      attorneysHTML += `
        <div class="attorney-card">
          <div class="attorney-image">
            <img src="${attorney.image}" alt="${attorney.name}">
          </div>
          <div class="attorney-info">
            <h4>${attorney.name}</h4>
            <p>${attorney.title}</p>
            <div class="attorney-contact">
              <a href="#"><i class="fas fa-envelope"></i> Email</a>
              <a href="#"><i class="fas fa-phone"></i> Call</a>
            </div>
          </div>
        </div>
      `
    })
    practiceAttorneys.innerHTML = attorneysHTML

    // Update case study
    if (practice.caseStudy) {
      caseStudyContent.innerHTML = `
        <div class="case-study-card animate-in">
          <div class="case-study-content">
            <div class="case-study-tag">${practice.caseStudy.tag}</div>
            <h3>${practice.caseStudy.title}</h3>
            <p>${practice.caseStudy.description}</p>
            <a href="#" class="btn-text">Read Full Case Study <i class="fas fa-arrow-right"></i></a>
            
            <div class="case-study-stats">
              ${practice.caseStudy.stats
                .map(
                  (stat) => `
                <div class="case-stat">
                  <div class="case-stat-number">${stat.number}</div>
                  <div class="case-stat-label">${stat.label}</div>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>
      `
      caseStudySection.style.display = "block"
    } else {
      caseStudySection.style.display = "none"
    }

    // Update FAQs
    if (practice.faqs && practice.faqs.length > 0) {
      let faqsHTML = ""
      practice.faqs.forEach((faq, index) => {
        faqsHTML += `
          <div class="faq-item animate-in ${index === 0 ? "active" : ""}">
            <div class="faq-question">
              <h3>${faq.question}</h3>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p>${faq.answer}</p>
            </div>
          </div>
        `
      })
      faqContent.innerHTML = faqsHTML
      faqSection.style.display = "block"

      // Add event listeners to FAQ items
      const faqItems = document.querySelectorAll(".faq-item")
      faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")

        question.addEventListener("click", () => {
          const isActive = item.classList.contains("active")

          // Close all items
          faqItems.forEach((faqItem) => {
            faqItem.classList.remove("active")
          })

          // If the clicked item wasn't active, open it
          if (!isActive) {
            item.classList.add("active")
          }
        })
      })
    } else {
      faqSection.style.display = "none"
    }

    // Show practice detail section and hide overview
    practiceOverview.style.display = "none"
    practiceDetail.style.display = "block"

    // Update active state in sidebar
    practiceSidebarLinks.forEach((link) => {
      link.classList.remove("active")
      if (link.dataset.practice === practiceId) {
        link.classList.add("active")
      }
    })

    // Animate elements
    const animateElements = document.querySelectorAll(".animate-in")
    animateElements.forEach((element) => {
      element.style.opacity = 0
      element.style.transform = "translateY(20px)"
    })

    // Use setTimeout to ensure the DOM has updated
    setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = 1
              entry.target.style.transform = "translateY(0)"
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
        },
      )

      animateElements.forEach((element) => {
        observer.observe(element)
      })
    }, 100)

    // Add text reveal animation to headings
    const headings = document.querySelectorAll("h2, h3")
    headings.forEach((heading) => {
      const text = heading.textContent
      const words = text.split(" ")

      let newHTML = ""
      words.forEach((word, index) => {
        newHTML += `<span class="animate-text-reveal" style="animation-delay: ${0.1 * index}s"><span>${word}</span></span> `
      })

      heading.innerHTML = newHTML
    })

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Function to show practice overview
  function showPracticeOverview() {
    practiceOverview.style.display = "block"
    practiceDetail.style.display = "none"
    caseStudySection.style.display = "none"
    faqSection.style.display = "none"

    // Update URL
    const url = new URL(window.location)
    url.searchParams.delete("practice")
    window.history.pushState({}, "", url)

    // Reset hero section
    practiceTitle.textContent = "Our Practice Areas"
    practiceBreadcrumb.textContent = "Practice Areas"
    practiceDescription.textContent =
      "Prestige Law Partners provides expert legal counsel across a range of practice areas, tailored to meet the complex needs of our clients. Explore our areas of expertise below."
    practiceHeroImage.src =
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&h=800&q=80"
    practiceHeroImage.alt = "Practice Areas"

    // Animate elements
    const animateElements = document.querySelectorAll(".animate-in")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1
            entry.target.style.transform = "translateY(0)"
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    animateElements.forEach((element) => {
      observer.observe(element)
    })

    // Add staggered animation to practice cards
    const practiceCards = document.querySelectorAll(".practice-card")
    practiceCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add("animate-visible")
      }, 100 * index)
    })
  }

  // Add event listeners to practice links
  practiceLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const practiceId = link.dataset.practice

      // Create transition effect before navigation
      createPageTransition(() => {
        showPracticeArea(practiceId)
      })
    })
  })

  // Add event listeners to sidebar links
  practiceSidebarLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const practiceId = link.dataset.practice

      // Create transition effect before navigation
      createPageTransition(() => {
        showPracticeArea(practiceId)
      })
    })
  })

  // Create page transition effect
  function createPageTransition(callback) {
    // Create overlay for transition
    const overlay = document.createElement("div")
    overlay.className = "page-transition-overlay"
    document.body.appendChild(overlay)

    // Create animated elements inside overlay
    for (let i = 0; i < 5; i++) {
      const bar = document.createElement("div")
      bar.className = "transition-bar"
      overlay.appendChild(bar)
    }

    // Animate the overlay
    setTimeout(() => {
      overlay.classList.add("active")

      // Execute callback after animation completes
      setTimeout(() => {
        if (callback) callback()

        // Remove overlay after transition completes
        setTimeout(() => {
          overlay.classList.remove("active")
          setTimeout(() => {
            document.body.removeChild(overlay)
          }, 800)
        }, 200)
      }, 800)
    }, 50)
  }

  // Check URL for practice area parameter
  function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search)
    const practiceParam = urlParams.get("practice")

    if (practiceParam && practiceAreas[practiceParam]) {
      showPracticeArea(practiceParam)
    } else {
      showPracticeOverview()
    }
  }

  // Check URL on page load
  checkURLParams()

  // Listen for popstate events (browser back/forward)
  window.addEventListener("popstate", checkURLParams)

  // Custom cursor
  const cursor = document.querySelector(".cursor")
  const cursorFollower = document.querySelector(".cursor-follower")

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Fix mobile navigation - ensure it works from any page including expertise section
  const mobileMenuToggle = document.querySelector(".menu-toggle")
  const mobileMenu = document.querySelector(".mobile-menu")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-links li a")

  if (mobileMenuToggle && mobileMenu) {
    // Improved toggle functionality
    mobileMenuToggle.addEventListener("click", (e) => {
      e.stopPropagation() // Prevent event bubbling
      mobileMenuToggle.classList.toggle("active")
      mobileMenu.classList.toggle("active")

      if (mobileMenu.classList.contains("active")) {
        document.body.style.overflow = "hidden" // Prevent scrolling when menu is open

        // Add dramatic entrance animation for each menu item
        document.querySelectorAll(".mobile-nav-links li").forEach((item, index) => {
          item.style.animation = `slideInRight 0.5s forwards ${0.1 * index}s`
          item.style.opacity = "0"
          setTimeout(() => {
            item.style.opacity = "1"
          }, 100 * index)
        })
      } else {
        document.body.style.overflow = "" // Restore scrolling when menu is closed
      }

      document.body.classList.toggle("menu-open")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (mobileMenu.classList.contains("active") && !mobileMenu.contains(e.target) && e.target !== mobileMenuToggle) {
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""
      }
    })

    // Prevent clicks inside menu from closing it
    mobileMenu.addEventListener("click", (e) => {
      e.stopPropagation()
    })
  }

  // Enhanced mobile navigation links with proper handling
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href")

      // If it's an anchor link on the same page
      if (href.startsWith("#")) {
        e.preventDefault()

        // Close the mobile menu
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""

        // Scroll to the section with animation
        const targetSection = document.querySelector(href)
        if (targetSection) {
          createMiniTransition(() => {
            targetSection.scrollIntoView({ behavior: "smooth" })
          })
        }
      } else if (href.includes("#")) {
        // Handle links like "index.html#contact"
        e.preventDefault()

        // Close the mobile menu
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""

        // Extract the base URL and the anchor
        const [baseUrl, anchor] = href.split("#")

        // If we're already on the correct page, just scroll
        if (window.location.pathname.includes(baseUrl) || baseUrl === "") {
          const targetSection = document.querySelector(`#${anchor}`)
          if (targetSection) {
            createMiniTransition(() => {
              targetSection.scrollIntoView({ behavior: "smooth" })
            })
          }
        } else {
          // Navigate to the new page with the anchor
          createSpectacularTransition(() => {
            window.location.href = href
          })
        }
      } else {
        // Regular navigation to another page
        e.preventDefault()

        // Close the mobile menu
        mobileMenuToggle.classList.remove("active")
        mobileMenu.classList.remove("active")
        document.body.classList.remove("menu-open")
        document.body.style.overflow = ""

        // Navigate with transition effect
        createSpectacularTransition(() => {
          window.location.href = href
        })
      }
    })
  })

  // Enhanced practice card animations
  const practiceCards = document.querySelectorAll(".practice-card")
  practiceCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      // Create floating particles inside the card
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement("div")
        particle.className = "card-particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 0.5}s`
        card.appendChild(particle)

        // Remove particles after animation completes
        setTimeout(() => {
          if (card.contains(particle)) {
            card.removeChild(particle)
          }
        }, 3000)
      }
    })
  })

  // Create spectacular page transition effect with advanced animations
  function createSpectacularTransition(callback) {
    // Create overlay for transition
    const overlay = document.createElement("div")
    overlay.className = "spectacular-transition-overlay"
    document.body.appendChild(overlay)

    // Create animated elements inside overlay
    for (let i = 0; i < 10; i++) {
      const bar = document.createElement("div")
      bar.className = "spectacular-transition-bar"
      bar.style.top = `${i * 10}vh`
      overlay.appendChild(bar)

      // Add floating particles for extra visual impact
      for (let j = 0; j < 5; j++) {
        const particle = document.createElement("div")
        particle.className = "transition-particle"
        particle.style.left = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 0.5}s`
        particle.style.animationDuration = `${0.5 + Math.random() * 1}s`
        bar.appendChild(particle)
      }
    }

    // Add 3D rotating law scales symbol
    const symbol = document.createElement("div")
    symbol.className = "law-symbol"
    symbol.innerHTML = '<i class="fas fa-balance-scale"></i>'
    overlay.appendChild(symbol)

    // Animate the overlay with advanced timing
    setTimeout(() => {
      overlay.classList.add("active")
      symbol.classList.add("active")

      // Execute callback after animation completes
      setTimeout(() => {
        if (callback) callback()
      }, 1200)
    }, 50)
  }

  // Create mini transition for in-page navigation
  function createMiniTransition(callback) {
    const flash = document.createElement("div")
    flash.className = "navigation-flash"
    document.body.appendChild(flash)

    setTimeout(() => {
      flash.classList.add("active")
      setTimeout(() => {
        if (callback) callback()
        setTimeout(() => {
          document.body.removeChild(flash)
        }, 500)
      }, 300)
    }, 10)
  }

  // Enhanced text reveal animations for headings
  function enhanceTextAnimations() {
    const headings = document.querySelectorAll("h1, h2, h3, .animate-text")

    headings.forEach((heading) => {
      const text = heading.textContent
      const words = text.split(" ")

      let newHTML = ""
      words.forEach((word, index) => {
        newHTML += `<span class="text-reveal-container"><span class="text-reveal" style="animation-delay: ${0.1 * index}s">${word}</span></span> `
      })

      heading.innerHTML = newHTML
    })
  }

  // Add magnetic effect to buttons
  function addMagneticEffect() {
    const buttons = document.querySelectorAll(".btn, .btn-text, .practice-card-icon")

    buttons.forEach((button) => {
      button.classList.add("magnetic-button")

      button.addEventListener("mousemove", (e) => {
        const rect = button.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2

        const strength = 20 // Adjust the magnetic strength
        button.style.transform = `translate(${x / strength}px, ${y / strength}px)`
      })

      button.addEventListener("mouseleave", () => {
        button.style.transform = "translate(0, 0)"
      })
    })
  }

  // Enhanced cursor effects
  function enhanceCursorEffects() {
    const cursor = document.querySelector(".cursor")
    const cursorFollower = document.querySelector(".cursor-follower")

    if (!cursor || !cursorFollower) return

    const links = document.querySelectorAll("a, .btn, .practice-card, .team-card")

    links.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        if (link.classList.contains("btn") || link.classList.contains("btn-text")) {
          document.body.classList.add("btn-hover")
        } else {
          document.body.classList.add("link-hover")
        }
      })

      link.addEventListener("mouseleave", () => {
        document.body.classList.remove("link-hover")
        document.body.classList.remove("btn-hover")
      })
    })
  }

  // Add parallax effect to elements
  function addParallaxEffect() {
    const parallaxElements = document.querySelectorAll(".practice-card, .team-card, .case-study-card")

    parallaxElements.forEach((element) => {
      element.classList.add("parallax-element")
    })

    document.addEventListener("mousemove", (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5

      parallaxElements.forEach((element) => {
        const rect = element.getBoundingClientRect()
        const elementX = rect.left + rect.width / 2
        const elementY = rect.top + rect.height / 2

        // Calculate distance from mouse to element center
        const distX = (e.clientX - elementX) / window.innerWidth
        const distY = (e.clientY - elementY) / window.innerHeight

        // Only apply parallax if mouse is relatively close to the element
        if (Math.abs(distX) < 0.3 && Math.abs(distY) < 0.3) {
          const strength = 15 // Adjust the parallax strength
          element.style.transform = `translate(${-distX * strength}px, ${-distY * strength}px)`
        } else {
          element.style.transform = "translate(0, 0)"
        }
      })
    })
  }

  // Initialize enhanced animations
  function initEnhancedAnimations() {
    enhanceTextAnimations()
    addMagneticEffect()
    enhanceCursorEffects()
    addParallaxEffect()

    // Add CSS variables for RGB values to use in animations
    const root = document.documentElement
    const primaryColor = getComputedStyle(root).getPropertyValue("--primary").trim()
    const secondaryColor = getComputedStyle(root).getPropertyValue("--secondary").trim()
    const accentGoldColor = getComputedStyle(root).getPropertyValue("--accent-gold").trim()

    // Convert hex to RGB
    function hexToRgb(hex) {
      const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
      hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b)

      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? `${Number.parseInt(result[1], 16)}, ${Number.parseInt(result[2], 16)}, ${Number.parseInt(result[3], 16)}`
        : null
    }

    // Set RGB variables
    if (primaryColor.startsWith("#")) {
      root.style.setProperty("--primary-rgb", hexToRgb(primaryColor))
    }

    if (secondaryColor.startsWith("#")) {
      root.style.setProperty("--secondary-rgb", hexToRgb(secondaryColor))
    }

    if (accentGoldColor.startsWith("#")) {
      root.style.setProperty("--accent-gold-rgb", hexToRgb(accentGoldColor))
    }
  }

  // Call enhanced animations after page load
  window.addEventListener("load", initEnhancedAnimations)

  // Add color shift animation to practice cards on hover
  const cards = document.querySelectorAll(".practice-card")
  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      const icon = card.querySelector(".practice-card-icon i")
      if (icon) {
        icon.style.animation = "colorPulse 2s infinite"
      }
    })

    card.addEventListener("mouseleave", () => {
      const icon = card.querySelector(".practice-card-icon i")
      if (icon) {
        icon.style.animation = ""
      }
    })
  })
})
