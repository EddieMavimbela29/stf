// import images
import LogoImg from './assets/img/header/logo.svg';
import HeroImg from './assets/img/hero/image.svg';
import OverviewProductImg from './assets/img/overview/product.svg';
import FacebookImg from './assets/img/overview/brands/facebook.svg';
import GoogleImg from './assets/img/overview/brands/google.svg';
import CocaColaImg from './assets/img/overview/brands/coca-cola.svg';
import LinkedInImg from './assets/img/overview/brands/linkedin.svg';
import SamsungImg from './assets/img/overview/brands/samsung.svg';
import Feature1Img from './assets/img/features/feature1-img.svg';
import Feature2Img from './assets/img/features/feature2-img.svg';
import Feature3Img from './assets/img/features/feature3-img.svg';
import ArrowRightImg from './assets/img/features/arrow-right.svg';
import CardIconImg1 from './assets/img/product/cards/icon1.svg';
import CardIconImg2 from './assets/img/product/cards/icon2.svg';
import CardIconImg3 from './assets/img/product/cards/icon3.svg';
import PricingIcon1 from './assets/img/pricing/icon1.svg';
import PricingIcon2 from './assets/img/pricing/icon2.svg';
import PricingIcon3 from './assets/img/pricing/icon3.svg';
import AvatarImg1 from './assets/img/testimonial/avatar1.png';
import AvatarImg2 from './assets/img/testimonial/avatar2.png';
import AvatarImg3 from './assets/img/testimonial/avatar3.png';
import AvatarImg4 from './assets/img/testimonial/avatar4.png';
import AvatarImg5 from './assets/img/testimonial/avatar5.png';
import CtaImg1 from './assets/img/cta/image1.svg';
import CtaImg2 from './assets/img/cta/image2.svg';
import FacebookIcon from './assets/img/copyright/facebook.svg';
import TwitterIcon from './assets/img/copyright/twitter.svg';
import LinkedinIcon from './assets/img/copyright/linkedin.svg';


//cristqin createdAt_ASC
import Logo from './assets/img/header/logo.svg';
import ResistanceImg from './assets/img/workouts/resistance.png';
import BoxingImg from './assets/img/workouts/boxing.png';
import BodyPumpImg from './assets/img/workouts/body-pump.png';
import YogaImg from './assets/img/workouts/yoga.png';
import FullBodyImg from './assets/img/workouts/full-body.png';
import FitnessImg from './assets/img/workouts/fitness.png';
import BattleRopeImg from './assets/img/workouts/battle-rope.png';
import CommunityImg1 from './assets/img/community/img1.png';
import CommunityImg2 from './assets/img/community/img2.png';
import CommunityImg3 from './assets/img/community/img3.png';
import CommunityImg4 from './assets/img/community/img4.png';
import JoinImg from './assets/img/join/woman.png';
// icons
import UsersIcn from './assets/img/about/icons/users-icn.svg';
import CalendarIcn from './assets/img/workouts/icons/calendar.svg';
import PriceIcn from './assets/img/pricing/icons/price.svg';
import CommunityIcn from './assets/img/community/icons/community-icn.svg';
import QuestionMarkIcn from './assets/img/faq/icons/question-mark.svg';




export const header = {
  logo: LogoImg,
  btnText: 'Request a demo',
};

export const nav = [
  { name: 'Features', href: '/' },
  { name: 'About us', href: '/' },
  { name: 'Pricing', href: '/' },
  { name: 'Feedback', href: '/' },
];

export const hero = {
  title: 'Track your Expenses to Save Money',
  subtitle: 'Helps you to organize your income and expenses',
  btnText: 'Try free demo',
  compText: '— Web, iOS and Android',
  image: HeroImg,
};

export const overview = {
  productImg: OverviewProductImg,
  brands: [
    {
      image: FacebookImg,
      delay: 300,
    },
    {
      image: GoogleImg,
      delay: 400,
    },
    {
      image: CocaColaImg,
      delay: 500,
    },
    {
      image: LinkedInImg,
      delay: 600,
    },
    {
      image: SamsungImg,
      delay: 700,
    },
  ],
};

export const features = {
  feature1: {
    pretitle: 'Alwalys online',
    title: 'Real-time support with cloud',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature1Img,
  },
  feature2: {
    pretitle: 'Free some cost',
    title: 'Save cost for you and family',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature2Img,
  },
  feature3: {
    pretitle: 'Use anytime',
    title: 'Use anytime when you need',
    subtitle:
      'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim accumsan nisi, tincidunt vel. Enim ipsum, amet quis ullamcorper eget ut.',
    btnLink: 'Learn more',
    btnIcon: ArrowRightImg,
    image: Feature3Img,
  },
};

