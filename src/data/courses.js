import React from "react";
import subjectCoverPainting from "../resources/course-cover-painting.jpg";
import subjectCoverHandicraft from "../resources/course-cover-handicraft.jpg";
import subjectCoverVideography from "../resources/course-cover-videography.jpg";
import subjectCoverProgramming from "../resources/course-cover-programming.jpg";
import subjectCoverElectronics from "../resources/course-cover-electronics.jpg";
import subjectCoverMaths from "../resources/course-cover-maths.jpg";

export default [
  {
    title: "Computer Programming",
    description:
      "Learn the most important skill for future jobs by developing keen interest in computer programming, learn the basics of coding and start building apps.",
    ages: "13-17",
    size: "8",
    price: "$400 + software fees",
    duration: "12 weeks (90min/week)",
    materials: "Bring your own laptop.",
    image: subjectCoverProgramming,
    slug: "computer-programming",
    ref: React.createRef(),
    shortname: "Coding"
  },
  {
    title: "Electronics",
    description:
      "Electronics are everywhere today, take this fun and practical course to learn about the basics of circuits and build some cool gadgets together!",
    ages: "9-16",
    size: "6",
    price: "$800 + material fees",
    duration: "12 weeks (120min/week)",
    materials: "Bring your own laptop. Electronic components provided",
    image: subjectCoverElectronics,
    slug: "electronics",
    ref: React.createRef(),
    shortname: "Electronics"
  },
  {
    title: "Practical Mathematics",
    description:
      "Learn Mathematics the right way, through real problems. Not your typical boring Maths class, gain true appreciation for the subject.",
    ages: "9-16",
    size: "10",
    price: "$400 + materials",
    duration: "12 weeks (90min/week)",
    materials: "All provided",
    image: subjectCoverMaths,
    slug: "practical-mathematics",
    ref: React.createRef(),
    shortname: "Math",
  },
  {
    title: "Digital Art",
    description:
      "Flex those artistic muscles and learn to use modern tools like photoshop and illustrator to paint amazing works of art.",
    ages: "9-16",
    size: "8",
    price: "$400 + software fees",
    duration: "12 weeks (90min/week)",
    materials: "Bring your own laptop.",
    image: subjectCoverPainting,
    slug: "digital-art",
    ref: React.createRef(),
    shortname: "Art",
  },
  {
    title: "Handicraft",
    description:
      "Fun hands on arts and crafts class where we create interesting projects like cool origami models, pop-up books, clay figurines and decorations.",
    ages: "7-12",
    size: "8",
    price: "$400 + materials fee",
    duration: "12 weeks (90min/week)",
    materials: "Provided",
    image: subjectCoverHandicraft,
    slug: "handicraft",
    ref: React.createRef(),
    shortname: "Crafts",
  },
  {
    title: "Videography",
    description:
      "A fun and practical class where you learn about photography, film making and editing for your favourite apps like instagram, tiktok and youtube!",
    ages: "9-16",
    size: "6",
    price: "$500 + materials fee",
    duration: "12 weeks (90min/week)",
    materials: "Bring your own camera, laptop and props.",
    image: subjectCoverVideography,
    slug: "videography",
    ref: React.createRef(),
    shortname: "Video",
  },
];
