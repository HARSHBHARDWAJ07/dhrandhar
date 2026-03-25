/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'motion/react';
import { Hero } from './components/sections/Hero';
import { CharacterDossier } from './components/sections/CharacterDossier';
import { PipelineInfo } from './components/sections/PipelineInfo';
import { TubelightNavBar } from './components/layout/tubelight-navbar';
import ajitMovie from './assets/ajit-movie.jpeg';
import ajitReal from './assets/ajit-real.jpeg';
import jaswantMovie from './assets/jaswant-movie.png';
import jaswantReal from './assets/jaswant-real.jpeg';
import spMovie from './assets/SP-movie.jpeg';
import spReal from './assets/sp-real.png';
import jameelMovie from './assets/jamali-movie.jpeg';
import jameelReal from './assets/jamali-real.jpeg';
import omanMovie from './assets/oman-movie.png';
import omanReal from './assets/oman-real.png';
import dadoodMovie from './assets/dadood-movie.jpeg';
import dadoodReal from './assets/dadood-real.jpeg';
import rehemanMovie from './assets/reheman-movie.jpeg';
import rehemanReal from './assets/reheman-real.png';
import iqbalMovie from './assets/iqbal-movie.jpeg';
import iqbalReal from './assets/iqbal-real.jpeg';
import uzairMovie from './assets/uzair-movie.jpeg';
import uzairReal from './assets/uzair-real.jpeg';
import atiqMovie from './assets/atiq-movie.png';
import atiqReal from './assets/atiq-real.png';
import khananiMovie from './assets/khanani-movie.png';
import khananiReal from './assets/khanani-real.jpeg';
import { 
  Shield, 
  User, 
  Zap, 
  Activity, 
  Database, 
  Lock, 
  Globe, 
  Search,
  Building2,
  Siren,
  UserCheck,
  BookOpen,
  Skull,
  Sword,
  Radio,
  Users,
  DollarSign,
  BadgeCheck,
  ShieldCheck
} from 'lucide-react';

