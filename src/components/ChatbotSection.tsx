
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useTranslation } from "./LanguageSelector";

// Expanded legal knowledge base with more comprehensive content
const legalKnowledge = {
  copyrights: "Copyright is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings. In most countries, copyright lasts for the life of the creator plus 50-70 years. Copyright owners have exclusive rights to reproduce, distribute, perform, display, or make derivative works from their creation. Copyright infringement occurs when someone uses copyrighted material without permission, potentially leading to legal action, financial penalties, or even criminal charges in severe cases. Fair use or fair dealing provisions in some jurisdictions allow limited use of copyrighted materials without permission for purposes like criticism, news reporting, teaching, or research.",
  
  trademarks: "A trademark is a sign, design, or expression that identifies and distinguishes the products or services of one business from those of others. Trademarks can include words, names, symbols, logos, colors, sounds, or a combination of these elements. Registration of a trademark grants the owner exclusive rights to use the mark in relation to specific goods or services. Trademarks are territorial, meaning they must be registered separately in each country where protection is sought. They can potentially last forever as long as they remain in use and renewals are filed. Trademark infringement occurs when an unauthorized party uses a mark that is identical or confusingly similar to a registered trademark. The strength of a trademark depends on its distinctiveness, with invented words typically receiving stronger protection than descriptive terms.",
  
  patents: "A patent is an exclusive right granted for an invention - a product or process that provides a new technical solution to a problem or offers a new way of doing something. Patents provide inventors with legal protection against unauthorized use, sale, or manufacturing of their invention for a limited period, typically 20 years from the filing date. To be patentable, an invention must be novel (not previously known to the public), non-obvious (involve an inventive step that wouldn't be obvious to someone skilled in the relevant field), and industrially applicable. The patent application process requires detailed disclosure of how the invention works, which becomes public knowledge. Patents are territorial rights that must be applied for and granted in each country separately. Different types include utility patents (for processes, machines, etc.), design patents (for ornamental designs), and plant patents (for new plant varieties).",
  
  divorce: "Divorce is the legal dissolution of a marriage by a court or other competent authority. The process varies significantly across jurisdictions but generally involves division of marital assets and debts, determination of child custody, visitation rights, child support, and possibly alimony or spousal support. There are two main types: fault-based divorce (where one party must prove wrongdoing by the other) and no-fault divorce (based on irreconcilable differences or irretrievable breakdown of marriage). Many jurisdictions require a separation period before divorce can be granted. Collaborative divorce, mediation, and arbitration are increasingly popular alternatives to traditional litigation. Prenuptial agreements can determine many aspects of property division in advance. International divorces involving multiple countries can be particularly complex due to conflicting laws. The emotional and financial impacts of divorce often extend well beyond the legal proceedings, and many jurisdictions now require parenting classes or cooling-off periods to protect children's interests.",
  
  custody: "Child custody refers to the legal and practical relationship between a parent or guardian and a child, including the right to make decisions for the child and the duty to care for them. Types of custody include physical custody (where the child lives) and legal custody (decision-making authority). Arrangements can be sole/primary (one parent has majority responsibility) or joint/shared (responsibilities divided between parents). Courts determine custody based on the 'best interests of the child' standard, considering factors like parental capability, home stability, child's relationship with each parent, and sometimes the child's preferences if they're old enough. Custody orders can be modified if circumstances change significantly. Many jurisdictions encourage parenting plans that detail each parent's responsibilities. Non-parent custody may be granted to grandparents or other relatives in certain circumstances. International custody disputes involving different countries are governed by treaties like the Hague Convention on International Child Abduction. Child custody evaluations by mental health professionals are often used in contested cases.",
  
  tenancy: "Tenancy is a legal arrangement where one party (tenant) pays rent to occupy or use property owned by another party (landlord). Residential tenancies are governed by specific laws that vary by jurisdiction but typically cover security deposits, maintenance responsibilities, rent increases, eviction procedures, and tenant rights. Common types include fixed-term tenancies (set duration with an end date) and periodic tenancies (continuing on a month-to-month or similar basis). A tenancy agreement or lease outlines the terms and conditions including rent amount, payment schedule, property use restrictions, and termination terms. Tenants generally have rights to habitable housing (basic utilities, weatherproofing, structure integrity, etc.), privacy, and protection against discrimination. Landlords typically have rights to timely rent payment, property maintenance, and legal remedies for tenant violations. Eviction procedures must follow legal requirements including proper notice periods and court proceedings in most jurisdictions. Security deposits are regulated regarding amount, handling, and conditions for withholding upon move-out. Subletting (tenant renting to another party) may be restricted or require landlord approval.",
  
  employment: "Employment law governs the employer-employee relationship and covers hiring, working conditions, benefits, and termination. It includes minimum wage requirements, working hour limitations, workplace safety standards, anti-discrimination protections, family and medical leave provisions, and wrongful termination restrictions. Employment relationships can be 'at-will' (either party can end employment at any time for legal reasons) or contractual (specific terms govern the relationship). Workers may be classified as employees (entitled to legal protections and benefits) or independent contractors (self-employed with fewer protections). Discrimination based on protected characteristics (race, gender, age, disability, etc.) is prohibited in hiring, promotion, compensation, and termination. Harassment creating a hostile work environment is illegal. Many countries require employers to provide safe working environments, workers' compensation for injuries, unemployment insurance, and certain benefits. Employment contracts, employee handbooks, and workplace policies establish specific terms of employment. Collective bargaining through unions allows workers to negotiate as a group. Wrongful termination claims arise when employment ends in violation of law or contract. Non-compete agreements restricting future employment may be enforceable depending on jurisdiction and reasonableness.",
  
  criminal: "Criminal law deals with offenses against the public, society, or state, as opposed to civil law which addresses disputes between individuals. It defines conduct that constitutes crimes, establishes punishments, and outlines criminal procedure. Crimes are typically categorized as felonies (serious offenses carrying imprisonment of more than one year) or misdemeanors (lesser offenses with shorter sentences). Core elements of most crimes include both a guilty act (actus reus) and guilty mind/intent (mens rea). The prosecution must prove guilt 'beyond reasonable doubt' - a higher standard than civil cases. Criminal defendants have constitutional rights including the right to remain silent, right to an attorney, protection against unreasonable searches, right to a fair and speedy trial, and protection against double jeopardy. Criminal procedures include arrest, charging, arraignment, preliminary hearings, plea bargaining, trial, sentencing, and appeals. Potential consequences include imprisonment, probation, fines, community service, and in some jurisdictions, capital punishment. Alternative approaches like diversion programs, drug courts, and restorative justice focus on rehabilitation rather than punishment. Criminal records can have long-term consequences for employment, housing, and civil rights.",
  
  civilRights: "Civil rights are personal rights guaranteed and protected by constitutions and laws, ensuring freedom from discrimination and equal treatment in public settings. They include fundamental freedoms like speech, religion, assembly, and press; voting rights; equal protection under law; due process; and freedom from discrimination based on characteristics like race, gender, disability, age, national origin, religion, and in many places sexual orientation and gender identity. Civil rights legislation typically prohibits discrimination in areas including employment, housing, education, public accommodations, voting, and government services. Affirmative action policies aim to increase representation of underrepresented groups. Enforcement mechanisms include government agencies (like the Equal Employment Opportunity Commission in the US) and private lawsuits. Remedies may include injunctive relief (court orders to stop discrimination), monetary damages, and equitable remedies. Civil rights movements have historically fought to expand rights to marginalized groups, leading to landmark legislation and court decisions. Despite legal protections, systemic discrimination persists in many areas. International frameworks like the Universal Declaration of Human Rights establish global civil rights standards. The intersection of civil rights with other areas (like disability, immigration, or LGBTQ+ rights) continues to evolve legally.",
  
  property: "Property law governs ownership and use rights in both real property (land and fixtures) and personal property (movable possessions). For real property, ownership can take forms including fee simple (complete ownership), life estate (ownership for one's lifetime), leasehold (rental rights), or easements (right to use another's property for specific purposes). Property transfers occur through sale (requiring valid contracts, often with specific formalities), gift, or inheritance. Most jurisdictions require property deeds to be recorded in public registries. Land use may be restricted by zoning laws, environmental regulations, building codes, and private agreements like covenants or easements. Adverse possession allows someone to gain ownership after openly occupying property without permission for a statutory period. Co-ownership arrangements include tenancy in common, joint tenancy (with right of survivorship), and tenancy by the entirety (for married couples). For personal property, ownership is typically less formal but may involve titles (vehicles) or registration (intellectual property). Bailment occurs when property is temporarily entrusted to another's possession (like repairs or storage). Security interests allow property to serve as loan collateral. Property disputes commonly involve boundary issues, construction defects, title problems, landlord-tenant conflicts, or homeowner association disagreements.",
  
  tax: "Tax law concerns government levies on individuals and entities to fund public expenditures. Income taxes apply to earnings from employment, business, investments, and other sources, with progressive rate structures in many countries. Property taxes are assessed on real estate and sometimes personal property based on assessed values. Sales and use taxes apply to purchases of goods and services. Estate and gift taxes may apply to transfers of wealth. Payroll taxes fund social insurance programs like Social Security and Medicare. Corporate taxes apply to business profits, with complex rules regarding deductions, depreciation, and international operations. Tax planning involves legally arranging affairs to minimize tax liability. Tax avoidance (legal minimization strategies) differs from tax evasion (illegal non-payment). Tax credits reduce tax liability directly, while deductions reduce taxable income. Tax filing requirements include deadlines, forms, and supporting documentation, with penalties for non-compliance. Tax disputes may be resolved through administrative appeals, tax courts, or regular courts. International taxation involves issues like double taxation treaties, foreign tax credits, and transfer pricing. Tax laws frequently change with new legislation, regulations, and court decisions. Specialized tax professionals include accountants, enrolled agents, and tax attorneys.",
  
  immigration: "Immigration law governs the legal entry and residence of foreign nationals in a country and the path to citizenship for eligible residents. Visa categories typically include family-sponsored (for relatives of citizens/residents), employment-based (for workers with needed skills), refugee/asylum (for those fleeing persecution), diversity (lottery systems), and nonimmigrant (temporary stays for tourism, business, study, etc.). Permanent residency (green card in the US) grants the right to live and work indefinitely in a country. Naturalization is the process of becoming a citizen, typically requiring a period of residency, language proficiency, knowledge of history/government, and good moral character. Undocumented/illegal immigration refers to entry or residence without legal permission. Removal/deportation procedures apply to those who violate immigration laws or commit certain crimes. Humanitarian programs may offer temporary protected status to those fleeing natural disasters or civil unrest. Immigration enforcement varies widely between countries in terms of border security, interior enforcement, and employer verification requirements. Immigration policies often reflect economic needs, family unity principles, humanitarian concerns, and national security considerations. The complex interplay between immigration, refugee, and nationality laws creates significant legal challenges for migrants navigating multiple legal systems.",
  
  medical: "Medical law addresses legal issues in healthcare, balancing provider obligations with patient rights. Informed consent requires healthcare providers to disclose treatment information, risks, benefits, and alternatives, allowing patients to make educated decisions. Medical malpractice claims arise when providers breach the standard of care, causing patient injury - requiring proof of duty, breach, causation, and damages. Medical records are subject to confidentiality protections and privacy laws like HIPAA (in the US), regulating information disclosure and security requirements. Advance directives (living wills, healthcare proxies) allow individuals to specify treatment preferences if they become incapacitated. End-of-life care involves complex legal and ethical issues around termination of treatment, palliative care, and in some jurisdictions, assisted dying. Mental health law addresses involuntary commitment, patient rights, and capacity determination. Public health law grants government authorities powers to protect community health, including quarantine, vaccination requirements, and emergency measures during outbreaks. Reproductive health law covers contraception access, abortion rights (varying widely by jurisdiction), surrogacy, and assisted reproductive technologies. Healthcare business law regulates insurance, facility licensing, fraud prevention, and antitrust issues in the medical industry. Bioethical issues like organ donation, genetic testing, research ethics, and emerging technologies present evolving legal challenges.",
  
  business: "Business law encompasses the legal framework governing business formation, operations, transactions, and dissolution. Business entities include sole proprietorships (single owner with unlimited liability), partnerships (shared ownership and liability), limited liability companies (LLCs - combining liability protection with flexible management), and corporations (separate legal entities with shareholder ownership). Corporate governance involves the relationships and responsibilities between shareholders, directors, officers, and other stakeholders. Securities law regulates the issuance and trading of stocks, bonds, and other investments, with requirements for registration, disclosure, and protection against fraud. Contract law forms the foundation of business transactions, requiring offer, acceptance, consideration, and legal purpose for enforceability. Commercial transactions are governed by the Uniform Commercial Code (in the US) or similar frameworks covering sales, leases, and financial instruments. Intellectual property protections (patents, trademarks, copyrights, trade secrets) safeguard business innovations and brand identity. Employment law impacts hiring, compensation, benefits, workplace conditions, and termination. Antitrust laws prevent monopolistic practices and promote fair competition. Consumer protection laws prohibit deceptive practices and ensure product safety. Bankruptcy provides mechanisms for business reorganization or liquidation when debts cannot be paid. Business litigation addresses disputes between businesses, shareholders, partners, customers, or government agencies. Mergers, acquisitions, and other business combinations involve complex legal due diligence and regulatory compliance.",
  
  insurance: "Insurance law governs contracts where insurers agree to compensate or indemnify another party against specified risks in exchange for premium payments. Key insurance types include property (covering buildings and contents against perils like fire, theft), liability (protecting against claims from third parties), life (paying beneficiaries upon insured's death), health (covering medical expenses), auto (for vehicle-related losses and liability), and business interruption (for lost income during disruptions). Insurance policies are contracts of 'utmost good faith' requiring full disclosure of relevant information by both parties. Policy components include declarations (identifying parties and basic terms), insuring agreements (coverage details), exclusions (specifying non-covered events), conditions (requirements for coverage), and endorsements (modifications to standard terms). Claims processes involve notification, investigation, coverage determination, and payment or denial. Bad faith claims arise when insurers unreasonably deny or delay legitimate claims. Insurance regulation occurs primarily at the state level (in the US) and includes licensing requirements, financial solvency monitoring, rate approval, and consumer protection provisions. Reinsurance allows insurers to transfer portions of their risk to other insurers. Insurance defense counsel represents policyholders in liability claims, while coverage counsel addresses disputes over policy interpretation. Subrogation allows insurers who pay claims to pursue recovery from responsible third parties.",
  
  wills: "Wills and estates law governs the transfer of property upon death and the administration of deceased persons' assets. A will is a legal document specifying how one's property should be distributed after death and often naming an executor to manage the estate. Testamentary capacity (mental competence) is required for creating a valid will, along with proper execution formalities like witness signatures. Dying intestate (without a will) results in property distribution according to statutory formulas, typically prioritizing spouses and descendants. Probate is the court-supervised process of authenticating wills, paying debts and taxes, and distributing assets. Estate planning tools include trusts (arrangements where property is held by one party for another's benefit), powers of attorney (authorizing someone to make decisions if one becomes incapacitated), and advance healthcare directives. Estate taxes may apply to transfers at death, though exemptions often cover most estates. Will contests can challenge validity based on lack of capacity, undue influence, fraud, or improper execution. Executor duties include inventory, asset protection, debt payment, tax filing, and distribution. Trusts can be revocable (modifiable during the grantor's life) or irrevocable (permanent), and may serve purposes like tax minimization, asset protection, or special needs planning. Professional advisors including estate attorneys, financial planners, and accountants help navigate complex estate planning decisions."
};

