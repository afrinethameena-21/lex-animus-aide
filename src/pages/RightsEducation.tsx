
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useTranslation } from "@/components/LanguageSelector";

const RightsEducation = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold text-legal-navy mb-6 text-center">Rights Education in India</h1>
          <div className="mb-8 text-center">
            <div className="text-legal-darkgray text-lg italic">Understanding your fundamental rights and legal protections</div>
          </div>
          
          <Card className="p-8 mb-12 shadow-lg">
            <Tabs defaultValue="fundamental">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="fundamental">Fundamental Rights</TabsTrigger>
                <TabsTrigger value="consumer">Consumer Rights</TabsTrigger>
                <TabsTrigger value="women">Women's Rights</TabsTrigger>
                <TabsTrigger value="labor">Labor Rights</TabsTrigger>
              </TabsList>
              
              <TabsContent value="fundamental" className="space-y-8">
                <h2 className="text-3xl font-bold text-legal-navy mb-6">Fundamental Rights in India</h2>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Introduction to Fundamental Rights</h3>
                  <p className="text-legal-darkgray mb-4">
                    Fundamental Rights in India are enshrined in Part III (Articles 12-35) of the Constitution, forming the cornerstone of Indian democracy. These rights are essential for the all-round development of individuals and are enforceable through the Supreme Court and High Courts. Unlike ordinary legal rights, Fundamental Rights are constitutional in nature and cannot be easily altered by the legislature.
                  </p>
                  <p className="text-legal-darkgray mb-4">
                    The architects of the Indian Constitution, inspired by the American Bill of Rights and influenced by the Universal Declaration of Human Rights, crafted these provisions to guarantee civil liberties and protect individuals against state tyranny. These rights are not absolute but are subject to reasonable restrictions to maintain a balance between individual freedom and social interests.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Right to Equality (Articles 14-18)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 14: Equality Before Law</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 14 guarantees equality before law and equal protection of laws to all persons within the territory of India. It prohibits discrimination by the state on grounds of religion, race, caste, sex, or place of birth. The concept of equality enshrined here doesn't mean absolute equality among all, but rather prohibits arbitrary discrimination. The principle allows for reasonable classification for legislative purposes, provided it has a rational basis related to the object of the legislation.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 15: Prohibition of Discrimination</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 15 specifically prohibits discrimination on grounds of religion, race, caste, sex, or place of birth. It prevents citizens from being denied access to shops, public restaurants, hotels, places of public entertainment, or the use of wells, tanks, bathing ghats, roads, and places of public resort maintained wholly or partly by state funds. However, it permits special provisions for women, children, and socially and educationally backward classes, including Scheduled Castes and Scheduled Tribes.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 16: Equality of Opportunity</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 16 guarantees equality of opportunity in matters of public employment. It prohibits discrimination on grounds of religion, race, caste, sex, descent, place of birth, or residence. However, it allows the state to make provisions for the reservation of posts in favor of backward classes, Scheduled Castes, and Scheduled Tribes if they are inadequately represented in public services. It also permits reservation for residents in matters of public employment or appointment in any state or union territory.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 17: Abolition of Untouchability</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 17 abolishes the practice of "untouchability" in any form and makes its practice in any form punishable under law. This article aims to remove historical social discrimination against certain castes and promote social equality. The enforcement of this article led to the enactment of the Untouchability (Offences) Act, 1955, later renamed as the Protection of Civil Rights Act, and subsequently the Scheduled Castes and Scheduled Tribes (Prevention of Atrocities) Act, 1989.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 18: Abolition of Titles</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 18 prohibits the state from conferring any title (except military or academic distinction) on anybody, whether a citizen or a non-citizen. Citizens of India are also prohibited from accepting titles from foreign states without the consent of the President. This provision was enacted to prevent the development of an aristocracy or privileged class in free India. However, it doesn't prevent the state from conferring military and academic distinctions.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Right to Freedom (Articles 19-22)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 19: Six Fundamental Freedoms</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 19 guarantees six fundamental freedoms to all citizens: freedom of speech and expression, freedom to assemble peacefully without arms, freedom to form associations or unions, freedom to move freely throughout the territory of India, freedom to reside and settle in any part of India, and freedom to practice any profession or carry on any occupation, trade, or business. Each of these freedoms is subject to reasonable restrictions that may be imposed by the state in the interests of sovereignty, integrity, security, friendly relations with foreign states, public order, decency, morality, contempt of court, defamation, incitement to an offense, or the general public.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 20: Protection in Respect of Conviction for Offenses</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 20 provides protection against arbitrary and excessive punishment to any person who commits an offense. It prohibits ex-post-facto laws (retrospective criminalization), double jeopardy (being tried for the same offense more than once), and self-incrimination (being compelled to be a witness against oneself). These protections are available to both citizens and non-citizens, and apply to corporate entities as well as individuals.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 21: Protection of Life and Personal Liberty</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 21 states that no person shall be deprived of his life or personal liberty except according to procedure established by law. This article has been interpreted expansively by the Supreme Court to include various rights necessary for a dignified human existence, including the right to live with human dignity, right to livelihood, right to health, right to pollution-free environment, right to privacy, and many more. Through judicial activism, this article has become the source of many substantive rights and procedural safeguards.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 21A: Right to Education</h4>
                    <p className="text-legal-darkgray mb-4">
                      Added by the 86th Constitutional Amendment Act in 2002, Article 21A makes education a fundamental right for children between the ages of 6 and 14. It obligates the state to provide free and compulsory education to all children in this age group. This amendment led to the enactment of the Right of Children to Free and Compulsory Education Act, 2009, which provides the statutory framework for the implementation of this right.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 22: Protection Against Arrest and Detention</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 22 provides specific safeguards against arbitrary arrest and detention. It grants every arrested person the right to be informed of the grounds of arrest, the right to consult and be defended by a lawyer of their choice, and the requirement to be produced before the nearest magistrate within 24 hours of arrest. However, this article also permits preventive detention under certain circumstances, subject to various procedural safeguards and time limitations.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Right Against Exploitation (Articles 23-24)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 23: Prohibition of Traffic in Human Beings and Forced Labor</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 23 prohibits trafficking in human beings, beggar (forced labor), and other similar forms of forced labor. Any contravention of this provision is considered an offense punishable under law. However, the state can impose compulsory service for public purposes, provided that in imposing such service, it shall not discriminate on grounds of religion, race, caste, or class. This article aims to prevent exploitation of vulnerable sections of society.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 24: Prohibition of Employment of Children</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 24 prohibits the employment of children below 14 years of age in factories, mines, or any other hazardous occupation. This provision is aimed at protecting children from economic exploitation and from performing work that is likely to be hazardous, interfere with their education, or be harmful to their health or physical, mental, spiritual, moral, or social development. This constitutional mandate is further strengthened by various legislations like the Child Labor (Prohibition and Regulation) Act, 1986.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Right to Freedom of Religion (Articles 25-28)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 25: Freedom of Conscience and Free Profession, Practice and Propagation of Religion</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 25 guarantees to all persons the freedom of conscience and the right to freely profess, practice, and propagate religion. This right is subject to public order, morality, health, and other provisions of the Constitution. It allows the state to regulate or restrict any economic, financial, political, or other secular activity associated with religious practice, and to provide for social welfare and reform. This article ensures that religion remains a matter of personal faith while allowing the state to intervene to protect the greater social good.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 26: Freedom to Manage Religious Affairs</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 26 grants every religious denomination or any section thereof the right to establish and maintain institutions for religious and charitable purposes, to manage its own affairs in matters of religion, to own and acquire movable and immovable property, and to administer such property in accordance with law. This right is also subject to public order, morality, and health. It allows religious communities to function autonomously in matters directly related to religious practices.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 27: Freedom from Taxes for Promotion of a Religion</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 27 prohibits the state from compelling any person to pay taxes, the proceeds of which are specifically appropriated for the payment of expenses for the promotion or maintenance of any particular religion or religious denomination. This provision ensures the secular nature of the state by preventing the use of public funds for the promotion of any specific religion. It reinforces the separation between religious and state affairs.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 28: Freedom from Religious Instruction in Certain Educational Institutions</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 28 prohibits religious instruction in educational institutions wholly maintained by state funds. However, this provision does not apply to educational institutions administered by the state but established under any endowment or trust requiring religious instruction. It also protects individuals from being required to participate in religious instruction or to attend religious worship in institutions recognized by the state or receiving aid from the state, if they do not consent to such participation.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Cultural and Educational Rights (Articles 29-30)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 29: Protection of Interests of Minorities</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 29 protects the interests of minorities by giving them the right to conserve their language, script, or culture. It prohibits discrimination against any citizen for admission into any educational institution maintained by the state or receiving state aid, on grounds only of religion, race, caste, language, or any of them. This article ensures cultural and linguistic diversity in India by protecting minority cultures from being overwhelmed by the majority.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 30: Right of Minorities to Establish and Administer Educational Institutions</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 30 grants all religious and linguistic minorities the right to establish and administer educational institutions of their choice. In granting aid to educational institutions, the state cannot discriminate against any educational institution on the ground that it is under the management of a minority. This provision aims to ensure that minorities can preserve and develop their cultures through education, while also receiving equitable treatment from the state in matters of educational funding.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Right to Constitutional Remedies (Article 32)</h3>
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Article 32: Remedies for Enforcement of Rights</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 32 guarantees the right to move the Supreme Court for the enforcement of fundamental rights. The Supreme Court has the power to issue directions, orders, or writs, including writs of habeas corpus, mandamus, prohibition, quo warranto, and certiorari, for the enforcement of these rights. Dr. B.R. Ambedkar described this article as "the heart and soul of the Constitution" because it provides a guaranteed remedy for the enforcement of fundamental rights. Without this right, the fundamental rights would be mere declarations without any binding force.
                    </p>
                    <p className="text-legal-darkgray mb-4">
                      The various writs that can be issued under this article include: Habeas Corpus (to produce a detained person before the court), Mandamus (to order a public authority to perform its duty), Prohibition (to prevent a court from proceeding with a case beyond its jurisdiction), Quo Warranto (to question a person's right to hold a public office), and Certiorari (to quash an order passed by a court, tribunal, or quasi-judicial authority).
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Limitations on Fundamental Rights</h3>
                  <p className="text-legal-darkgray mb-4">
                    While fundamental rights are essential for individual liberty and dignity, they are not absolute in nature. The Constitution itself provides for certain limitations:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray mb-4">
                    <li className="mb-2">Reasonable restrictions can be imposed on these rights for the larger interests of society, state security, public order, morality, etc.</li>
                    <li className="mb-2">During a national emergency declared under Article 352, certain fundamental rights (particularly under Article 19) can be suspended.</li>
                    <li className="mb-2">Article 31A, 31B, and 31C provide immunity to certain laws from being challenged as violative of fundamental rights.</li>
                    <li className="mb-2">The Parliament can amend the fundamental rights through a constitutional amendment, subject to the basic structure doctrine established in the Kesavananda Bharati case (1973).</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Conclusion</h3>
                  <p className="text-legal-darkgray mb-4">
                    The fundamental rights enshrined in the Indian Constitution form the bedrock of Indian democracy and are crucial for the protection of individual liberty and dignity. They serve as powerful checks against state tyranny and majority oppression. While they are not absolute and can be subject to reasonable restrictions, any limitation must pass the test of constitutionality and reasonableness.
                  </p>
                  <p className="text-legal-darkgray">
                    Over the years, the Supreme Court of India has played a pivotal role in interpreting these rights expansively, adapting them to changing social realities, and ensuring their effective enforcement. Through judicial activism and public interest litigation, the court has transformed these rights from mere constitutional guarantees to living realities that touch the lives of ordinary citizens. The dynamic interpretation of fundamental rights continues to shape the contours of state authority and individual liberty in India's evolving democratic landscape.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="consumer">
                <h2 className="text-3xl font-bold text-legal-navy mb-6">Consumer Rights in India</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">The Consumer Protection Act, 2019</h3>
                  <p className="text-legal-darkgray mb-4">
                    The Consumer Protection Act, 2019 replaced the older 1986 Act to provide enhanced protection of consumer interests and timely settlement of consumer disputes. This legislation significantly strengthens the legal framework for consumer protection in India, addressing new challenges in the digital age, including e-commerce transactions and misleading advertisements.
                  </p>
                  <p className="text-legal-darkgray mb-4">
                    The Act establishes a Central Consumer Protection Authority (CCPA) with wide powers to protect consumer rights, including the authority to investigate, recall products, and impose penalties for misleading advertisements and adulterated products. It also simplifies the consumer dispute redressal process through Consumer Disputes Redressal Commissions at district, state, and national levels.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Key Consumer Rights</h3>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Safety</h4>
                    <p className="text-legal-darkgray mb-4">
                      Consumers have the right to be protected against products, production processes, and services that are hazardous to health or life. This includes protections against the marketing of goods and services that are dangerous or harmful, and requires that products meet mandatory safety standards. Manufacturers, distributors, and service providers are legally obligated to ensure their offerings do not pose undue risks to consumers.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Information</h4>
                    <p className="text-legal-darkgray mb-4">
                      This right guarantees consumers access to accurate information about the quality, quantity, potency, purity, standard, and price of goods or services to protect them against unfair trade practices. It includes requirements for proper labeling, price transparency, disclosure of potential risks, and honest advertising. The right to information enables consumers to make informed choices and prevents deceptive practices.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Choose</h4>
                    <p className="text-legal-darkgray mb-4">
                      Consumers have the right to access a variety of goods and services at competitive prices, ensuring their freedom to select from a range of products according to their preferences and budget. This right protects against monopolistic practices, ensures fair competition in the marketplace, and prohibits restrictive trade practices that limit consumer options.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to be Heard</h4>
                    <p className="text-legal-darkgray mb-4">
                      This right ensures that consumer interests receive full and sympathetic consideration in the formulation and administration of government policy. It includes the right to represent concerns to appropriate forums, participate in regulatory proceedings affecting consumer interests, and have complaints addressed through established redressal mechanisms.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Seek Redressal</h4>
                    <p className="text-legal-darkgray mb-4">
                      When consumers suffer loss or damage due to unfair trade practices or defective goods or services, they have the right to seek redressal against such practices. This includes compensation for actual losses, replacement or repair of defective products, and removal of deficiencies in services. The Consumer Protection Act establishes a three-tier quasi-judicial mechanism for addressing consumer grievances.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Consumer Education</h4>
                    <p className="text-legal-darkgray mb-4">
                      Consumers have the right to acquire knowledge and skills to be informed consumers throughout their lives. This includes access to programs and materials that develop critical consumer awareness about rights, responsibilities, and available remedies. Government agencies, educational institutions, and consumer organizations share responsibility for promoting consumer literacy.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Consumer Dispute Resolution Mechanism</h3>
                  <p className="text-legal-darkgray mb-4">
                    The Consumer Protection Act establishes a three-tier quasi-judicial mechanism for resolving consumer disputes:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray mb-4">
                    <li className="mb-2"><b>District Commission:</b> Handles complaints where the value of goods or services and compensation claimed is up to ₹1 crore.</li>
                    <li className="mb-2"><b>State Commission:</b> Addresses complaints where the value is between ₹1 crore and ₹10 crores, and appeals against District Commission orders.</li>
                    <li className="mb-2"><b>National Commission:</b> Deals with complaints where the value exceeds ₹10 crores, and appeals against State Commission orders.</li>
                  </ul>
                  <p className="text-legal-darkgray">
                    These commissions have the power to order removal of defects or deficiencies in services, replacement of defective goods, refund of price, award compensation, discontinuation of unfair trade practices, and cessation of hazardous goods production or services.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="women">
                <h2 className="text-3xl font-bold text-legal-navy mb-6">Women's Rights in India</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Constitutional and Legal Framework</h3>
                  <p className="text-legal-darkgray mb-4">
                    The Constitution of India guarantees equal rights and opportunities to women through several provisions:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray mb-4">
                    <li className="mb-2">Article 14: Guarantees equality before law and equal protection of laws.</li>
                    <li className="mb-2">Article 15(1): Prohibits discrimination on grounds of sex.</li>
                    <li className="mb-2">Article 15(3): Permits special provisions for women and children.</li>
                    <li className="mb-2">Article 16: Ensures equality of opportunity in public employment.</li>
                    <li className="mb-2">Article 39: Directs the state to secure equal pay for equal work for both men and women.</li>
                    <li className="mb-2">Article 42: Directs the state to make provisions for securing just and humane conditions of work and for maternity relief.</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Key Legislation Protecting Women's Rights</h3>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">The Protection of Women from Domestic Violence Act, 2005</h4>
                    <p className="text-legal-darkgray mb-4">
                      This landmark legislation provides comprehensive protection against various forms of domestic violence, including physical, sexual, verbal, emotional, and economic abuse. It offers civil remedies such as protection orders, residence orders, monetary relief, custody orders, and compensation orders. The Act recognizes women's right to reside in the shared household regardless of ownership and appoints protection officers to assist victims.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Act protects women from sexual harassment at workplaces, including both organized and unorganized sectors. It mandates the establishment of Internal Complaints Committees in workplaces with 10 or more employees and Local Complaints Committees at district levels for organizations with fewer than 10 employees. The law defines sexual harassment broadly and provides for preventive measures, complaint procedures, and appropriate penalties.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">The Criminal Law (Amendment) Act, 2013</h4>
                    <p className="text-legal-darkgray mb-4">
                      Following the 2012 Delhi gang rape case, this amendment strengthened laws against sexual offenses by introducing new offenses such as acid attacks, sexual harassment, voyeurism, and stalking. It expanded the definition of rape beyond penetration, eliminated the "character evidence" provision, and established minimum sentences for certain sexual offenses.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">The Prohibition of Child Marriage Act, 2006</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Act prohibits the solemnization of child marriages and declares them voidable at the option of the contracting party who was a child at the time of marriage. It provides for the appointment of Child Marriage Prohibition Officers and empowers the state to make rules for effective administration of the legislation.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">The Dowry Prohibition Act, 1961</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Act prohibits the giving, taking, or demanding of dowry. Subsequent amendments strengthened the law by imposing stricter penalties, establishing a presumption of dowry death in certain circumstances, and making dowry harassment a cognizable and non-bailable offense under Sections 304B and 498A of the Indian Penal Code.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Maternity Benefit (Amendment) Act, 2017</h4>
                    <p className="text-legal-darkgray mb-4">
                      This amendment increased maternity leave from 12 to 26 weeks for the first two children and introduced provisions for commissioning and adopting mothers. It also mandates creche facilities in establishments with 50 or more employees and allows work-from-home options for new mothers.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Continuing Challenges</h3>
                  <p className="text-legal-darkgray mb-4">
                    Despite robust legal frameworks, women in India continue to face challenges in fully realizing their rights due to:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray mb-4">
                    <li className="mb-2">Implementation gaps in existing legislation</li>
                    <li className="mb-2">Deep-rooted patriarchal attitudes and social norms</li>
                    <li className="mb-2">Limited awareness about legal rights and remedies</li>
                    <li className="mb-2">Inadequate institutional support mechanisms</li>
                    <li className="mb-2">Barriers to accessing justice, particularly for marginalized women</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Recent Developments</h3>
                  <p className="text-legal-darkgray mb-4">
                    Recent years have witnessed significant judicial pronouncements enhancing women's rights:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray">
                    <li className="mb-2">Recognition of marital rape as grounds for divorce, though not yet criminalized</li>
                    <li className="mb-2">Overturning of the adultery law that treated women as property of their husbands</li>
                    <li className="mb-2">Decriminalization of homosexuality, benefiting lesbian and bisexual women</li>
                    <li className="mb-2">Recognition of women's equal rights as guardians of minor children</li>
                    <li className="mb-2">Affirmation of women's right to enter religious places previously restricted to them</li>
                  </ul>
                </div>
              </TabsContent>
              
              <TabsContent value="labor">
                <h2 className="text-3xl font-bold text-legal-navy mb-6">Labor Rights in India</h2>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Constitutional Framework</h3>
                  <p className="text-legal-darkgray mb-4">
                    The Constitution of India provides the foundation for labor rights through several provisions:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray mb-4">
                    <li className="mb-2">Article 14: Guarantees equality before law.</li>
                    <li className="mb-2">Article 19(1)(c): Provides freedom to form associations or unions.</li>
                    <li className="mb-2">Article 23: Prohibits forced labor and human trafficking.</li>
                    <li className="mb-2">Article 24: Prohibits child labor in hazardous employments.</li>
                    <li className="mb-2">Article 43: Directs the state to secure living wages and decent working conditions.</li>
                    <li className="mb-2">Article 43A: Directs the state to ensure worker participation in management.</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Labor Code Reforms</h3>
                  <p className="text-legal-darkgray mb-4">
                    In 2019-2020, India consolidated 29 existing labor laws into four comprehensive Labor Codes:
                  </p>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Code on Wages, 2019</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Code consolidates and simplifies laws relating to wages and bonus, replacing the Payment of Wages Act, Minimum Wages Act, Payment of Bonus Act, and Equal Remuneration Act. It universalizes minimum wage provisions for all workers regardless of sector or wage ceiling, introduces a floor wage determined by the central government, and mandates timely payment of wages.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Industrial Relations Code, 2020</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Code replaces the Industrial Disputes Act, Trade Unions Act, and Industrial Employment (Standing Orders) Act. It redefines the framework for industrial disputes, trade unions, standing orders, layoffs, retrenchment, and closure. Notably, it raises the threshold for requiring government permission for layoffs from establishments with 100 workers to 300 workers, while introducing a reskilling fund for retrenched workers.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Occupational Safety, Health and Working Conditions Code, 2020</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Code amalgamates 13 laws including the Factories Act, Mines Act, Contract Labour Act, and several sector-specific labor laws. It establishes a unified framework for occupational safety standards, health and working conditions, and welfare provisions. The Code includes provisions for annual health check-ups, workplace safety standards, and mandatory welfare facilities based on establishment size.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Code on Social Security, 2020</h4>
                    <p className="text-legal-darkgray mb-4">
                      This Code consolidates nine laws related to social security, including the Employees' Provident Funds Act, Employees' State Insurance Act, Maternity Benefit Act, and Payment of Gratuity Act. It extends social security coverage to previously excluded categories such as gig workers, platform workers, and the unorganized sector. The Code creates a national social security board and allows for setting up separate schemes for different categories of workers.
                    </p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Key Labor Rights</h3>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Fair Wages</h4>
                    <p className="text-legal-darkgray mb-4">
                      Workers have the right to receive wages that are not below the minimum wage established by the government. The minimum wage varies by region, skill level, and industry. The Code on Wages, 2019 universalizes the right to minimum wages for all workers and introduces a floor wage determined by the central government. It also mandates timely payment of wages and prohibits unauthorized deductions.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Form and Join Trade Unions</h4>
                    <p className="text-legal-darkgray mb-4">
                      Article 19(1)(c) of the Constitution guarantees the right to form associations or unions. The Industrial Relations Code recognizes this right and provides for the registration of trade unions. It introduces the concept of a "negotiating union" or "negotiating council" for negotiating with employers, requiring a trade union to have support of at least 51% of workers to be the sole negotiating union.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Safe Working Conditions</h4>
                    <p className="text-legal-darkgray mb-4">
                      The Occupational Safety, Health and Working Conditions Code mandates that employers provide safe workplaces free from health hazards. Employers must provide protective equipment, regular safety training, and take preventive measures against occupational hazards. The Code also requires the appointment of safety officers in certain establishments and periodic inspections to ensure compliance.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Social Security</h4>
                    <p className="text-legal-darkgray mb-4">
                      The Code on Social Security establishes a comprehensive framework for social security benefits including provident fund, employees' state insurance (health insurance), gratuity, maternity benefits, and compensation in case of work-related injuries or death. The code extends social security coverage to previously excluded workers in the unorganized sector, gig economy, and platform work.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right against Discrimination</h4>
                    <p className="text-legal-darkgray mb-4">
                      Workers have the right to be free from discrimination based on religion, race, caste, sex, or place of birth in matters of employment. The Code on Wages prohibits discrimination in wages based on gender and mandates equal pay for equal work. Additionally, the Sexual Harassment of Women at Workplace Act, 2013 protects women workers from sexual harassment.
                    </p>
                  </div>
                  
                  <div className="pl-4 border-l-4 border-legal-navy mb-4">
                    <h4 className="text-xl font-bold text-legal-darkgray mb-2">Right to Redressal of Grievances</h4>
                    <p className="text-legal-darkgray mb-4">
                      Workers have the right to access grievance redressal mechanisms for workplace disputes. The Industrial Relations Code establishes a three-tier dispute resolution mechanism: Works Committee at the establishment level, Conciliation Officers at the intermediate level, and Industrial Tribunals for adjudication. It also introduces a requirement for establishments with 20 or more workers to establish a grievance redressal committee.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-legal-navy mb-4">Challenges in Labor Rights Implementation</h3>
                  <p className="text-legal-darkgray mb-4">
                    Despite comprehensive labor legislation, several challenges persist in the implementation of labor rights in India:
                  </p>
                  <ul className="list-disc pl-6 text-legal-darkgray">
                    <li className="mb-2">Large informal sector with limited legal protections and enforcement</li>
                    <li className="mb-2">Inadequate inspection mechanisms and regulatory capacity</li>
                    <li className="mb-2">Low awareness among workers about their legal rights</li>
                    <li className="mb-2">Complex regulatory framework despite recent consolidation efforts</li>
                    <li className="mb-2">Challenges in extending social security to informal and gig workers</li>
                    <li className="mb-2">Limited resources for labor courts leading to case backlogs</li>
                    <li className="mb-2">Balancing worker protection with economic growth and investment attraction</li>
                  </ul>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RightsEducation;
