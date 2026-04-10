'use client'
import { useState } from 'react'
import Image from 'next/image'
import { useI18n } from '../lib/i18n'

type InstructeurLocale = { role: string; bio: string; styles: string[] }
type Instructeur = { name: string; image: string; fr: InstructeurLocale; en: InstructeurLocale; he: InstructeurLocale }

const instructeurs: Instructeur[] = [
  {
    name: 'Obi Lipshitz',
    image: '/images/instructeurs/obi-lipshitz.jpg',
    fr: { role: 'Directeur & Instructeur Vinyasa', styles: ['Vinyasa'], bio: "Fondateur du programme de formation des enseignants d'EllaYoga, Obi enseigne le Vinyasa depuis plus de 20 ans. Sa pédagogie allie précision technique et exploration intérieure." },
    en: { role: 'Director & Vinyasa Instructor', styles: ['Vinyasa'], bio: "Founder of EllaYoga's teacher training program, Obi has been teaching Vinyasa for over 20 years. His teaching combines technical precision with inner exploration." },
    he: { role: 'מנהל ומדריך וינייסה', styles: ['וינייסה'], bio: 'מייסד תוכנית הכשרת המורים של EllaYoga, אובי מלמד וינייסה כבר יותר מ-20 שנה. הפדגוגיה שלו משלבת דיוק טכני עם חקירה פנימית.' },
  },
  {
    name: 'Anat Spigler',
    image: '/images/instructeurs/anat-spigler.jpg',
    fr: { role: 'Instructrice Ashtanga & Vinyasa', styles: ['Ashtanga', 'Vinyasa'], bio: "Formée à l'Ashtanga et au Vinyasa en Israël et à l'étranger, Anat dirige également des formations de professeurs. Elle transmet le yoga avec profondeur et bienveillance." },
    en: { role: 'Ashtanga & Vinyasa Instructor', styles: ['Ashtanga', 'Vinyasa'], bio: 'Trained in Ashtanga and Vinyasa in Israel and abroad, Anat also leads teacher training programs. She transmits yoga with depth and care.' },
    he: { role: 'מדריכת אשטנגה ווינייסה', styles: ['אשטנגה', 'וינייסה'], bio: 'הוכשרה באשטנגה ובוינייסה בישראל ובחו"ל, אנת מנהלת גם תוכניות הכשרת מורים. היא מעבירה יוגה בעומק ובנדיבות.' },
  },
  {
    name: 'Eyal Tschaknovsky',
    image: '/images/instructeurs/eyal-tschaknovsky.jpg',
    fr: { role: 'Instructeur Vinyasa & Ashtanga', styles: ['Vinyasa', 'Ashtanga'], bio: "Eyal a découvert le yoga à New York en 1996 et s'est rendu à Mysore, en Inde, pour étudier l'Ashtanga auprès de Sri K. Pattabhi Jois. Certifié Jivamukti Yoga à New York en 2000." },
    en: { role: 'Vinyasa & Ashtanga Instructor', styles: ['Vinyasa', 'Ashtanga'], bio: 'Eyal discovered yoga in New York in 1996 and traveled to Mysore, India to study Ashtanga under Sri K. Pattabhi Jois. Certified in Jivamukti Yoga in New York in 2000.' },
    he: { role: 'מדריך וינייסה ואשטנגה', styles: ['וינייסה', 'אשטנגה'], bio: "אייל גילה את היוגה בניו יורק ב-1996 ונסע למייסור, הודו, ללמוד אשטנגה תחת Sri K. Pattabhi Jois. מוסמך ביוגה ג'יבמוקטי בניו יורק ב-2000." },
  },
  {
    name: 'Shirley Kaspi',
    image: '/images/instructeurs/shirley-kaspi.jpg',
    fr: { role: 'Instructrice Ashtanga & Vinyasa', styles: ['Ashtanga', 'Vinyasa'], bio: 'Depuis 20 ans, Shirley marche avec le yoga — elle vit, respire et enseigne avec une attention profonde à chaque mouvement et à chaque souffle.' },
    en: { role: 'Ashtanga & Vinyasa Instructor', styles: ['Ashtanga', 'Vinyasa'], bio: 'For 20 years, Shirley has walked with yoga — she lives, breathes and teaches with deep attention to every movement and every breath.' },
    he: { role: 'מדריכת אשטנגה ווינייסה', styles: ['אשטנגה', 'וינייסה'], bio: 'כבר 20 שנה, שירלי צועדת עם היוגה — היא חיה, נושמת ומלמדת עם תשומת לב עמוקה לכל תנועה ולכל נשימה.' },
  },
  {
    name: 'Nitzan Agasi',
    image: '/images/instructeurs/nitzan-agasi.jpg',
    fr: { role: 'Instructeur Vinyasa & Ashtanga', styles: ['Vinyasa', 'Ashtanga'], bio: "Nitzan a rencontré le yoga pour la première fois en Inde en 2010. Après 5 ans de pratique assidue de l'Ashtanga, il explore aujourd'hui toutes les facettes du yoga." },
    en: { role: 'Vinyasa & Ashtanga Instructor', styles: ['Vinyasa', 'Ashtanga'], bio: 'Nitzan first encountered yoga in India in 2010. After 5 years of dedicated Ashtanga practice, he now explores all facets of yoga.' },
    he: { role: 'מדריך וינייסה ואשטנגה', styles: ['וינייסה', 'אשטנגה'], bio: 'ניצן נפגש עם היוגה לראשונה בהודו ב-2010. לאחר 5 שנות תרגול אשטנגה מסור, הוא חוקר כיום את כל פנות היוגה.' },
  },
  {
    name: 'Iris Klein',
    image: '/images/instructeurs/iris-klein.jpg',
    fr: { role: 'Instructrice Yoga Thérapie', styles: ['Yoga Thérapie'], bio: "Iris pratique et enseigne le yoga et la yoga-thérapie depuis 20 ans. Élève personnelle d'A.G. Mohan depuis 2004, elle s'inscrit dans la lignée de Krishnamacharya." },
    en: { role: 'Yoga Therapy Instructor', styles: ['Yoga Therapy'], bio: 'Iris has practiced and taught yoga and yoga therapy for 20 years. A personal student of A.G. Mohan since 2004, she follows the lineage of Krishnamacharya.' },
    he: { role: 'מדריכת יוגה טיפולית', styles: ['יוגה טיפולית'], bio: "איריס מתרגלת ומלמדת יוגה ויוגה טיפולית כבר 20 שנה. תלמידה אישית של A.G. Mohan מ-2004, היא פועלת בשושלת קרישנאמאצ'אריה." },
  },
  {
    name: 'Uri Bendori',
    image: '/images/instructeurs/uri-bendori.jpg',
    fr: { role: 'Instructeur Yoga Intégratif & Iyengar', styles: ['Yoga Intégratif', 'Iyengar'], bio: "Thérapeute en médecine chinoise, shiatsu et yoga-thérapie, Uri enseigne le yoga depuis plus de 20 ans. Il a vécu 3 ans en Inde où il a étudié le yoga à sa source." },
    en: { role: 'Integrative Yoga & Iyengar Instructor', styles: ['Integrative Yoga', 'Iyengar'], bio: 'A therapist in Chinese medicine, shiatsu and yoga therapy, Uri has been teaching yoga for over 20 years. He lived 3 years in India studying yoga at its source.' },
    he: { role: 'מדריך יוגה אינטגרטיבי ואייינגר', styles: ['יוגה אינטגרטיבי', 'אייינגר'], bio: 'מטפל ברפואה סינית, שיאצו ויוגה טיפולית, אורי מלמד יוגה כבר יותר מ-20 שנה. הוא חי 3 שנים בהודו ולמד יוגה במקורה.' },
  },
  {
    name: 'Nancy Gardosh',
    image: '/images/instructeurs/nancy-gardosh.jpg',
    fr: { role: 'Instructrice Iyengar', styles: ['Iyengar'], bio: "Spécialiste de la méthode Iyengar, Nancy accompagne ses élèves avec une précision et une douceur remarquables. Elle organise aussi des retraites Iyengar à l'étranger." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'A specialist in the Iyengar method, Nancy guides her students with remarkable precision and gentleness. She also organizes Iyengar retreats abroad.' },
    he: { role: 'מדריכת אייינגר', styles: ['אייינגר'], bio: 'מומחית בשיטת אייינגר, ננסי מלווה את תלמידיה בדיוק ועדינות יוצאי דופן. היא גם מארגנת סדנאות אייינגר בחו"ל.' },
  },
  {
    name: 'Galia Kronfeld',
    image: '/images/instructeurs/galia-kronfeld.jpg',
    fr: { role: 'Instructrice Iyengar', styles: ['Iyengar'], bio: "Galia enseigne la méthode Iyengar avec rigueur et sensibilité. Sa pratique approfondie lui permet d'accompagner chaque élève vers une meilleure connaissance de son corps." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Galia teaches the Iyengar method with rigor and sensitivity. Her deep practice allows her to guide each student toward a better understanding of their body.' },
    he: { role: 'מדריכת אייינגר', styles: ['אייינגר'], bio: 'גליה מלמדת את שיטת אייינגר בקפדנות ורגישות. התרגול המעמיק שלה מאפשר לה ללוות כל תלמיד לידיעה טובה יותר של גופו.' },
  },
  {
    name: 'Yael Rosenthal',
    image: '/images/instructeurs/yael-rosenthal.jpg',
    fr: { role: 'Instructrice Iyengar', styles: ['Iyengar'], bio: 'Yael est une enseignante Iyengar expérimentée dont la pratique est ancrée dans la précision anatomique et la conscience corporelle profonde.' },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Yael is an experienced Iyengar teacher whose practice is rooted in anatomical precision and deep body awareness.' },
    he: { role: 'מדריכת אייינגר', styles: ['אייינגר'], bio: 'יעל היא מורת אייינגר מנוסה שתרגולה מושרש בדיוק אנטומי ומודעות גופנית עמוקה.' },
  },
  {
    name: 'Lior Alsheikh',
    image: '/images/instructeurs/lior-alsheikh.jpg',
    fr: { role: 'Instructeur Iyengar', styles: ['Iyengar'], bio: "Lior transmet la méthode Iyengar avec passion. Son enseignement est caractérisé par une attention aux détails et une approche personnalisée pour chaque pratiquant." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Lior transmits the Iyengar method with passion. His teaching is characterized by attention to detail and a personalized approach for each practitioner.' },
    he: { role: 'מדריך אייינגר', styles: ['אייינגר'], bio: 'ליאור מעביר את שיטת אייינגר בתשוקה. ההוראה שלו מאופיינת בתשומת לב לפרטים וגישה אישית לכל מתרגל.' },
  },
  {
    name: 'Eyal Yanov',
    image: '/images/instructeurs/eyal-yanov.jpg',
    fr: { role: 'Instructeur Iyengar', styles: ['Iyengar'], bio: "Spécialisé dans la méthode Iyengar, Eyal apporte une connaissance approfondie de l'alignement et de l'utilisation des accessoires pour accompagner chaque élève." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Specialized in the Iyengar method, Eyal brings deep knowledge of alignment and the use of props to support each student.' },
    he: { role: 'מדריך אייינגר', styles: ['אייינגר'], bio: 'מתמחה בשיטת אייינגר, אייל מביא ידע מעמיק ביישור ושימוש בעזרים לתמיכת כל תלמיד.' },
  },
  {
    name: 'Dana Yechezkel',
    image: '/images/instructeurs/dana-yechezkel.jpg',
    fr: { role: 'Instructrice Iyengar', styles: ['Iyengar'], bio: 'Dana enseigne la méthode Iyengar avec une approche douce et rigoureuse, guidant ses élèves vers une pratique précise et consciente.' },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Dana teaches the Iyengar method with a gentle and rigorous approach, guiding her students toward precise and mindful practice.' },
    he: { role: 'מדריכת אייינגר', styles: ['אייינגר'], bio: 'דנה מלמדת את שיטת אייינגר בגישה עדינה וקפדנית, מנחה את תלמידיה לעבר תרגול מדויק ומודע.' },
  },
  {
    name: 'Kaifu Cohen',
    image: '/images/instructeurs/kaifu-cohen.jpg',
    fr: { role: 'Instructeur Iyengar', styles: ['Iyengar'], bio: 'Kaifu est un pratiquant et enseignant Iyengar dévoué, apportant énergie et précision à chaque cours.' },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Kaifu is a dedicated Iyengar practitioner and teacher, bringing energy and precision to every class.' },
    he: { role: 'מדריך אייינגר', styles: ['אייינגר'], bio: 'כיפו הוא מתרגל ומורה אייינגר מסור, מביא אנרגיה ודיוק לכל שיעור.' },
  },
  {
    name: 'Dafna Tobi',
    image: '/images/instructeurs/dafna-tobi.jpg',
    fr: { role: 'Instructrice Vinyasa & Yoga Base', styles: ['Vinyasa', 'Yoga Base'], bio: "Dafna offre des cours accessibles et dynamiques, idéaux pour les débutants comme pour les pratiquants confirmés. Sa pédagogie bienveillante crée un espace d'apprentissage serein." },
    en: { role: 'Vinyasa & Foundation Yoga Instructor', styles: ['Vinyasa', 'Foundation Yoga'], bio: 'Dafna offers accessible and dynamic classes, ideal for beginners and experienced practitioners alike. Her caring pedagogy creates a serene learning space.' },
    he: { role: 'מדריכת וינייסה ויוגה בסיסי', styles: ['וינייסה', 'יוגה בסיסי'], bio: 'דפנה מציעה שיעורים נגישים ודינמיים, אידיאליים למתחילים ולמתרגלים מנוסים. הפדגוגיה הנדיבה שלה יוצרת מרחב למידה שלווה.' },
  },
  {
    name: 'Karen Cohen',
    image: '/images/instructeurs/karen-cohen.jpg',
    fr: { role: 'Instructrice Vinyasa & Yoga Base', styles: ['Vinyasa', 'Yoga Base'], bio: 'Karen guide ses élèves à travers des cours fluides et accessibles, avec une attention particulière au souffle et à la conscience du corps en mouvement.' },
    en: { role: 'Vinyasa & Foundation Yoga Instructor', styles: ['Vinyasa', 'Foundation Yoga'], bio: 'Karen guides her students through fluid and accessible classes, with special attention to breath and body awareness in movement.' },
    he: { role: 'מדריכת וינייסה ויוגה בסיסי', styles: ['וינייסה', 'יוגה בסיסי'], bio: 'קארן מנחה את תלמידיה דרך שיעורים זורמים ונגישים, עם תשומת לב מיוחדת לנשימה ולמודעות הגוף בתנועה.' },
  },
  {
    name: 'Rona Or',
    image: '/images/instructeurs/rona-or.jpg',
    fr: { role: 'Instructrice Yoga Intégratif & Yoga Base', styles: ['Yoga Intégratif', 'Yoga Base'], bio: "Rona enseigne un yoga intégratif qui unit corps, souffle et conscience. Ses cours sont accessibles à tous et invitent à une exploration en douceur." },
    en: { role: 'Integrative Yoga & Foundation Yoga Instructor', styles: ['Integrative Yoga', 'Foundation Yoga'], bio: 'Rona teaches an integrative yoga that unites body, breath and awareness. Her classes are accessible to all and invite gentle exploration.' },
    he: { role: 'מדריכת יוגה אינטגרטיבי ויוגה בסיסי', styles: ['יוגה אינטגרטיבי', 'יוגה בסיסי'], bio: 'רונה מלמדת יוגה אינטגרטיבי המאחד גוף, נשימה ומודעות. שיעוריה נגישים לכולם ומזמינים לחקירה עדינה.' },
  },
  {
    name: 'Sharon Hill',
    image: '/images/instructeurs/sharon-hill.jpg',
    fr: { role: 'Instructrice Yoga Base & Vinyasa', styles: ['Yoga Base', 'Vinyasa'], bio: "Sharon a découvert le yoga à New York en 2004, au studio Dharma Mitra. Depuis, le yoga est au cœur de sa vie et elle le transmet avec enthousiasme et générosité." },
    en: { role: 'Foundation Yoga & Vinyasa Instructor', styles: ['Foundation Yoga', 'Vinyasa'], bio: 'Sharon discovered yoga in New York in 2004, at the Dharma Mitra studio. Since then, yoga has been at the heart of her life and she shares it with enthusiasm and generosity.' },
    he: { role: 'מדריכת יוגה בסיסי ווינייסה', styles: ['יוגה בסיסי', 'וינייסה'], bio: 'שרון גילתה את היוגה בניו יורק ב-2004, באולפן Dharma Mitra. מאז, היוגה היא לב ליבה של חייה והיא מעבירה אותה בהתלהבות ונדיבות.' },
  },
  {
    name: 'Sigal Biber',
    image: '/images/instructeurs/sigal-biber.jpg',
    fr: { role: 'Philosophie du Yoga', styles: ['Philosophie du Yoga'], bio: "Sigal explore et enseigne la dimension philosophique et spirituelle du yoga. Ses cours invitent à une réflexion profonde sur les textes anciens et leur application moderne." },
    en: { role: 'Yoga Philosophy', styles: ['Yoga Philosophy'], bio: 'Sigal explores and teaches the philosophical and spiritual dimension of yoga. Her classes invite deep reflection on ancient texts and their modern application.' },
    he: { role: 'פילוסופיה של יוגה', styles: ['פילוסופיה של יוגה'], bio: 'סיגל חוקרת ומלמדת את הממד הפילוסופי והרוחני של היוגה. שיעוריה מזמינים להרהור עמוק על טקסטים עתיקים ויישומם המודרני.' },
  },
  {
    name: 'Sharon Cherkham',
    image: '/images/instructeurs/sharon-cherkham.jpg',
    fr: { role: 'Instructrice Yoga', styles: ['Yoga'], bio: "Sharon apporte sa sensibilité unique à l'enseignement du yoga, créant une atmosphère chaleureuse et bienveillante dans chacun de ses cours." },
    en: { role: 'Yoga Instructor', styles: ['Yoga'], bio: 'Sharon brings her unique sensitivity to yoga teaching, creating a warm and caring atmosphere in each of her classes.' },
    he: { role: 'מדריכת יוגה', styles: ['יוגה'], bio: 'שרון מביאה את הרגישות הייחודית שלה להוראת היוגה, יוצרת אווירה חמה ואוהבת בכל אחד משיעוריה.' },
  },
  // Sarona instructors
  {
    name: 'Oren Atias',
    image: '/images/instructeurs/oren-atias.jpg',
    fr: { role: 'Instructeur Vinyasa', styles: ['Vinyasa'], bio: 'Oren enseigne le Vinyasa avec dynamisme et fluidité. Ses cours invitent à une connexion profonde entre le mouvement et le souffle.' },
    en: { role: 'Vinyasa Instructor', styles: ['Vinyasa'], bio: 'Oren teaches Vinyasa with dynamism and fluidity. His classes invite a deep connection between movement and breath.' },
    he: { role: 'מדריך וינייסה', styles: ['וינייסה'], bio: 'אורן מלמד וינייסה בדינמיות וזרימה. שיעוריו מזמינים לחיבור עמוק בין תנועה ונשימה.' },
  },
  {
    name: 'Ilan Eshel',
    image: '/images/instructeurs/ilan-eshel.jpg',
    fr: { role: 'Instructeur Yoga Aérien', styles: ['Yoga Aérien'], bio: "Spécialiste du yoga aérien, Ilan guide ses élèves dans une pratique suspendue qui libère le corps et l'esprit. Une expérience unique et transformatrice." },
    en: { role: 'Aerial Yoga Instructor', styles: ['Aerial Yoga'], bio: 'A specialist in aerial yoga, Ilan guides his students in a suspended practice that liberates body and mind. A unique and transformative experience.' },
    he: { role: 'מדריך יוגה אווירי', styles: ['יוגה אווירי'], bio: 'מומחה ביוגה אווירי, אילן מנחה את תלמידיו בתרגול מרחף המשחרר גוף ונפש. חוויה ייחודית ומשנה.' },
  },
  {
    name: 'Alon Guy Peretz',
    image: '/images/instructeurs/alon-guy-peretz.jpg',
    fr: { role: 'Instructeur Vinyasa', styles: ['Vinyasa'], bio: "Alon enseigne un Vinyasa dynamique et créatif, avec une attention particulière à l'alignement et à la progression de chaque pratiquant." },
    en: { role: 'Vinyasa Instructor', styles: ['Vinyasa'], bio: "Alon teaches a dynamic and creative Vinyasa, with particular attention to alignment and each practitioner's progression." },
    he: { role: 'מדריך וינייסה', styles: ['וינייסה'], bio: 'אלון מלמד וינייסה דינמי ויצירתי, עם תשומת לב מיוחדת ליישור והתקדמות כל מתרגל.' },
  },
  {
    name: 'Gilad Feinro',
    image: '/images/instructeurs/gilad-feinro.jpg',
    fr: { role: 'Instructeur Iyengar', styles: ['Iyengar'], bio: "Gilad pratique et enseigne la méthode Iyengar avec précision et dévouement. Son approche méthodique aide chaque élève à approfondir sa pratique." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Gilad practices and teaches the Iyengar method with precision and devotion. His methodical approach helps each student deepen their practice.' },
    he: { role: 'מדריך אייינגר', styles: ['אייינגר'], bio: 'גלעד מתרגל ומלמד את שיטת אייינגר בדיוק ומסירות. הגישה המתודית שלו עוזרת לכל תלמיד להעמיק את תרגולו.' },
  },
  {
    name: 'Yotam Agam',
    image: '/images/instructeurs/yotam-agam.jpg',
    fr: { role: 'Instructeur Ashtanga', styles: ['Ashtanga'], bio: "Yotam enseigne l'Ashtanga dans sa forme traditionnelle, avec une discipline et une énergie contagieuses. Chaque cours est un voyage structuré vers la maîtrise de soi." },
    en: { role: 'Ashtanga Instructor', styles: ['Ashtanga'], bio: 'Yotam teaches Ashtanga in its traditional form, with infectious discipline and energy. Each class is a structured journey toward self-mastery.' },
    he: { role: 'מדריך אשטנגה', styles: ['אשטנגה'], bio: 'יותם מלמד אשטנגה בצורתה המסורתית, עם משמעת ואנרגיה מדבקות. כל שיעור הוא מסע מובנה לעבר שליטה עצמית.' },
  },
  {
    name: 'Lior Harari',
    image: '/images/instructeurs/lior-harari.jpg',
    fr: { role: 'Instructeur Iyengar', styles: ['Iyengar'], bio: "Lior transmet la méthode Iyengar avec clarté et bienveillance, guidant ses élèves vers une pratique précise et consciente du corps." },
    en: { role: 'Iyengar Instructor', styles: ['Iyengar'], bio: 'Lior transmits the Iyengar method with clarity and care, guiding his students toward precise and conscious body awareness.' },
    he: { role: 'מדריך אייינגר', styles: ['אייינגר'], bio: 'ליאור מעביר את שיטת אייינגר בבהירות ואכפתיות, מנחה את תלמידיו לעבר מודעות גוף מדויקת ומודעת.' },
  },
  {
    name: 'Romi Raz',
    image: '/images/instructeurs/romi-raz.jpg',
    fr: { role: 'Instructrice Ashtanga & Vinyasa', styles: ['Ashtanga', 'Vinyasa'], bio: "Romi enseigne l'Ashtanga et le Vinyasa avec passion et profondeur. Sa pratique régulière et sa formation solide font d'elle une enseignante inspirante." },
    en: { role: 'Ashtanga & Vinyasa Instructor', styles: ['Ashtanga', 'Vinyasa'], bio: 'Romi teaches Ashtanga and Vinyasa with passion and depth. Her regular practice and solid training make her an inspiring teacher.' },
    he: { role: 'מדריכת אשטנגה ווינייסה', styles: ['אשטנגה', 'וינייסה'], bio: 'רומי מלמדת אשטנגה ווינייסה בתשוקה ובעומק. התרגול הסדיר וההכשרה המוצקה שלה הופכים אותה למורה מעוררת השראה.' },
  },
  {
    name: 'Roni Friedman',
    image: '/images/instructeurs/roni-friedman.jpg',
    fr: { role: 'Instructrice Vinyasa', styles: ['Vinyasa'], bio: "Roni guide ses élèves à travers des séquences fluides et énergisantes. Son enseignement chaleureux crée une atmosphère accueillante pour tous les niveaux." },
    en: { role: 'Vinyasa Instructor', styles: ['Vinyasa'], bio: 'Roni guides her students through fluid and energizing sequences. Her warm teaching creates a welcoming atmosphere for all levels.' },
    he: { role: 'מדריכת וינייסה', styles: ['וינייסה'], bio: 'רוני מנחה את תלמידיה דרך רצפים זורמים ומרעננים. ההוראה החמה שלה יוצרת אווירה מקבלת לכל הרמות.' },
  },
  {
    name: 'Reut Siniglia',
    image: '/images/instructeurs/reut-siniglia.jpg',
    fr: { role: 'Instructrice Yoga Intégratif & Vinyasa', styles: ['Yoga Intégratif', 'Vinyasa'], bio: "Reut enseigne un yoga qui unit corps, esprit et souffle. Son approche intégrative permet à chaque élève de trouver son propre chemin dans la pratique." },
    en: { role: 'Integrative Yoga & Vinyasa Instructor', styles: ['Integrative Yoga', 'Vinyasa'], bio: 'Reut teaches a yoga that unites body, mind and breath. Her integrative approach allows each student to find their own path in practice.' },
    he: { role: 'מדריכת יוגה אינטגרטיבי ווינייסה', styles: ['יוגה אינטגרטיבי', 'וינייסה'], bio: 'ראות מלמדת יוגה המאחד גוף, נפש ונשימה. הגישה האינטגרטיבית שלה מאפשרת לכל תלמיד למצוא את דרכו בתרגול.' },
  },
]

export default function Instructeurs() {
  const { t, isRtl, locale } = useI18n()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="instructeurs" className="py-16 px-5 md:py-32 md:px-8" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div style={{ width: '2rem', height: '1px', background: 'var(--sage-dark)' }} />
          <span style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', letterSpacing: isRtl ? '0' : '0.22em', textTransform: 'uppercase', color: 'var(--sage-dark)', fontWeight: 500 }}>
            {t.instructeurs.label}
          </span>
        </div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 4vw, 3.8rem)', fontWeight: 300, lineHeight: 1.1, color: 'var(--text)', marginBottom: '4rem', textAlign: isRtl ? 'right' : 'left' }}>
          {t.instructeurs.title}
        </h2>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1.5rem' }}>
          {instructeurs.map((inst, i) => {
            const loc = inst[locale]
            return (
              <div
                key={inst.name}
                onClick={() => setActive(active === i ? null : i)}
                style={{
                  borderRadius: '4px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: '1px solid',
                  borderColor: active === i ? 'var(--sage)' : 'var(--border)',
                  transition: 'all 0.3s',
                  background: 'var(--white)',
                }}
              >
                {/* Photo */}
                <div style={{ width: '100%', aspectRatio: '4/3', position: 'relative', overflow: 'hidden' }}>
                  <Image
                    src={inst.image}
                    alt={inst.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.3rem', fontWeight: 400, color: 'var(--text)', marginBottom: '0.2rem' }}>
                    {inst.name}
                  </div>
                  <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.7rem', color: 'var(--text-muted)', fontWeight: 300, marginBottom: '0.75rem', lineHeight: 1.4 }}>
                    {loc.role}
                  </div>

                  <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                    {loc.styles.map((s) => (
                      <span key={s} style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.6rem', fontWeight: 400, letterSpacing: '0.06em', color: 'var(--sage-dark)', background: '#A8BAA422', padding: '0.2rem 0.5rem', borderRadius: '2px' }}>
                        {s}
                      </span>
                    ))}
                  </div>

                  {active === i && (
                    <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                      <p style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.78rem', lineHeight: 1.75, color: 'var(--text-muted)', fontWeight: 300 }}>
                        {loc.bio}
                      </p>
                    </div>
                  )}

                  <div style={{ fontFamily: isRtl ? 'Rubik, sans-serif' : 'Jost, sans-serif', fontSize: '0.65rem', color: 'var(--sage-dark)', marginTop: active === i ? '0.75rem' : 0, fontWeight: 400 }}>
                    {active === i ? t.instructeurs.collapse : t.instructeurs.learnMore}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
