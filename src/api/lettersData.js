import { names } from "./names";

const lettersData = [
  {
    id: 1,
    title: "A Letter for You ❤️",
    from: names.firstName,
    to: names.secondName,
    date: "Oct 25, 2026",
    category: "Love",
    image: "/images/letters/letter-1.jpg",
    description:
      "No matter where we are, you are always in my heart...",
    content: `My dearest ${names.secondName},

No matter how far we are from each other, you are always close to my heart.

Every moment reminds me how lucky I am to have you in my life.

I hope we keep making beautiful memories together.

Forever yours. ❤️`,
  },

  {
    id: 2,
    title: "Distance Feels Lighter ❤️",
    from: names.secondName,
    to: names.firstName,
    date: "Oct 20, 2026",
    category: "Special",
    image: "/images/letters/letter-2.jpg",
    description:
      "Even in distance, you make my life brighter...",
    content: `My dearest ${names.firstName},

Even though distance keeps us apart, you always make me feel close to you.

You make my ordinary days beautiful.

I miss you and love you so much. ❤️`,
  },

  {
    id: 3,
    title: "Forever Together ❤️",
    from: names.firstName,
    to: names.secondName,
    date: "Oct 15, 2026",
    category: "Love",
    image: "/images/letters/letter-3.jpg",
    description:
      "I just want to say... I love you so much...",
    content: `My love,

I want to share every little happiness, every dream and every beautiful moment with you.

No matter what happens, I want us to stay together.

Forever and always. ❤️`,
  },

  {
    id: 4,
    title: "A Special Message ❤️",
    from: names.secondName,
    to: names.firstName,
    date: "Oct 10, 2026",
    category: "Special",
    image: "/images/letters/letter-4.jpg",
    description:
      "With you, every moment is special...",
    content: `My dearest ${names.firstName},

You are my favorite person and one of the most beautiful parts of my life.

Thank you for being you.

I love you. ❤️`,
  },
];

export default lettersData;