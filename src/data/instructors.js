import jasonInstructorImage from "../resources/male-teacher.jpg";
import beaInstructorImage from "../resources/female-teacher.jpg";

export default [
  {
    name: "Bea Moon",
    photo: beaInstructorImage,
    specialty: "Visual Arts",
    phone: "64-20-409-42115",
    email: "bea.moon@youngmakers.nz",
    socialMedia: [
      {
        link: "https://www.linkedin.com",
        icon: "fa fa-linkedin",
      },
      {
        link: "https://www.instagram.com",
        icon: "fa fa-instagram",
      },
    ],
    description:
      "Bea is a graphic designer and videographer with 10 years of experience. Fast tracked to an art career from a young age, she has created artworks displayed in Museums. Bea loves to work with kids and give them essential skills for their future artistic careers.",
    classes: ["Digital Art", "Handicraft", "Videography"],
  },
  {
    name: "Jason Yin",
    photo: jasonInstructorImage,
    specialty: "Technology",
    phone: "64-20-409-42115",
    email: "jason.yin@youngmakers.nz",
    socialMedia: [
      {
        link: "https://www.linkedin.com",
        icon: "fa fa-linkedin",
      },
      {
        link: "https://www.github.com",
        icon: "fa fa-github",
      },
    ],
    description:
      "Jason is a software engineer with 10 years of industry experience. He also loves tinkering with hardware and working on all kinds of weird projects for fun. Jason has made his personal mission to teach and inspire young children on building the technology of the future.",
    classes: ["Computer Programming", "Electionics", "Practical Mathematics"],
  },
];