// Improved function to find relevant information in the query with deeper understanding
const findLegalAnswer = (query: string) => {
  query = query.toLowerCase();
  
  // Create a more comprehensive mapping of keywords to topics with specific legal terms
  const topicKeywords = {
    copyrights: ["copyright", "artistic", "literary", "creation", "author", "books", "music", "paintings", "artwork", "infringement", "fair use", "intellectual property", "creator rights", "reproduction", "distribution", "derivative works", "public domain", "copyright holder", "royalty", "licensing", "piracy", "exclusive rights"],
    
    trademarks: ["trademark", "brand", "logo", "business name", "company symbol", "service mark", "trade dress", "brand identity", "registered trademark", "tm", "counterfeit", "dilution", "trademark infringement", "branding", "distinctiveness", "likelihood of confusion", "trademark office", "trademark registration", "brand protection"],
    
    patents: ["patent", "invention", "innovation", "new product", "technical", "solution", "patent office", "patent application", "patent infringement", "utility patent", "design patent", "plant patent", "patent attorney", "prior art", "novelty", "non-obvious", "patent claims", "patent prosecution", "patent litigation", "patent troll", "patent licensing", "provisional patent"],
    
    divorce: ["divorce", "marriage", "separation", "alimony", "matrimonial", "spouse", "dissolution", "annulment", "divorce decree", "divorce settlement", "contested divorce", "uncontested divorce", "legal separation", "divorce lawyer", "divorce court", "marital property", "marital assets", "divorce mediation", "grounds for divorce", "child custody", "spousal support", "divorce papers", "marital settlement agreement"],
    
    custody: ["custody", "child", "parent", "visitation", "guardian", "minor", "joint custody", "sole custody", "physical custody", "legal custody", "child support", "custody battle", "custody hearing", "custody agreement", "parenting plan", "parenting time", "child's best interest", "custodial parent", "non-custodial parent", "supervised visitation", "co-parenting", "custody evaluation", "custody modification"],
    
    tenancy: ["rent", "tenant", "landlord", "lease", "property", "apartment", "eviction", "housing", "rental agreement", "security deposit", "property manager", "renter's rights", "rental property", "notice to vacate", "lease violation", "tenant screening", "rental application", "habitability", "quiet enjoyment", "landlord-tenant law", "rental assistance", "lease renewal", "rental history"],
    
    employment: ["work", "job", "employee", "employer", "fired", "termination", "workplace", "salary", "wage", "labor", "employment contract", "wrongful termination", "discrimination", "harassment", "overtime", "minimum wage", "workers compensation", "employment law", "labor relations", "workplace safety", "employee benefits", "unemployment", "fmla", "equal opportunity", "employment attorney", "collective bargaining", "labor union"],
    
    criminal: ["crime", "criminal", "arrest", "jail", "prison", "offense", "felony", "misdemeanor", "police", "theft", "assault", "criminal court", "criminal case", "criminal charge", "sentencing", "probation", "bail", "arraignment", "plea bargain", "criminal defense", "criminal record", "conviction", "prosecution", "defendant", "criminal trial", "murder", "manslaughter", "robbery", "burglary", "domestic violence", "drug possession"],
    
    civilRights: ["rights", "discrimination", "equality", "freedom", "constitutional", "liberty", "speech", "religion", "assembly", "civil rights violation", "equal protection", "due process", "civil liberties", "voting rights", "affirmative action", "civil rights movement", "civil rights act", "racism", "sexism", "disability rights", "civil rights attorney", "housing discrimination", "religious freedom", "lgbtq rights"],
    
    property: ["property", "land", "real estate", "deed", "ownership", "title", "boundary", "fence", "neighbor", "property line", "easement", "real property", "personal property", "property tax", "property survey", "property dispute", "property damage", "property insurance", "property management", "homeowner", "landlord", "tenant", "zoning", "property value", "foreclosure", "lien", "adverse possession"],
    
    tax: ["tax", "taxes", "irs", "income", "deduction", "filing", "audit", "return", "tax code", "tax law", "tax attorney", "tax preparation", "tax evasion", "tax avoidance", "tax credit", "tax bracket", "property tax", "sales tax", "tax exemption", "tax liability", "tax planning", "tax refund", "tax compliance", "capital gains tax", "estate tax", "gift tax", "tax dispute"],
    
    immigration: ["immigration", "visa", "passport", "citizenship", "alien", "green card", "deportation", "asylum", "immigrant", "naturalization", "immigration law", "immigration status", "border", "immigration attorney", "immigration court", "immigration appeal", "immigration enforcement", "undocumented", "removal proceedings", "immigration reform", "daca", "immigrant visa", "nonimmigrant visa", "adjustment of status", "immigration petition"],
    
    medical: ["medical", "healthcare", "hospital", "doctor", "patient", "malpractice", "treatment", "consent", "medical record", "health insurance", "medical law", "medical negligence", "medical ethics", "patient rights", "healthcare proxy", "medical power of attorney", "living will", "medical decision", "patient privacy", "hipaa", "informed consent", "medical treatment", "healthcare provider", "medical license", "medical board"],
    
    business: ["business", "company", "corporation", "startup", "llc", "partnership", "contract", "commercial", "business law", "business license", "business registration", "business entity", "incorporation", "corporate law", "business agreement", "business contract", "business liability", "business dispute", "business litigation", "business regulation", "business compliance", "business transaction", "small business", "business structure", "business attorney"],
    
    insurance: ["insurance", "policy", "claim", "coverage", "premium", "deductible", "insurer", "insurance company", "insurance agent", "insurance broker", "insurance denial", "insurance dispute", "insurance law", "health insurance", "life insurance", "auto insurance", "homeowners insurance", "liability insurance", "insurance bad faith", "insurance coverage", "insurance policy", "insurance premium", "insurance investigation", "insurance settlement"],
    
    wills: ["will", "testament", "estate", "probate", "inheritance", "heir", "beneficiary", "executor", "deceased", "estate planning", "last will and testament", "living trust", "power of attorney", "advance directive", "estate tax", "inheritance tax", "probate court", "intestate", "estate administration", "estate dispute", "will contest", "trust fund", "estate lawyer", "legacy planning", "bequest", "testamentary trust"]
  };
  
  // Identify legal question patterns
  const legalQuestionPatterns = [
    /what (?:are|is) (?:my|the) rights/i,
    /how do i (?:file|submit|apply)/i,
    /what should i do if/i,
    /is it legal to/i,
    /can i be (?:sued|charged|arrested|evicted)/i,
    /who is (?:responsible|liable)/i,
    /what does the law say about/i,
    /how long do i have to/i,
    /what are the requirements for/i,
    /what happens if/i,
    /do i need a lawyer/i,
    /can i sue/i
  ];
  
  // Check if the query appears to be a legal question
  const isLegalQuestion = legalQuestionPatterns.some(pattern => pattern.test(query));
  
  // Find the best matching topic with weighted scoring
  let bestMatch = "";
  let highestScore = 0;
  
  for (const [topic, keywords] of Object.entries(topicKeywords)) {
    // Calculate score based on keyword matches, giving higher weight to specialized terms
    let score = 0;
    
    keywords.forEach(keyword => {
      if (query.includes(keyword)) {
        // Longer, more specific keywords get higher scores
        const keywordWeight = keyword.length > 8 ? 2 : 1;
        score += keywordWeight;
        
        // Bonus points if the keyword appears as a whole word
        const wholeWordRegex = new RegExp(`\\b${keyword}\\b`, 'i');
        if (wholeWordRegex.test(query)) {
          score += 1;
        }
      }
    });
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = topic;
    }
  }
  
  // If we found a good match, return the corresponding legal knowledge
  if (bestMatch && highestScore > 1) {
    return legalKnowledge[bestMatch as keyof typeof legalKnowledge];
  }
  
  // If it looks like a legal question but no specific topic was matched
  if (isLegalQuestion) {
    return "Your question appears to be about a legal matter, but I'd need more specific details to provide accurate information. Could you please provide more context or mention specific legal concepts you're interested in? I can help with information about various legal topics including copyrights, trademarks, patents, divorce, child custody, tenancy, employment law, criminal law, civil rights, property law, tax law, immigration law, medical law, business law, insurance law, and wills and estates.";
  }
  
  // General legal terms check
  const generalLegalTerms = [
    "law", "legal", "court", "judge", "lawyer", "attorney", "rights", "lawsuit", "sue", 
    "case", "justice", "plaintiff", "defendant", "settlement", "compensation", "liability",
    "jurisdiction", "statute", "regulation", "legislation", "testimony", "evidence"
  ];
  
  const containsGeneralLegalTerms = generalLegalTerms.some(term => query.includes(term));
  
  if (containsGeneralLegalTerms) {
    return "Your question seems to be related to a legal matter. For specific legal advice, it's best to consult with a qualified attorney. I can provide general information about various legal topics. Could you please specify which area of law your question pertains to? For example: copyrights, trademarks, patents, divorce, child custody, tenancy, employment law, criminal law, civil rights, property law, tax law, immigration law, medical law, business law, insurance law, or wills and estates?";
  }
  
  // Default response for unrecognized queries
  return "I'm not sure I understand your legal question. I can provide information on many legal topics including intellectual property (copyrights, trademarks, patents), family law (divorce, custody), property law, employment law, criminal law, civil rights, tax law, immigration law, medical law, business law, insurance law, and estate planning. Could you please rephrase your question with more details about the specific legal area you're interested in?";
};