export const product = {
  title: 'The Product we work with.',
  subtitle:
    'Tellus lacus morbi sagittis lacus in. Amet nisl at mauris enim aumsan nisi, tincidunt vel. Enim ipsum, at quis ullamcorper eget ut.',
  cards: [
    {
      icon: CardIconImg1,
      title: 'Cross platform',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 200,
    },
    {
      icon: CardIconImg2,
      title: 'Cloud server',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 400,
    },
    {
      icon: CardIconImg3,
      title: 'Pure Javascript',
      subtitle: 'Elit esse cillum dolore eu fugiat nulla pariatur',
      delay: 600,
    },
  ],
};

export const pricing = {
  icon: PriceIcn,
  title: 'Pricing plan',
  plans: [
    {
      name: 'Basic',
      price: '20',
      list: [
        { name: 'unlimited gym access' },
        { name: '1 training programs' },
        { name: 'free fitness consultation' },
      ],
      delay: 600,
    },
    {
      name: 'Premium',
      price: '35',
      list: [
        { name: 'unlimited gym access' },
        { name: '5 training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
      ],
      delay: 800,
    },
    {
      name: 'Elite',
      price: '49',
      list: [
        { name: 'unlimited gym access' },
        { name: 'all training programs' },
        { name: 'free fitness consultation' },
        { name: 'personal trainer' },
        { name: '50% off drinks' },
      ],
      delay: 1000,
    },
  ],
};

export const testimonials = {
  title: 'We have millions of best wishers',
  clients: [
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg1,
      name: 'Cameron Williamson',
      position: 'CEO',
      borderColor: '#FF7235',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg2,
      name: 'Shirley Hand',
      position: 'CEO',
      borderColor: '#FFBE21',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg3,
      name: 'Dr. Olivia Hansen',
      position: 'CEO',
      borderColor: '#4756DF',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg4,
      name: 'Aubrey Sanford',
      position: 'CEO',
      borderColor: '#3EC1F3',
    },
    {
      message:
        'Eleifend fames amet, fames enim. Ullamcorper pellentesque ac volutpat nibh aliquet et, ut netus. Vel, fringilla sit eros pretium',
      image: AvatarImg5,
      name: 'Terri Conroy',
      position: 'CEO',
      borderColor: '#BB7259',
    },
  ],
};

export const cta = {
  title: '20M+ downloaded from 32 different countries',
  subtitle: 'Try demo for 7 days with full features.',
  btnText: 'Try free demo',
  img1: CtaImg1,
  img2: CtaImg2,
};



export const workouts = {
  icon: CalendarIcn,
  title: 'Training programs',
  programs: [
    {
      image: ResistanceImg,
      name: 'Resistance',
    },
    {
      image: BoxingImg,
      name: 'Boxing',
    },
    {
      image: BodyPumpImg,
      name: 'Body Pump',
    },
    {
      image: YogaImg,
      name: 'Yoga',
    },
    {
      image: FullBodyImg,
      name: 'Full Body',
    },
    {
      image: FitnessImg,
      name: 'Fitness',
    },
    {
      image: BattleRopeImg,
      name: 'Battle Rope',
    },
  ],
};

export const community = {
  icon: CommunityIcn,
  title: 'Community',
  testimonials: [
    {
      image: CommunityImg1,
      name: 'Mark A.',
      message:
        '“Great location, great price and great, helpful people. What to want more?”',
    },
    {
      image: CommunityImg2,
      name: 'Lauren K.',
      message:
        '“Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.”',
    },
    {
      image: CommunityImg3,
      name: 'Jhon D.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
    {
      image: CommunityImg4,
      name: 'Anne R.',
      message:
        '“Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!”',
    },
  ],
};

export const footer = {
  logo: LogoImg,
  links: [
    { name: 'Home', href: '/' },
    { name: 'About us', href: '/about-us' },
    { name: 'Contact us', href: '/contact-us' }
  ],
  legal: [
    { name: 'Terms of use', href: '/terms-of-service' },
    { name: 'Privacy policy', href: '/policy' },
  ],
  newsletter: {
    title: 'Newsletter',
    subtitle: 'Over 25000 people have subscribed',
  },
  form: {
    placeholder: 'Enter your email',
    btnText: 'Subscribe',
    smallText: 'We don’t sell your email and spam',
  },
};

export const copyright = {
  link1: {
    name: 'Privacy',
    href: '/policy',
  },
  link2: {
    name: 'Terms of Service',
    href: '/terms-of-service',
  },
  copyText: 'Copyright @ 2023 Studentfontein',
  social: [
    { icon: FacebookIcon, href: '/' },
    { icon: TwitterIcon, href: '/' },
    { icon: LinkedinIcon, href: '/' },
  ],
};
