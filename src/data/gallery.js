import mathematics1Src from "../resources/gallery/mathematics-1.jpg";
import mathematics1Thumbnail from "../resources/gallery/mathematics-1-thumbnail.jpg";
import mathematics2Src from "../resources/gallery/mathematics-2.jpg";
import mathematics2Thumbnail from "../resources/gallery/mathematics-2-thumbnail.jpg";

import painting1Src from "../resources/gallery/painting-1.jpg";
import painting1Thumbnail from "../resources/gallery/painting-1-thumbnail.jpg";
import painting2Src from "../resources/gallery/painting-2.jpg";
import painting2Thumbnail from "../resources/gallery/painting-2-thumbnail.jpg";
import painting3Src from "../resources/gallery/painting-3.jpg";
import painting3Thumbnail from "../resources/gallery/painting-3-thumbnail.jpg";
import painting4Src from "../resources/gallery/painting-4.jpg";
import painting4Thumbnail from "../resources/gallery/painting-4-thumbnail.jpg";

import programming1Src from "../resources/gallery/programming-1.jpg";
import programming1Thumbnail from "../resources/gallery/programming-1-thumbnail.jpg";
import programming2Src from "../resources/gallery/programming-2.jpg";
import programming2Thumbnail from "../resources/gallery/programming-2-thumbnail.jpg";
import programming3Src from "../resources/gallery/programming-3.jpg";
import programming3Thumbnail from "../resources/gallery/programming-3-thumbnail.jpg";

export const Categories = [
    "Programming",
    "Maths",
    "Art"
];

export const Pictures = [
    {
        id: 1,
        title : "Roulette Maths",
        description: "Using probability to demonstrate the flaws in Martingale betting strategy",
        categories: [1],
        src: mathematics1Src,
        thumbnail: mathematics1Thumbnail
    },
    {
        id: 2,
        title : "Practical Trigonometry",
        description: "Using trigonometric principles to calculate height of tall objects",
        categories: [1],
        src: mathematics2Src,
        thumbnail: mathematics2Thumbnail
    },
    {
        id: 3,
        title : "Student Art Drawing 1",
        description: "Painting of Castle Wars by 7 year old past student",
        categories: [2],
        src: painting1Src,
        thumbnail: painting1Thumbnail
    },
    {
        id: 4,
        title : "Student Art Drawing 2",
        description: "Painting of a forest by 6 year old past student",
        categories: [2],
        src: painting2Src,
        thumbnail: painting2Thumbnail
    },
    {
        id: 5,
        title : "Student Art Drawing 3",
        description: "Painting of a boy dreaming about space by 10 year old past student",
        categories: [2],
        src: painting3Src,
        thumbnail: painting3Thumbnail
    },
    {
        id: 6,
        title : "Student Art Drawing 4",
        description: "Painting of lobsters by 9 year old past student",
        categories: [2],
        src: painting4Src,
        thumbnail: painting4Thumbnail
    },
    {
        id: 7,
        title : "Web Development Overview",
        description: "Why the need for HTML, CSS, Javascript",
        categories: [0],
        src: programming1Src,
        thumbnail: programming1Thumbnail
    },
    {
        id: 8,
        title : "Browser Snake Game",
        description: "Final project of making a snake game in the browser in action",
        categories: [0],
        src: programming2Src,
        thumbnail: programming2Thumbnail
    },
    {
        id: 9,
        title : "Source code",
        description: "Writing real code and debugging",
        categories: [0],
        src: programming3Src,
        thumbnail: programming3Thumbnail
    },
];