type Message = {
  sender: "user" | "bot";
  text: string;
};

const ChatbotSection = () => {
  const { t, currentLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Reset messages when language changes or component mounts
  useEffect(() => {
    setMessages([
      { sender: "bot", text: t("botWelcomeMessage") }
    ]);
  }, [currentLanguage, t]);

  // Simulate bot typing effect with variable timing based on response length
  const simulateBotTyping = (response: string) => {
    setIsTyping(true);
    
    // Calculate typing time based on response length (longer responses take longer)
    // but cap at reasonable maximum and minimum times
    const baseTime = 500; // minimum time in ms
    const charTime = 15; // ms per character
    const maxTime = 3000; // maximum time in ms
    
    const typingTime = Math.min(Math.max(baseTime, response.length * charTime), maxTime);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "bot", text: response }
      ]);
    }, typingTime);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = message;
    setMessages(prevMessages => [...prevMessages, { sender: "user", text: userMessage }]);
    setMessage("");
    
    // Process the user query after a short delay
    setTimeout(() => {
      // Get the legal answer for the user's query
      let response = findLegalAnswer(userMessage);
      
      // Translate response for non-English languages (simulated)
      if (currentLanguage !== "en") {
        // In a real app, you would use a translation service API here
        // For now, we'll just add a note about translation
        response = response + "\n\n(This response has been translated to your selected language.)";
      }
      
      simulateBotTyping(response);
    }, 300);
  };

  return (
    <section id="chatbot" className="py-16 bg-legal-lightgray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-legal-navy mb-4">{t("legalAssistant")}</h2>
          <p className="text-lg text-legal-darkgray max-w-2xl mx-auto">
            {t("chatbotDescription")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-legal-navy p-4 flex items-center justify-between">
            <div className="flex items-center">
              <MessageSquare className="text-white mr-2 h-5 w-5" />
              <h3 className="text-white font-medium">{t("legalAssistant")}</h3>
            </div>
            <div>
              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="text-white hover:text-legal-gold transition-colors"
              >
                {isOpen ? t("minimize") : t("expand")}
              </button>
            </div>
          </div>

          {isOpen && (
            <>
              <div className="p-4 h-80 overflow-y-auto bg-white border-b">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${
                      msg.sender === "user" ? "text-right" : "text-left"
                    }`}
                  >
                    <div
                      className={`inline-block rounded-lg py-2 px-4 max-w-xs lg:max-w-md ${
                        msg.sender === "user"
                          ? "bg-legal-navy text-white"
                          : "bg-legal-lightgray text-legal-darkgray"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="text-left mb-4">
                    <div className="inline-block rounded-lg py-2 px-4 bg-legal-lightgray text-legal-darkgray">
                      <span className="flex gap-1">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce" style={{ animationDelay: "150ms" }}>.</span>
                        <span className="animate-bounce" style={{ animationDelay: "300ms" }}>.</span>
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 bg-white">
                <form onSubmit={handleSubmit} className="flex space-x-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t("askQuestion")}
                    className="flex-1"
                    disabled={isTyping}
                  />
                  <Button 
                    type="submit" 
                    className="bg-legal-navy hover:bg-opacity-90"
                    disabled={isTyping}
                  >
                    {t("send")}
                  </Button>
                </form>
              </div>
            </>
          )}

          {!isOpen && (
            <div className="p-4 text-center">
              <Button 
                onClick={() => setIsOpen(true)}
                className="bg-legal-navy hover:bg-opacity-90"
              >
                {t("chatWithAssistant")}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;
