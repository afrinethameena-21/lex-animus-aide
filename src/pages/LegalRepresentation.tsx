
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/components/LanguageSelector";

const LegalRepresentation = () => {
  const { currentLanguage } = useTranslation();
  const [scrollProgress, setScrollProgress] = useState(0);

  // Track scroll position for reading progress indicator
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div 
          className="h-full bg-legal-navy" 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      <main className="flex-grow py-16 px-4 bg-legal-lightgray/30">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-legal-navy mb-6 text-center">Legal Representation</h1>
          <div className="mb-8 text-center">
            <div className="text-legal-darkgray text-lg italic">Professional advocacy for your legal matters</div>
          </div>
          
          <Card className="p-8 mb-12 shadow-lg">
            <h2 className="text-3xl font-bold text-legal-navy mb-4">Understanding Legal Representation</h2>
            <p className="text-legal-darkgray mb-4">
              Legal representation is a cornerstone of the justice system, providing individuals and organizations with skilled advocates who navigate complex legal frameworks on their behalf. When you secure legal representation, you gain a trained professional dedicated to protecting your rights and interests through legal processes.
            </p>
            <p className="text-legal-darkgray mb-4">
              The concept of legal representation has deep historical roots, evolving from ancient systems where individuals often represented themselves to today's specialized legal profession. Modern legal representation encompasses a wide range of services across various practice areas, from criminal defense to civil litigation, family law, corporate transactions, and regulatory compliance.
            </p>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Types of Legal Representatives</h3>
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Attorneys/Lawyers</h4>
              <p className="text-legal-darkgray mb-4">
                Attorneys are legal professionals who have completed law school and passed the bar examination in their jurisdiction. They provide comprehensive legal services including advice, document preparation, negotiation, and courtroom representation. Attorneys often specialize in specific areas of law to develop deeper expertise.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Paralegals</h4>
              <p className="text-legal-darkgray mb-4">
                Working under attorney supervision, paralegals perform substantive legal work including research, document preparation, and case management. While they cannot provide legal advice or represent clients in court, they are essential for efficient legal service delivery and often have specialized training and certification.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Legal Advocates</h4>
              <p className="text-legal-darkgray mb-4">
                In certain contexts, non-lawyer advocates may represent individuals in specialized tribunals or administrative proceedings. These advocates typically have training in specific areas such as immigration, disability rights, or tenant issues, providing accessible assistance for those who cannot afford traditional legal representation.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">The Legal Representation Process</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Initial Consultation</h4>
              <p className="text-legal-darkgray mb-4">
                The legal representation process typically begins with an initial consultation, where the potential client discusses their legal issues with an attorney. During this meeting, the attorney evaluates the case, explains potential legal strategies, discusses fees, and determines whether they can effectively represent the client. This consultation establishes the foundation of the attorney-client relationship and helps the client make informed decisions about proceeding.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Engagement and Retainer</h4>
              <p className="text-legal-darkgray mb-4">
                If both parties agree to proceed, they formalize the relationship through an engagement letter or retainer agreement. This document outlines the scope of representation, fee structure, billing practices, and client responsibilities. A retainer fee may be required upfront, particularly for ongoing representation, which is held in trust and applied toward future services.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Case Development</h4>
              <p className="text-legal-darkgray mb-4">
                Once engaged, legal representatives begin developing the case by gathering facts, collecting evidence, interviewing witnesses, researching applicable laws, and developing legal theories. This investigative phase is crucial for building a strong foundation for negotiations or litigation. The attorney works closely with the client during this phase to ensure all relevant information is considered.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Strategy Development and Implementation</h4>
              <p className="text-legal-darkgray mb-4">
                Based on case analysis, legal representatives develop strategic approaches tailored to the client's goals and circumstances. Strategies may include negotiation, alternative dispute resolution methods like mediation or arbitration, or litigation. The chosen approach evolves as the case progresses, with the legal representative continually evaluating options and advising the client on potential courses of action.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Resolution and Conclusion</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representation culminates in case resolution through settlement, court judgment, or administrative decision. Legal representatives facilitate settlement negotiations, prepare for hearings or trials, present evidence and arguments, and help clients understand the implications of potential outcomes. After resolution, representatives handle necessary documentation, ensure proper implementation of judgments or agreements, and advise on future compliance or actions.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Benefits of Professional Legal Representation</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Legal Expertise and Knowledge</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representatives bring specialized knowledge of relevant laws, regulations, precedents, and procedures. This expertise allows them to identify legal issues that non-lawyers might miss, apply appropriate legal principles, and anticipate potential challenges. Their training enables them to interpret complex legal language, navigate procedural requirements, and leverage legal research resources effectively.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Objective Analysis and Counsel</h4>
              <p className="text-legal-darkgray mb-4">
                While clients may be emotionally invested in their cases, legal representatives provide objective analysis and rational guidance. This professional distance enables them to realistically assess case strengths and weaknesses, advise on likely outcomes, and recommend pragmatic strategies. Their counsel helps clients make informed decisions rather than acting on emotion or misunderstandings about the legal system.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Procedural Navigation</h4>
              <p className="text-legal-darkgray mb-4">
                Legal systems involve complex procedures with strict deadlines, specific document requirements, and particular presentation formats. Legal representatives ensure compliance with these procedural rules, avoiding potentially fatal errors that could compromise a client's case. Their familiarity with court systems and administrative bodies streamlines the process and prevents unnecessary delays or complications.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Advocacy Skills</h4>
              <p className="text-legal-darkgray mb-4">
                Professional representatives possess developed advocacy skills honed through education and experience. These include persuasive writing, compelling oral argument, effective negotiation, strategic questioning, and evidence presentation. Such skills significantly impact case outcomes, particularly in adversarial proceedings where opposing parties are also professionally represented.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Access to Resources</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representatives have access to valuable resources including legal research databases, expert witnesses, investigators, and professional networks. These resources enhance case development and provide advantages not typically available to self-represented individuals. Additionally, established legal practices have support staff and systems that increase efficiency and thoroughness in case handling.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Selecting the Right Legal Representative</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Specialization and Experience</h4>
              <p className="text-legal-darkgray mb-4">
                The most important factor in selecting legal representation is finding someone with relevant specialization and experience. Law encompasses numerous distinct practice areas, each with its own principles and procedures. A representative with specific experience in your type of case will likely provide more effective representation than a generalist or someone specializing in an unrelated area. Consider their case history, outcomes, and familiarity with particular courts or administrative bodies relevant to your matter.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Communication Style and Accessibility</h4>
              <p className="text-legal-darkgray mb-4">
                Effective communication is essential for successful legal representation. During initial consultations, assess whether the representative explains complex legal concepts clearly, listens attentively to your concerns, and responds thoughtfully to questions. Consider their accessibility—how quickly they respond to messages, their willingness to provide updates, and their systems for keeping clients informed about case developments.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Fee Structure and Transparency</h4>
              <p className="text-legal-darkgray mb-4">
                Understanding the financial aspects of legal representation is crucial for avoiding surprises and budgeting appropriately. Different fee structures include hourly rates, flat fees, contingency fees (percentage of recovery), and hybrid arrangements. Ensure the representative provides a clear, written explanation of their fee structure, billing practices, additional costs (filing fees, expert witnesses, etc.), and payment expectations. Transparency about finances establishes trust and prevents future disputes.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Professional Reputation and Ethics</h4>
              <p className="text-legal-darkgray mb-4">
                Research potential representatives' professional reputations through online reviews, bar association records, and personal references when possible. Check their disciplinary history with the relevant regulatory body and verify their good standing. Ethical representatives maintain client confidentiality, avoid conflicts of interest, communicate honestly about case prospects, and adhere to professional responsibility standards. These qualities are as important as technical legal ability for effective representation.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Personal Compatibility</h4>
              <p className="text-legal-darkgray mb-4">
                The attorney-client relationship often involves sharing sensitive information and making important decisions together, sometimes during stressful circumstances. Personal compatibility—feeling comfortable with and trusting your representative—facilitates this collaboration. While technical competence should be prioritized, consider whether you feel respected, understood, and supported by the potential representative, as these factors influence the working relationship's effectiveness.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Ethical Dimensions of Legal Representation</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Fiduciary Duty</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representatives owe fiduciary duties to their clients, meaning they must act with the highest degree of loyalty and care. This includes prioritizing client interests above their own, maintaining confidentiality, avoiding conflicts of interest, providing competent representation, and managing client property or funds with rigorous honesty. These duties form the foundation of the attorney-client relationship and are enforced through professional regulations.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Zealous Advocacy vs. Officer of the Court</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representatives balance dual roles as zealous advocates for their clients and officers of the court with duties to the justice system. This sometimes creates tension between vigorously pursuing client goals and maintaining professional integrity. Ethical representatives understand that their obligation to the client never justifies dishonesty, fraud, or obstruction of justice. They advocate within ethical boundaries, distinguishing between aggressive representation and improper conduct.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Access to Justice Considerations</h4>
              <p className="text-legal-darkgray mb-4">
                The legal profession increasingly recognizes ethical obligations regarding access to justice. Many representatives provide pro bono (free) services to disadvantaged individuals, participate in reduced-fee programs, or support legal aid organizations. Some jurisdictions require or strongly encourage pro bono work as part of professional responsibility. Beyond individual efforts, the profession addresses systemic barriers through advocacy for court simplification, plain language initiatives, and technology solutions that make legal help more accessible.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Challenges and Limitations of Legal Representation</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Cost Barriers</h4>
              <p className="text-legal-darkgray mb-4">
                The high cost of traditional legal representation creates a significant access barrier for many individuals and small businesses. Hourly rates for attorneys often exceed what middle and lower-income people can afford, creating a "justice gap" where those with moderate means have too much income for free legal aid but insufficient resources for private representation. This reality has spurred innovations like limited-scope representation, legal coaching, and technology-assisted services that provide more affordable options.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">Power Imbalances</h4>
              <p className="text-legal-darkgray mb-4">
                Legal proceedings often involve parties with disparate resources—individuals against corporations, tenants against landlords, or citizens against government agencies. Even with representation, these power imbalances can influence case outcomes when one party can afford more extensive services or sustain longer proceedings. Ethical representatives work to mitigate such imbalances through creative advocacy, efficient strategies, and awareness of resources available to disadvantaged clients.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-bold text-legal-darkgray mb-2">System Constraints</h4>
              <p className="text-legal-darkgray mb-4">
                Legal representatives work within systems that have inherent constraints including court backlogs, procedural complexities, and resource limitations. These factors can delay resolution, increase costs, and sometimes impede justice despite quality representation. Good representatives manage client expectations regarding these realities while advocating for system improvements through professional organizations and policy engagement.
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-legal-navy mt-8 mb-4">Conclusion</h3>
            <p className="text-legal-darkgray mb-4">
              Legal representation remains a vital component of functional justice systems, providing essential expertise and advocacy for navigating complex legal frameworks. While challenges persist in ensuring universal access to quality representation, the legal profession continues evolving to address these issues through technological innovation, service delivery reforms, and ethical commitments.
            </p>
            <p className="text-legal-darkgray mb-4">
              For individuals facing legal challenges, understanding the nature, benefits, and limitations of legal representation empowers better decision-making about when and how to engage professional assistance. Whether through traditional full-service representation or emerging alternative models, informed clients can more effectively partner with legal professionals to protect their rights and pursue their objectives within the legal system.
            </p>
            <p className="text-legal-darkgray">
              The future of legal representation likely involves greater diversity in service models, increased technological integration, and continued emphasis on ethical practice and access to justice—all while maintaining the core function of providing skilled advocacy and counsel to those navigating legal matters.
            </p>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalRepresentation;