const characters = [
  {
    id: "ajay-sanyal",
    name: "Ajay Sanyal",
    realName: "Ajit Doval",
    playedBy: "R. Madhavan",
    focus: "National Security Advisor & Spymaster",
    narrative: `Played by R. Madhavan, Ajay Sanyal is modeled on Ajit Doval, India's legendary National Security Advisor since 2014 and former Intelligence Bureau chief. A 1968-batch IPS officer, Doval is one of the country's most decorated spymasters, with a career forged in the shadows of counter-insurgency across Pakistan, Mizoram (during the Mizo National Front unrest), and Punjab's Khalistani militancy. He operated deep undercover for years, reportedly living in Pakistan to penetrate terror networks and gather actionable intelligence on cross-border threats.

One of his most audacious missions came during Operation Black Thunder II in 1988 (frequently referenced in intelligence lore alongside the 1984 Golden Temple events). Disguised as a Pakistani ISI operative and posing as a rickshaw puller, Doval infiltrated the Golden Temple complex in Amritsar, mapped militant positions and strength in real time, and fed critical updates to National Security Guard commandos. His intel enabled a surgical flush-out with minimal civilian casualties, earning him the Kirti Chakra - India's second-highest peacetime gallantry award. He was also instrumental in Northeast peace initiatives, including efforts that helped resolve aspects of the Mizo insurgency.

Doval's hands-on expertise extended to crisis management: he was directly involved in the successful termination or negotiation of all 15 Indian Airlines hijackings between 1971 and 1999. His most high-profile role was as a key negotiator in the 1999 IC-814 Kandahar hijack, where he confronted ISI-backed terrorists demanding the release of Masood Azhar and two others in exchange for 170+ hostages. Operating under Taliban oversight in Afghanistan, Doval's team navigated intense pressure, ultimately securing the passengers' freedom while highlighting Pakistan's proxy role.

As NSA, Doval is the strategic architect of India's "defensive offence" doctrine - proactively "taking the fight to the enemy's backyard." This philosophy directly inspired the film's portrayal of covert Indian intelligence ops inside Pakistan's Lyari underworld. He oversaw the 2016 surgical strikes across the LoC after Uri and the 2019 Balakot airstrike. South Asia Terrorism Portal (SATP) records and MEA press releases note his ongoing counter-terror diplomacy, including recent assertions that Jammu & Kashmir remains Pakistan's "theatre of proxy war" while India has seen no major terror attacks outside the region in over a decade. No declassified FBI or CIA records detail his personal operations, though U.S. strategic assessments (National Security Archive-affiliated papers) have acknowledged his insights on regional crises.

Doval embodies the ultimate pro-India intelligence hawk - not a battlefield soldier, but a chess grandmaster operating where diplomacy ends and covert action begins. He remains alive, active, and enormously influential. The Sanyal character captures this same calculating, patriotic aura of a shadow warrior who reshapes national security from the unseen front lines.`,
    movieImg: ajitMovie,
    realImg: ajitReal,
    isDark: true
  },
  {
    id: "devarat-kapoor",
    name: "Devarat Kapoor",
    realName: "Jaswant Singh",
    playedBy: "Akash Khurana",
    focus: "Soldier-Statesman & Crisis Negotiator",
    narrative: `Played by Akash Khurana, Devarat Kapoor is directly inspired by Jaswant Singh, one of India's most versatile and battle-hardened statesmen of the Atal Bihari Vajpayee era. A former Indian Army major who brought a soldier's discipline and sense of duty into diplomacy, Singh simultaneously held the portfolios of External Affairs, Defence, and Finance at different points - a rare feat in Indian politics that underscored his trust within the Vajpayee government.

His defining and most controversial moment came during the December 1999 IC-814 hijacking crisis. As External Affairs Minister, Singh personally flew to Kandahar, Afghanistan, on 31 December aboard an Indian aircraft to negotiate directly with Taliban authorities. He oversaw the release of 176 Indian hostages (plus crew) in exchange for three jailed militants - Masood Azhar (future founder of Jaish-e-Mohammed), Ahmed Omar Saeed Sheikh, and Mushtaq Ahmed Zargar. Official MEA statements from 26 December 1999, issued by Singh himself, emphasised the government's "first concern" as the safety of passengers while confirming constant monitoring and diplomatic engagement. He carried a mysterious red briefcase during the tense handover on the tarmac; its contents sparked years of speculation - ranging from ransom money (a claim later raised in Parliament and denied) to negotiation documents. Singh later clarified in interviews that separate red suitcases belonging to the hijackers had caused confusion with Taliban observers, but the exact contents of his own bag remain unresolved in public memory.

The deal was slammed by critics as capitulation to terrorism yet praised for saving innocent lives - a moral-political dilemma that still echoes in national security debates. Singh's military background informed his cool-headed approach; he was consulted during the Kargil Review process as a former soldier-statesman. He played a pivotal role in shaping India's post-Pokhran-II (1998) nuclear diplomacy, engaging in marathon talks with US Deputy Secretary Strobe Talbott that helped ease sanctions and lay groundwork for closer Indo-US ties - documented in declassified US State Department and National Security Archive records.

Singh authored several books, including the 2009 volume Jinnah: India-Partition-Independence, which led to his expulsion from the BJP after the party and RSS distanced themselves from its contents; Gujarat even banned the book. He died of natural causes on 27 September 2020. Devarat Kapoor captures the highest-level political-intelligence coordination during national emergencies, mirroring Singh's real-life blend of soldierly resolve, diplomatic pragmatism, and the enduring controversies that define crisis leadership.`,
    movieImg: jaswantMovie,
    realImg: jaswantReal,
    isDark: false
  },
  {
    id: "chaudhary-aslam",
    name: "SP Chaudhary Aslam",
    realName: "Chaudhry Aslam Khan",
    playedBy: "Sanjay Dutt",
    focus: "Karachi's Toughest Encounter Specialist",
    narrative: `Played by Sanjay Dutt, SP Chaudhary Aslam is modeled on Chaudhry Aslam Khan (10 April 1963 - 9 January 2014), one of Pakistan's most iconic and controversial Sindh Police officers - universally known as Karachi's "encounter specialist" and "super cop." A 1984-batch officer who joined the force on 31 October 1984, Aslam cut his teeth in the bloody Karachi operations of the 1990s against MQM militants and criminal syndicates. He later built his fearsome reputation leading the specialised Lyari Task Force (LTF), tasked with dismantling the stranglehold of gangsters who had turned Lyari - Karachi's oldest, densely populated working-class neighbourhood - into a virtual no-go zone ruled by armed mafias, drug lords and militant proxies.

His defining triumph came in 2009 when he personally directed the high-risk police encounter that killed Lyari's most notorious crime lord, Rehman Dakait (alias Rehman Commando), decapitating one of the city's most powerful underworld empires. As head of the CID's Anti-Extremism Cell and later SSP of Karachi's anti-terror unit, Aslam's teams conducted relentless operations against the Tehrik-i-Taliban Pakistan (TTP), Lashkar-e-Jhangvi and affiliated networks, arresting dozens of militants and foiling multiple suicide plots targeting Pakistan and Afghanistan. South Asia Terrorism Portal (SATP) records document his unit's repeated successes in busting hideouts and disrupting terror financing in Lyari and beyond.

Yet his methods were brutally polarising. Human rights organisations and local activists repeatedly accused him of staging fake encounters and extrajudicial executions; he was suspended and briefly jailed in 2006 after the alleged staged killing of labourer Rasool Bux Brohi, though charges were later dropped. Aslam survived at least nine assassination attempts, including a devastating 2011 suicide bombing on his residence that killed eight people. He famously declared he would not be intimidated, once telling reporters the terrorists had put their hand in a lion's mouth.

On 9 January 2014, hours after leading a raid that eliminated three TTP militants in Manghopir, a suicide car bomb rammed his convoy on the Lyari Expressway in Essa Nagri. Aslam, his driver and personal guard were killed instantly; the Mohmand Agency chapter of the TTP claimed responsibility, hailing it as revenge for the martyrdom and torture of their fighters (confirmed in official Pakistani police statements, BBC, Dawn and SATP archives). No declassified FBI or CIA records reference his personal operations, though U.S. and Indian intelligence assessments noted his aggressive anti-Taliban campaign as a significant factor in Karachi's fluctuating security landscape.

To supporters he was a fearless martyr who restored order in ungovernable neighbourhoods; to critics, a state-sanctioned executioner who blurred the line between policing and vengeance. His widow, Noreen Aslam, publicly condemned the film's depiction, accusing it of distorting her husband's legacy and later announcing plans for an authentic biopic to honour his true story. Aslam remains a larger-than-life symbol of Pakistan's raw, no-holds-barred war on crime and terror - a man who lived and died in the crossfire he helped ignite.`,
    movieImg: spMovie,
    realImg: spReal,
    isDark: false
  },
  {
    id: "jameel-jamali",
    name: "Jameel Jamali",
    realName: "Nabil Gabol",
    playedBy: "Rakesh Bedi",
    focus: "Lyari Political Power Broker",
    narrative: `Played by Rakesh Bedi, Jameel Jamali is modelled on Sardar Nabil Ahmed Khan Gabol (born 16 November 1962), a veteran Karachi politician and hereditary Chief Sardar of the Gabol Baloch tribe whose career embodies the volatile fusion of electoral power and Lyari's underworld networks. Grandson of Karachi's first Deputy Speaker and twice mayor Sardar Allah Bakhsh Gabol, he entered politics at 24 with the Pakistan Peoples Party (PPP), winning Provincial Assembly seats in 1988-90 and 1993-96 - becoming the youngest-ever Deputy Speaker of the Sindh Assembly. He served as Member of the National Assembly (NA-245 Karachi South-I) from 2002 onward, including a stint as Minister of State for Ports and Shipping (2008-11) during which he formally inaugurated Gwadar Port.

Gabol's repeated party switches - long-time PPP loyalist until his dramatic 2013 resignation over alleged neglect of Lyari, brief MQM stint (2013-15), return to PPP in 2017 alongside his son, and current affiliation with MQM-P - mirror the survivalist pragmatism of Lyari's Baloch-dominated politics. His name has surfaced repeatedly in police and rival accusations of patronising criminal syndicates. In August 2015, Karachi-South DIG Dr Jamil Ahmed publicly alleged, backed by the interrogation of arrested Ghaffar Zikri gang commander Amir alias Dhobi, that Gabol had contacted Zikri via mobile internet, directing him to spark fresh unrest in Lyari and promising arms, ammunition, explosives and cash to be delivered through former UC Nazim Rauf Baloch. Senior PPP Lyari leaders echoed the claims; Gabol has consistently and vehemently denied every allegation, calling them politically motivated fabrications.

Beyond politics, a 2018 video of him manhandling a fellow passenger at Karachi's Jinnah International Airport after a heated argument went viral, drawing widespread condemnation; Gabol later clarified the man had abused Pakistani politicians and him personally. He has strongly criticised the film Dhurandhar for depicting Lyari as a terrorism hub, insisting the portrayal misrepresents the area and its people, and distancing himself from the Jameel Jamali character's fictional spy twist.

Gabol remains alive, politically active, and polarising - the archetype of how electoral ambition, tribal loyalty and alleged criminal proximity have long intertwined in Karachi's most contested constituency.`,
    movieImg: jameelMovie,
    realImg: jameelReal,
    isDark: true
  },
  {
    id: "omar-haider",
    name: "ASP Omar Haider",
    realName: "Omar Shahid Hamid",
    playedBy: "Aditya Uppal",
    focus: "Officer & Crime Novelist",
    narrative: `Played by Aditya Uppal, ASP Omar Haider is modelled on Omar Shahid Hamid (born 23 October 1977), a serving Deputy Inspector General of Pakistan's Police Service of Pakistan and one of Karachi's most battle-hardened counter-terrorism officers who has simultaneously become a bestselling crime novelist. The son of Malik Shahid Hamid, former Managing Director of Karachi Electric Supply Corporation (KESC), he joined the force in 2003 as Assistant Superintendent of Police after topping the CSS examinations. His father was assassinated on 5 July 1997 in Defence Housing Authority by MQM-linked hitman Saulat Mirza (later convicted and hanged in 2015), a trauma that propelled the young law graduate from Karachi Grammar School and the University of Kent straight into policing.

Hamid cut his teeth in the blood-soaked Lyari gang wars, served in the Intelligence Bureau, and rose to head Karachi's Counter-Terrorism Department (CTD) cell and CID. In 2011, while CID chief, he was placed on a Tehrik-i-Taliban Pakistan (TTP) hit list. His office was bombed by Taliban militants; he survived only because the team had shifted premises a week earlier. He also endured gangster ambushes and a false case filed by rival colleagues. Forced to take a five-year sabbatical in London (2011-2016), where he worked as a political-risk consultant, Hamid turned his insider knowledge into fiction.

His debut novel The Prisoner (2013) - longlisted for the DSC Prize for South Asian Literature and now heading to the big screen - is reportedly 90% drawn from real Karachi police cases. The follow-up The Spinner's Tale (2015) features a jihadi villain loosely based on Daniel Pearl's killer Omar Saeed Sheikh and won the Karachi Literature Festival Fiction Prize. Subsequent works - The Party Worker (2017, Netflix/TV adaptation in progress), The Fix (cricket match-fixing thriller) and Betrayal (espionage) - have kept him in the spotlight. A protege of legendary cop Chaudhry Aslam (who arrested his father's killer), Hamid returned in 2016 as SSP CTD Intelligence and now serves as DIG in Sindh Police's Counter-Terrorism Department. He remains on active duty, continues writing, and is regularly quoted by the New York Times, BBC, Reuters and CNN. South Asia Terrorism Portal (SATP) records cite his official statements on Karachi militant attacks. No declassified FBI or CIA records publicly reference him.`,
    movieImg: omanMovie,
    realImg: omanReal,
    isDark: false
  },
  {
    id: "bade-sahab",
    name: "Bade Sahab",
    realName: "Dawood Ibrahim",
    playedBy: "Danish Iqbal",
    focus: "The D-Company Kingpin",
    narrative: `Played by Danish Iqbal, Bade Sahab is the film's most instantly recognisable real-life inspiration - Dawood Ibrahim Kaskar (born 26 December 1955 in Khed, Ratnagiri district, Maharashtra), South Asia's most notorious fugitive and one of the world's most wanted criminals. He transformed a small-time street gang operating in Mumbai's Dongri and dock areas into D-Company, a 5,000-strong transnational syndicate controlling narcotics trafficking, extortion, contract killings, gold smuggling, hawala networks, film piracy and Bollywood infiltration. US Congressional reports describe D-Company as a criminal-terrorism fusion model that has shared smuggling routes across South Asia, the Middle East and Africa with al-Qaeda.

His single most catastrophic act was masterminding the 12 March 1993 Bombay serial bomb blasts - 13 coordinated explosions that killed 257 people and injured over 1,400. Coordinated from Dubai and executed through his network in retaliation for the Babri Masjid demolition and the 1992-93 riots, the attacks marked the first major use of RDX in Indian urban terrorism. He fled to Pakistan immediately afterwards.

Dawood has been designated a Specially Designated Global Terrorist by the US Treasury under Executive Order 13224 since October 2003 for assisting al-Qaeda and supporting terrorists in India. In June 2006, both he and D-Company were named Significant Foreign Narcotics Traffickers under the Kingpin Act. The UN Security Council's Al-Qaida and Taliban Sanctions Committee listed him in November 2003 (QDi.156). South Asia Terrorism Portal (SATP) records repeatedly flag his narco-terror nexus, including links with groups like Babbar Khalsa for arms and funds.

He is wanted by India, Interpol (Red Notice) and multiple agencies for terrorism, murder and organised crime. Credible intelligence, including UN listings updated as recently as June 2025, places him in Karachi's upscale neighbourhoods - White House near Saudi Mosque in Clifton, House No. 37 on 30th Street in Defence Housing Authority, and a hill bungalow in Noorabad - under alleged protection of Pakistan's ISI. Pakistani officials continue to deny his presence. Alleged roles in financing the 26/11 Mumbai attacks and maintaining a strategic alliance with the ISI make him a central figure in India's security calculus.

No confirmed death has ever been established despite recurring rumours; he remains an active fugitive on every major sanctions list. The character's shadowy, untouchable aura perfectly mirrors the real Dawood - the ultimate don who built an empire where crime and terror became indistinguishable.`,
    movieImg: dadoodMovie,
    realImg: dadoodReal,
    isDark: true
  },
  {
    id: "rehman-dakait",
    name: "Rehman Dakait",
    realName: "Sardar Abdul Rehman Baloch",
    playedBy: "Akshaye Khanna",
    focus: "Lyari's Robin Hood Gangster",
    narrative: `Played by Akshaye Khanna, Rehman Dakait is modelled on Sardar Abdul Rehman Baloch (c. 1980 - 9 August 2009), the most mythologised and feared Baloch gangster to emerge from Karachi's Lyari neighbourhood. Born to drug-smuggler father Dad Muhammad and mother Khadija Bibi, he entered crime as a teenager, peddling narcotics in Lyari's coastal alleys. Police records and contemporary reports allege he stabbed a man at age 13, escaped custody, and committed his first murder at 15 by shooting his own mother in 1995 - reportedly over her alleged ties to a rival faction. He built the Laloo Gang, later expanding into a criminal syndicate involved in heroin/hashish trafficking, extortion (bhatta), kidnapping for ransom, illegal arms dealing, contract killings, and land grabbing. Sindh Police listed him in over 80-100 cases and placed a Rs 5 million bounty on his head.

His decade-long bloody turf war with rival gangster Arshad Pappu (and the Zikri gang) defined Karachi's underworld in the 2000s, claiming hundreds of lives over drugs, territory and political patronage. To legitimise his power, Rehman rebranded as Sardar Abdul Rehman Baloch, founded the People's Aman Committee (PAC) in 2008 - ostensibly a peace and welfare body providing schools, clinics and ambulances - but widely viewed as a political front for his gang's dominance. It enjoyed tacit PPP links in Lyari, blending Robin Hood populism among the poor with ruthless enforcement.

His end came on 9 August 2009 in a police encounter at Steel Town (near Kathore/Link Road). Tracked by the Lyari Task Force via phone data, Rehman and three associates - Aqeel Baloch, Aurangzaib Baba and Nazir Bala - were intercepted by SSP Chaudhry Aslam Khan's team. A shootout ensued; all four died en route to hospital. Police called it a legitimate operation against a wanted criminal; his widow Farzana filed a Sindh High Court petition alleging a fake encounter and extrajudicial killing. The controversy still divides opinion.

SATP records note the PAC's later ban under the Anti-Terrorism Act in 2011 and the ensuing turf war between successor Uzair Jan Baloch and Pappu. Rehman's story remains the archetype of Lyari's lethal fusion of crime, tribal loyalty and electoral muscle.`,
    movieImg: rehemanMovie,
    realImg: rehemanReal,
    isDark: false
  },
  {
    id: "major-iqbal",
    name: "Major Iqbal",
    realName: "Ilyas Kashmiri",
    playedBy: "Arjun Rampal",
    focus: "The Invisible Handler",
    narrative: `Played by Arjun Rampal, Major Iqbal is modelled on Muhammad Ilyas Kashmiri (10 February 1964 - 3 June 2011), one of Pakistan's most lethal jihadist commanders who rose from the Pakistan Army's elite Special Services Group (SSG) to become al-Qaeda's de facto military chief. Born in Thathi village, Bhimber district of Pakistan-administered Kashmir, Kashmiri served as an SSG commando in the 1980s before defecting to militancy during the Soviet-Afghan war. Pakistani media and intelligence sources confirm he left the army to join Harkat-ul-Jihad al-Islami (HuJI), eventually heading its operations and creating the feared 313 Brigade - an elite strike force named after the Prophet's companions and later absorbed into al-Qaeda's structure.

Western and Indian agencies described him as among al-Qaeda's most capable military planners, blending special-forces expertise with global jihadist networks. He maintained direct contact with Osama bin Laden and al-Qaeda's core leadership. The Indian National Investigation Agency (NIA) charge sheet in the 26/11 Mumbai attacks explicitly named him alongside LeT leaders and two serving ISI officers (Major Iqbal and Major Sameer Ali) in the larger conspiracy. He was also linked to the 2010 Pune German Bakery bombing, plots against Western targets (including a Danish newspaper and Lockheed Martin CEO via David Headley), the 2008 assassination of former SSG commander General Amir Faisal Alvi, and the 2007 assassination of Benazir Bhutto (per UN Commission findings and al-Qaeda claims). South Asia Terrorism Portal (SATP) timelines document his role in multiple HuJI and al-Qaeda operations across Kashmir, Pakistan, and beyond.

Kashmiri was designated a Specially Designated Global Terrorist by the US and blacklisted by the UN. A 2009 US Department of Justice indictment (stemming from the FBI's David Headley case) charged him with conspiracy to commit terrorism in India and Denmark. No further declassified FBI or CIA operational files on him are publicly available beyond these indictments and drone-strike reporting.

On 3 June 2011, a US drone strike in Wana Bazaar, South Waziristan, killed him along with senior TTP and al-Qaeda figures. HuJI's spokesman Abu Hanzla Kashir immediately confirmed the death; Pakistani Interior Minister Rehman Malik and US counterterrorism officials later verified it to their satisfaction. Initial rumours of survival were dispelled. His arc - state-trained commando turned global jihad architect - perfectly mirrors the film's portrayal of a figure who weaponised military tradecraft against the very state that forged him.`,
    movieImg: iqbalMovie,
    realImg: iqbalReal,
    isDark: true
  },
  {
    id: "uzair-baloch",
    name: "Uzair Baloch",
    realName: "Uzair Jan Baloch",
    playedBy: "Danish Pandor",
    focus: "PAC Leader & Political Enforcer",
    narrative: `Played by Danish Pandor, Uzair Baloch is based on Uzair Jan Baloch (born 11 January 1970), Lyari's second-generation gang lord and one of Karachi's most sadistically violent criminal figures of the 2010s. A first cousin of Rehman Dakait, Uzair inherited leadership of the People's Aman Committee (PAC) immediately after Rehman's death in the August 2009 police encounter led by Chaudhry Aslam Khan. What began as a semi-political community front quickly morphed into a ruthless armed syndicate controlling extortion, narcotics trafficking, land grabbing and targeted killings across Lyari.

His personal vendetta defined his rise. In 2003, rival gangster Arshad Pappu (son of drug lord Haji Lalu) kidnapped and brutally murdered Uzair's father, Faiz Muhammad (Mama Faizu). Uzair was arrested that same year by SP Chaudhry Aslam but released on bail due to powerful political connections. He then joined Rehman Dakait's gang to exact revenge, plunging Lyari into a bloody turf war that left hundreds dead between 2008 and 2013.

His most grotesque documented act occurred on 16 March 2013. Uzair's men lured Pappu, his brother Yasir Arafat and aide Jumma Shera to a party in Defence Housing Authority, kidnapped them, tortured them, beheaded them, paraded the mutilated corpses through Lyari streets, burned the remains and dumped the ashes in a sewer. Eyewitness accounts and later court testimonies describe Uzair and associate Baba Ladla kicking the severed head like a football. A Sindh Police Joint Interrogation Team (JIT) report later confirmed Uzair confessed to direct or indirect involvement in 198 murders, plus extortion and narcotics.

He fled to Dubai and Chabahar (Iran), where he held dual Pakistani-Iranian citizenship. Arrested by Sindh Rangers on 30 January 2016 after extradition from Dubai, he faced over 50 cases. A 2020 military court convicted him of espionage for passing sketches and intelligence on Pakistan Army installations to Iranian agents (and alleged links to the Kulbhushan Jadhav network), sentencing him to 12 years rigorous imprisonment under the Official Secrets Act. He has since been acquitted in dozens of other cases for lack of evidence but remains incarcerated in Karachi Central Jail as of early 2026.

Unlike his predecessor Rehman Dakait, Uzair carries no romantic Robin Hood mythology. His legacy is one of pure, documented brutality - the man who turned Lyari's gang wars into a theatre of medieval vengeance while deeply embedding criminal power in Karachi's political fabric.`,
    movieImg: uzairMovie,
    realImg: uzairReal,
    isDark: false
  },
  {
    id: "atif-ahmed",
    name: "Atif Ahmed",
    realName: "Atiq Ahmed",
    playedBy: "Salim Siddiqui",
    focus: "The Hawala Kingpin",
    narrative: `Played by Salim Siddiqui, Atif Ahmed is modelled on Atiq Ahmed (10 August 1962 - 15 April 2023), the most brazen embodiment of India's criminal-politician nexus in modern Uttar Pradesh. Born in Prayagraj (then Allahabad), he first appeared in police records in 1979 as an accused in a murder case and spent the next four decades building a mafia empire through extortion, kidnapping, contract killings, land grabbing and organised crime. Uttar Pradesh Police eventually registered more than 160 criminal cases against him; by March 2023 the state had seized properties worth Rs 11,684 crore belonging to Ahmed and his family.

He seamlessly merged crime with electoral power, winning five terms as MLA from Allahabad West and one Lok Sabha seat from Phulpur in 2004 on a Samajwadi Party ticket. Even while lodged in jail he continued to control his fiefdom, ensuring protection for his gang members and manipulating local politics. His legal downfall accelerated under the Yogi Adityanath government's anti-mafia crackdown. In 2019 he was convicted of kidnapping a key witness in the 2005 murder of BSP MLA Raju Pal and faced multiple life sentences. On 13 April 2023, just two days before his death, the UP Police charge-sheeted him in the Umesh Pal murder case (another key witness in the Raju Pal killing) and explicitly alleged links to Pakistan's Lashkar-e-Taiba and ISI, claiming he had confessed to regular contact with a Pakistani intelligence handler.

His end was cinematic and shocking. On 15 April 2023, while in police custody and being escorted for a court-mandated medical check-up outside a Prayagraj hospital, three gunmen posing as journalists opened fire at point-blank range, killing Atiq and his brother Ashraf on live national television. The brazen custodial assassination triggered nationwide outrage and questions about institutional complicity. Al-Qaeda in the Indian Subcontinent later threatened revenge for the killing.

No public FBI or CIA records link Atiq to international operations, and intelligence-archive searches yielded no declassified US files. Yet the official Indian charge-sheet on ISI/LeT ties and the scale of his empire made him a textbook case of how criminal syndicates can capture democratic institutions. Atif Ahmed distils that lethal fusion of ballot power and bullet power that still haunts Indian politics.`,
    movieImg: atiqMovie,
    realImg: atiqReal,
    isDark: true
  },
  {
    id: "khanani",
    name: "Javed & Altaf Khanani",
    realName: "Khanani & Kalia",
    playedBy: "Pankaj Tripathi",
    focus: "Money Laundering Empire",
    narrative: `The Khanani brothers in the film are modelled on Altaf Khanani and his brother Muhammad Javed Khanani, founders and operators of Khanani & Kalia International (KKI), one of the most prolific hawala-based money-laundering networks in South Asian criminal history. Operating primarily out of Karachi since the early 1990s (with partners from the Kalia family), KKI posed as a legitimate foreign-exchange and remittance firm but functioned as the financial backbone for transnational crime and terrorism.

On 12 November 2015 the US Treasury's Office of Foreign Assets Control (OFAC) designated the entire Altaf Khanani Money Laundering Organization (Khanani MLO) a Transnational Criminal Organization under Executive Order 13581 - the first professional money-laundering network ever sanctioned under this authority. Treasury documents state that the MLO laundered billions of dollars in organised crime proceeds annually, moving funds across Pakistan, the UAE, US, UK, Canada, Australia and elsewhere for clients including Dawood Ibrahim's D-Company, Colombian, Mexican and Chinese drug cartels, Hezbollah, and designated terrorist groups. Altaf Khanani personally maintained relationships with Lashkar-e-Taiba, Jaish-e-Mohammed, al-Qaeda and the Taliban; the network was explicitly linked to Taliban fund movements. Secondary assessments placed its annual throughput at $14-16 billion, reportedly handling nearly 40% of Pakistan's informal foreign-exchange flows.

Altaf was arrested by the US Drug Enforcement Administration in a September 2015 Panama sting operation (posing as a South American drug cartel). Indicted in Miami on 14 money-laundering counts, he pleaded guilty in October 2016 to conspiracy to commit laundering and was sentenced in April 2017 to 68 months' imprisonment plus a $250,000 fine. He was released around 2020. Javed, also sanctioned by OFAC in October 2016 for his direct role in the network, died on 4 December 2016 after falling from the eighth floor of the under-construction Saima Towers in Karachi's Mohammad Ali Society; police described the death as suicide or accidental, though circumstances remain disputed.

Pakistan's Federal Investigation Agency had raided KKI offices as early as 2008-09 over $1.2 billion in illegal forex transfers. South Asia Terrorism Portal (SATP) reports cite the network's financing of Dawood Ibrahim and terror outfits via FinCEN-linked suspicious activity reports. No further declassified FBI or CIA operational files are publicly available beyond the DOJ indictment and Treasury designations. The Khanani empire remains a textbook case of the invisible financial plumbing that sustains terrorism and organised crime across borders.`,
    movieImg: khananiMovie,
    realImg: khananiReal,
    isDark: false
  },
  {
    id: "ks-bhullar",
    name: "K. S. Bhullar",
    realName: "A. S. Dulat",
    playedBy: "Ali Raza Namdar",
    focus: "Kashmir Backchannel Strategist",
    narrative: `Played by Ali Raza Namdar, K. S. Bhullar is modelled on Amarjit Singh Dulat, one of India's most influential and controversial intelligence figures. A career spymaster who rose through the Intelligence Bureau (IB) and later headed the Research and Analysis Wing (R&AW), Dulat served as RAW chief from 1999 to 2000 after a long stint as Special Secretary and head of IB operations in Jammu & Kashmir from 1988-90. He was later appointed Adviser on Kashmir in the Prime Minister's Office (2001-2004), placing him at the centre of India's most sensitive internal security challenge for over three decades.

Dulat specialised in Kashmir, mastering backchannel negotiations, cultivating political contacts across ideological lines in the Valley, and operating in the grey zone between intelligence, political management and quiet diplomacy. He ran covert outreach to separatist leaders, facilitated secret meetings (including enabling US-based Kashmiri leader Farooq Kathwari's engagements with Indian politicians in 1999), and oversaw counter-insurgency strategies that combined dialogue, incentives and hard power. South Asia Terrorism Portal (SATP) reports frequently cite his interventions and post-retirement assessments on militancy trends, local recruitment and radicalisation in the Valley.

Post-retirement, Dulat became a prolific and outspoken author. His books - Kashmir: The Vajpayee Years (2015), The Spy Chronicles (2018, a rare India-Pakistan intelligence dialogue with former ISI chief Asad Durrani), A Life in the Shadows (2023) and The Chief Minister and the Spy (2025) - revealed operational details, political dealings and backroom manoeuvres that sparked fierce controversy. He faced criticism for allegedly exposing IB undercover operatives' identities at a 1989 Srinagar intelligence conference, an incident militants later exploited. He has also been accused of extending assistance to the son of Hizbul Mujahideen chief Syed Salahuddin. His latest book reignited debate when he claimed Farooq Abdullah privately indicated the National Conference could have helped pass the Article 370 abrogation proposal in the Assembly had the Centre taken them into confidence - a disclosure Abdullah's party slammed as a cheap stunt.

Despite the scandals, Dulat is widely regarded as a pragmatic, Kashmir-focused professional rather than a hardliner. Ideologically aligned with the Indian state yet nuanced in his views on Kashmiriyat, he remains active, writing and commenting publicly on national security. No declassified FBI or CIA records publicly reference him, and Indian government agency archives remain silent on operational details - as expected for a former RAW chief. His legacy endures as the quintessential insider who navigated the shadows of India's most intractable conflict.`,
    movieImg: '',
    realImg: '',
    isDark: true
  }
];

