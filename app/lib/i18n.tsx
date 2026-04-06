'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Locale = 'fr' | 'en' | 'he'

export const localeLabels: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  he: 'עב',
}

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  he: 'עברית',
}

export const rtlLocales: Locale[] = ['he']

const translations = {
  fr: {
    nav: {
      studio: 'Le Studio',
      cours: 'Cours',
      planning: 'Planning',
      tarifs: 'Tarifs',
      instructeurs: 'Instructeurs',
      blog: 'Blog',
      contact: 'Contact',
      reserver: 'Réserver',
    },
    hero: {
      label: 'Studio de yoga — Tel Aviv',
      title1: 'Trouvez votre',
      title2: 'équilibre',
      title3: 'intérieur',
      desc: 'EllaYoga vous invite à ralentir, respirer, et revenir à vous-même. Deux studios au cœur de Tel Aviv, des cours pour tous les niveaux.',
      cta1: 'Réserver un cours',
      cta2: 'Découvrir les cours',
      stat1: 'Studios',
      stat2: 'Instructeurs',
      stat3: 'Cours / mois',
      scroll: 'Défiler',
    },
    studio: {
      label: 'Notre histoire',
      title1: 'Un espace pensé',
      title2: 'pour votre',
      title3: 'bien-être',
      p1: "EllaYoga est née d'une conviction simple : le yoga doit être accessible à tous. Depuis 2015, nous accueillons débutants et pratiquants confirmés dans un cadre chaleureux, épuré et lumineux.",
      p2: "Nos deux studios — au Port de Tel Aviv et à la Tour Azrieli Sarona — reflètent notre engagement pour une pratique authentique, bienveillante et profondément humaine.",
      f1: 'Tous niveaux',
      f1d: 'Du débutant absolu au pratiquant avancé',
      f2: 'Petits groupes',
      f2d: 'Maximum 15 personnes par cours',
      f3: 'Instructeurs certifiés',
      f3d: 'Formation internationale reconnue',
      f4: 'Matériel fourni',
      f4d: 'Tapis, blocs et sangles disponibles',
      cta: 'Visiter nos studios →',
    },
    newsletter: {
      label: 'Restez connectés',
      title: 'Newsletter EllaYoga',
      desc: 'Recevez nos actualités, conseils de pratique et offres exclusives directement dans votre boîte mail.',
      placeholder: 'Votre adresse email',
      cta: "S'inscrire",
      success: 'Merci ! Vous êtes inscrit à notre newsletter.',
      rgpd: 'En vous inscrivant, vous acceptez notre politique de confidentialité. Désinscription à tout moment.',
    },
    blog: {
      label: 'Actualités',
      title: 'Le blog EllaYoga',
      readMore: 'Lire la suite →',
      articles: [
        {
          title: '5 raisons de commencer le yoga en 2025',
          date: '15 mars 2025',
          cat: 'Bien-être',
          excerpt: "Le yoga n'est pas qu'une pratique physique. Découvrez pourquoi de plus en plus de personnes l'intègrent dans leur quotidien pour un mieux-être durable.",
        },
        {
          title: 'Hatha ou Vinyasa : quel yoga vous correspond ?',
          date: '28 février 2025',
          cat: 'Cours',
          excerpt: 'Débutant ou pratiquant confirmé, choisir la bonne discipline est essentiel. Nos instructeurs vous guident pour trouver votre voie.',
        },
        {
          title: 'Le Yin Yoga : la pratique du lâcher-prise',
          date: '10 février 2025',
          cat: 'Pratique',
          excerpt: 'Postures longues, respiration profonde, silence intérieur. Le Yin Yoga est une invitation à relâcher les tensions du quotidien.',
        },
      ],
    },
    cookie: {
      message: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre',
      link: 'politique de confidentialité',
      accept: 'Accepter',
      decline: 'Refuser',
    },
    reservation: {
      label: 'Réservation',
      title1: 'Réservez votre',
      title2: 'premier cours',
      desc: 'Votre premier cours est offert. Choisissez le cours, le studio et l\'horaire qui vous convient.',
      step1: 'Choisir le cours',
      step2: 'Vos coordonnées',
      stepOf: 'Étape',
      stepSur: 'sur 2 —',
      cours: 'Type de cours',
      studio: 'Studio',
      date: 'Date',
      heure: 'Heure',
      nom: 'Nom complet',
      email: 'Email',
      tel: 'Téléphone',
      message: 'Message (optionnel)',
      messagePlaceholder: 'Niveau, blessures, questions...',
      continuer: 'Continuer →',
      retour: '← Retour',
      confirmer: 'Confirmer ma réservation',
      successTitle: 'Demande envoyée !',
      successDesc: 'Nous vous contacterons dans les 24h pour confirmer votre réservation.',
      select: 'Sélectionner',
    },
  },
  en: {
    nav: {
      studio: 'The Studio',
      cours: 'Classes',
      planning: 'Schedule',
      tarifs: 'Pricing',
      instructeurs: 'Instructors',
      blog: 'Blog',
      contact: 'Contact',
      reserver: 'Book',
    },
    hero: {
      label: 'Yoga Studio — Tel Aviv',
      title1: 'Find your',
      title2: 'inner',
      title3: 'balance',
      desc: 'EllaYoga invites you to slow down, breathe, and return to yourself. Two studios in the heart of Tel Aviv, classes for all levels.',
      cta1: 'Book a class',
      cta2: 'Discover classes',
      stat1: 'Studios',
      stat2: 'Instructors',
      stat3: 'Classes / month',
      scroll: 'Scroll',
    },
    studio: {
      label: 'Our story',
      title1: 'A space designed',
      title2: 'for your',
      title3: 'well-being',
      p1: 'EllaYoga was born from a simple belief: yoga should be accessible to everyone. Since 2015, we welcome beginners and experienced practitioners in a warm, clean and bright space.',
      p2: 'Our two studios — at Tel Aviv Port and Azrieli Sarona Tower — reflect our commitment to an authentic, caring and deeply human practice.',
      f1: 'All levels',
      f1d: 'From absolute beginners to advanced practitioners',
      f2: 'Small groups',
      f2d: 'Maximum 15 people per class',
      f3: 'Certified instructors',
      f3d: 'Internationally recognized training',
      f4: 'Equipment provided',
      f4d: 'Mats, blocks and straps available',
      cta: 'Visit our studios →',
    },
    newsletter: {
      label: 'Stay connected',
      title: 'EllaYoga Newsletter',
      desc: 'Receive our news, practice tips and exclusive offers directly in your inbox.',
      placeholder: 'Your email address',
      cta: 'Subscribe',
      success: 'Thank you! You are subscribed to our newsletter.',
      rgpd: 'By subscribing, you agree to our privacy policy. Unsubscribe at any time.',
    },
    blog: {
      label: 'News',
      title: 'The EllaYoga Blog',
      readMore: 'Read more →',
      articles: [
        {
          title: '5 reasons to start yoga in 2025',
          date: 'March 15, 2025',
          cat: 'Wellness',
          excerpt: 'Yoga is more than a physical practice. Discover why more and more people are integrating it into their daily lives for lasting well-being.',
        },
        {
          title: 'Hatha or Vinyasa: which yoga suits you?',
          date: 'February 28, 2025',
          cat: 'Classes',
          excerpt: 'Beginner or experienced practitioner, choosing the right discipline is essential. Our instructors guide you to find your path.',
        },
        {
          title: 'Yin Yoga: the practice of letting go',
          date: 'February 10, 2025',
          cat: 'Practice',
          excerpt: 'Long postures, deep breathing, inner silence. Yin Yoga is an invitation to release the tensions of everyday life.',
        },
      ],
    },
    cookie: {
      message: 'We use cookies to improve your experience. By continuing, you agree to our',
      link: 'privacy policy',
      accept: 'Accept',
      decline: 'Decline',
    },
    reservation: {
      label: 'Booking',
      title1: 'Book your',
      title2: 'first class',
      desc: 'Your first class is free. Choose the class, studio and time that suits you.',
      step1: 'Choose a class',
      step2: 'Your details',
      stepOf: 'Step',
      stepSur: 'of 2 —',
      cours: 'Class type',
      studio: 'Studio',
      date: 'Date',
      heure: 'Time',
      nom: 'Full name',
      email: 'Email',
      tel: 'Phone',
      message: 'Message (optional)',
      messagePlaceholder: 'Level, injuries, questions...',
      continuer: 'Continue →',
      retour: '← Back',
      confirmer: 'Confirm my booking',
      successTitle: 'Request sent!',
      successDesc: 'We will contact you within 24h to confirm your booking.',
      select: 'Select',
    },
  },
  he: {
    nav: {
      studio: 'האולפן',
      cours: 'שיעורים',
      planning: 'לוח זמנים',
      tarifs: 'מחירים',
      instructeurs: 'מדריכים',
      blog: 'בלוג',
      contact: 'צור קשר',
      reserver: 'הזמנה',
    },
    hero: {
      label: 'אולפן יוגה — תל אביב',
      title1: 'מצאו את',
      title2: 'שיווי המשקל',
      title3: 'הפנימי שלכם',
      desc: 'EllaYoga מזמינה אתכם להאט, לנשום, ולחזור לעצמכם. שני אולפנים בלב תל אביב, שיעורים לכל הרמות.',
      cta1: 'הזמן שיעור',
      cta2: 'גלה שיעורים',
      stat1: 'אולפנים',
      stat2: 'מדריכים',
      stat3: 'שיעורים / חודש',
      scroll: 'גלול',
    },
    studio: {
      label: 'הסיפור שלנו',
      title1: 'מרחב שתוכנן',
      title2: 'למען',
      title3: 'הרווחה שלכם',
      p1: 'EllaYoga נולדה מתוך אמונה פשוטה: יוגה צריכה להיות נגישה לכולם. מאז 2015, אנו מקבלים מתחילים ומתרגלים מנוסים במרחב חמים, מאורגן ומואר.',
      p2: 'שני האולפנים שלנו — בנמל תל אביב ובמגדל עזריאלי שרונה — משקפים את מחויבותנו לתרגול אותנטי, מטפח ועמוק.',
      f1: 'כל הרמות',
      f1d: 'ממתחילים מוחלטים ועד מתרגלים מתקדמים',
      f2: 'קבוצות קטנות',
      f2d: 'מקסימום 15 אנשים לשיעור',
      f3: 'מדריכים מוסמכים',
      f3d: 'הכשרה בינלאומית מוכרת',
      f4: 'ציוד מסופק',
      f4d: 'מזרנים, בלוקים ורצועות זמינים',
      cta: 'בקר באולפנים שלנו ←',
    },
    newsletter: {
      label: 'הישארו מחוברים',
      title: 'ניוזלטר EllaYoga',
      desc: 'קבלו עדכונים, טיפים לתרגול והצעות בלעדיות ישירות לתיבת הדואר שלכם.',
      placeholder: 'כתובת האימייל שלך',
      cta: 'הירשמו',
      success: 'תודה! נרשמתם לניוזלטר שלנו.',
      rgpd: 'בהרשמה, אתם מסכימים למדיניות הפרטיות שלנו. ביטול הרשמה בכל עת.',
    },
    blog: {
      label: 'עדכונים',
      title: 'בלוג EllaYoga',
      readMore: 'קרא עוד ←',
      articles: [
        {
          title: '5 סיבות להתחיל יוגה ב-2025',
          date: '15 במרץ 2025',
          cat: 'רווחה',
          excerpt: 'יוגה היא הרבה יותר מתרגול גופני. גלו מדוע יותר ויותר אנשים משלבים אותה בחיי היומיום שלהם לשיפור מתמשך.',
        },
        {
          title: 'האטה או וינייסה: איזו יוגה מתאימה לכם?',
          date: '28 בפברואר 2025',
          cat: 'שיעורים',
          excerpt: 'מתחיל או מתרגל מנוסה, בחירת הדיסציפלינה הנכונה חיונית. המדריכים שלנו ידריכו אתכם למצוא את הדרך.',
        },
        {
          title: 'יין יוגה: תרגול ההרפייה',
          date: '10 בפברואר 2025',
          cat: 'תרגול',
          excerpt: 'תנוחות ממושכות, נשימה עמוקה, שקט פנימי. יין יוגה היא הזמנה לשחרר את המתחים של יום-יום.',
        },
      ],
    },
    cookie: {
      message: 'אנו משתמשים בעוגיות לשיפור החוויה שלכם. בהמשך גלישה, אתם מסכימים ל',
      link: 'מדיניות הפרטיות',
      accept: 'אישור',
      decline: 'דחייה',
    },
    reservation: {
      label: 'הזמנה',
      title1: 'הזמינו את',
      title2: 'השיעור הראשון שלכם',
      desc: 'השיעור הראשון שלכם מוצע בחינם. בחרו שיעור, אולפן וזמן שמתאים לכם.',
      step1: 'בחר שיעור',
      step2: 'הפרטים שלך',
      stepOf: 'שלב',
      stepSur: 'מתוך 2 —',
      cours: 'סוג שיעור',
      studio: 'אולפן',
      date: 'תאריך',
      heure: 'שעה',
      nom: 'שם מלא',
      email: 'אימייל',
      tel: 'טלפון',
      message: 'הודעה (אופציונלי)',
      messagePlaceholder: 'רמה, פציעות, שאלות...',
      continuer: 'המשך ←',
      retour: '→ חזרה',
      confirmer: 'אשר את ההזמנה שלי',
      successTitle: 'הבקשה נשלחה!',
      successDesc: 'ניצור איתכם קשר תוך 24 שעות לאישור ההזמנה.',
      select: 'בחר',
    },
  },
}

type Translations = typeof translations.fr
export type { Translations }

const I18nContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: Translations
  isRtl: boolean
}>({
  locale: 'fr',
  setLocale: () => {},
  t: translations.fr,
  isRtl: false,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr')
  const t = translations[locale] as Translations
  const isRtl = rtlLocales.includes(locale)

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} style={{ fontFamily: isRtl ? "'Rubik', sans-serif" : "'Jost', sans-serif" }}>
        {children}
      </div>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
