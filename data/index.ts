export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const basepath = "/porfolio-nextjs-1";
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: `${basepath}/b1.svg`,
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: `${basepath}/grid.svg`,
    spareImg: `${basepath}/b4.svg`,
  },

  {
    id: 5,
    title: "Currently building a Gym Booking App",
    description: "With Expo",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: `${basepath}/b5.svg`,
    spareImg: `${basepath}/grid.svg`,
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const gridItemsStack = {
  leftList: ["Next.js", "React Native", "TypeScript"],
  rightList: ["TailwindCSS", "GSAP", "PostgresSQL"],
};

export const projects = [
  {
    id: 1,
    title: "Nike Website",
    des: "Stylish website build on top of react with minimalistic design and fully responsive layouts",
    img: `${basepath}/pj-1.svg`,
    iconLists: [
      `${basepath}/next.svg`,
      `${basepath}/tail.svg`,
      `${basepath}/re.svg`,
      `${basepath}/ts.svg`,
      //  "/three.svg", "/fm.svg"
    ],
    link: "https://acostahenry7.github.io/pf-nike-website/",
  },
  {
    id: 2,
    title: "Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: `${basepath}/p4.svg`,
    iconLists: [
      `${basepath}/next.svg`,
      `${basepath}/tail.svg`,
      `${basepath}/ts.svg`,
      `${basepath}/three.svg`,
      `${basepath}/gsap.svg`,
    ],
    link: "https://acostahenry7.github.io/iphone-landingpage/",
  },
  //   {
  //     id: 3,
  //     title: "Yoom - Video Conferencing App",
  //     des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
  //    ${ img}: `basepath/p2.svg`,
  //     iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
  //     link: "#projects",
  //   },
  //   {
  //     id: 4,
  //     title: "AI Image SaaS - Canva Application",
  //     des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //    ${ img}: `basepath/p3.svg`,
  //     iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //     link: "#projects",
  //   },
];
// ];

export const testimonials = [
  {
    quote:
      "We worked with Henry as part of an external team to develop a field payment application for one of our clients in the financial sector. His work was consistent, well-organized, and aligned with the technical requirements of the project. He maintained clear communication throughout the process and met all established deadlines. His contribution was valuable in helping us meet the client’s objectives, and we would consider working with him again on future projects.",
    name: "José V. Jiménez",
    title: "CEO at EIE Solutions",
    img: "/alfonso.jpg",
  },
  {
    quote:
      "During the development of our Gym Booking App, Henry played a key role in ensuring the project moved forward efficiently and with attention to detail. He demonstrated solid technical skills, was proactive in solving challenges, and communicated clearly with both the team and stakeholders. Thanks to his contributions, we were able to deliver a stable and user-friendly application within the expected timeline. His work added real value to the product and the development process overall.",
    name: "Alfonso Espinal",
    title: "IT Manager at Grupo Avant",
    img: "/valen.jpg",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Michael Johnson",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: `${basepath}/cloud.svg`,
    nameImg: `${basepath}/cloudName.svg`,
  },
  {
    id: 2,
    name: "appwrite",
    img: `${basepath}/app.svg`,
    nameImg: `${basepath}/appName.svg`,
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: `${basepath}/host.svg`,
    nameImg: `${basepath}/hostName.svg`,
  },
  {
    id: 4,
    name: "stream",
    img: `${basepath}/s.svg`,
    nameImg: `${basepath}/streamName.svg`,
  },
  {
    id: 5,
    name: "docker.",
    img: `${basepath}/dock.svg`,
    nameImg: `${basepath}/dockerName.svg`,
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Full Stack Dev - Grupo Avant",
    desc: "Developed web applications, scalable APIs, responsive UIs, and integrated third-party services",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${basepath}/exp2.svg`,
  },
  {
    id: 2,
    title: "Frontend Engineer",
    desc: "As a freelancer for different customers such as tech companies, travel agencies and more",
    className: "md:col-span-2",
    thumbnail: `${basepath}/exp1.svg`,
  },

  {
    id: 3,
    title: "Sr. Frontend Dev - EIE",
    desc: "Creating, deploying and mantaining web solutions, everything from complex projects to simple static websites.",
    className: "md:col-span-2",
    thumbnail: `${basepath}/exp4.svg`,
  },
  {
    id: 4,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: `${basepath}/exp3.svg`,
  },
];

export const phases = [
  {
    title: "Planning & Strategy",
    icon: "",
    containerClass: "bg-emerald-900",
    order: "Phase 1",
    description:
      "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
  },
  {
    title: "Development & Progress Update",
    icon: "",
    containerClass: "bg-pink-900",
    order: "Phase 2",
    description:
      "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
  },
  {
    title: "Deployment & Launch",
    icon: "",
    containerClass: "bg-sky-800",
    order: "Phase 3",
    description:
      "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: `${basepath}/git.svg`,
    link: "https://github.com/acostahenry7",
  },
  {
    id: 2,
    img: `${basepath}/twit.svg`,
    link: "/",
  },
  {
    id: 3,
    img: `${basepath}/link.svg`,
    link: "https://www.linkedin.com/in/henry-acosta-jr/",
  },
];