const navItems = [
  { name: 'Hero', targetId: 'hero', icon: Shield },
  { name: 'Ajay Sanyal', targetId: 'ajay-sanyal', icon: ShieldCheck },
  { name: 'Devarat Kapoor', targetId: 'devarat-kapoor', icon: Building2 },
  { name: 'SP Chaudhary Aslam', targetId: 'chaudhary-aslam', icon: BadgeCheck },
  { name: 'Jameel Jamali', targetId: 'jameel-jamali', icon: UserCheck },
  { name: 'ASP Omar Haider', targetId: 'omar-haider', icon: BookOpen },
  { name: 'Bade Sahab', targetId: 'bade-sahab', icon: Skull },
  { name: 'Rehman Dakait', targetId: 'rehman-dakait', icon: Sword },
  { name: 'Major Iqbal', targetId: 'major-iqbal', icon: Radio },
  { name: 'Uzair Baloch', targetId: 'uzair-baloch', icon: Users },
  { name: 'Atif Ahmed', targetId: 'atif-ahmed', icon: Globe },
  { name: 'K. S. Bhullar', targetId: 'ks-bhullar', icon: Siren },
  { name: 'Khanani', targetId: 'khanani', icon: DollarSign },
];

export default function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeTab, setActiveTab] = useState('Hero');
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Preloader simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => {
      lenis.destroy();
      clearInterval(interval);
    };
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center gap-8">
        <div className="relative w-64 h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-crimson"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan-intel animate-pulse">
          Decrypting Assets... {progress}%
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[#050505] min-h-screen selection:bg-crimson selection:text-white">
      <TubelightNavBar 
        items={navItems} 
        activeTab={activeTab}
        onTabChange={(name, targetId) => {
          setActiveTab(name);
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-crimson z-[60] origin-left"
        style={{ scaleX }}
      />

      <div id="hero">
        <Hero />
      </div>

      {characters.map((char) => (
        <CharacterDossier 
          key={char.id}
          id={char.id}
          name={char.name}
          realName={char.realName}
          playedBy={char.playedBy}
          focus={char.focus}
          narrative={char.narrative}
          movieImg={char.movieImg}
          realImg={char.realImg}
          isDark={char.isDark}
        />
      ))}

      <PipelineInfo />

      <footer className="relative py-32 px-6 bg-[#050505] border-t border-white/5 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="w-full h-full bg-[radial-gradient(circle_at_50%_100%,_var(--tw-gradient-stops))] from-crimson/20 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center space-y-12 relative z-10">
          <div className="space-y-4">
            <h3 className="font-clash font-semibold text-4xl md:text-6xl text-white tracking-tight">
              KNOWLEDGE IS THE ONLY <br />
              <span className="text-crimson">TRUE INTELLIGENCE.</span>
            </h3>
            <p className="font-neue text-[#A1A1AA] max-w-xl mx-auto">
              The line between reality and fiction is often blurred by those who operate in the shadows. Stay informed.
            </p>
          </div>
          
          <button className="group relative px-8 py-4 bg-transparent border border-white/20 rounded-full overflow-hidden transition-all hover:border-crimson">
            <span className="relative z-10 font-mono text-xs uppercase tracking-widest text-white group-hover:text-white transition-colors">Explore Full Archive</span>
            <motion.div 
              className="absolute inset-0 bg-crimson translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"
            />
          </button>
          
          <div className="pt-24 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5">
            <div className="font-syncopate font-bold text-xl tracking-tighter">DHURANDHAR.</div>
            <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
              © 2026 CLASSIFIED MEDIA GROUP // ALL RIGHTS RESERVED
            </div>
            <div className="flex gap-6">
              {['Twitter', 'Instagram', 'Intelligence'].map(link => (
                <a key={link} href="#" className="font-mono text-[10px] text-white/40 hover:text-cyan-intel transition-colors uppercase">{link}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
