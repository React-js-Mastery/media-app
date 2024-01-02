import { nanoid } from "nanoid";

export default {
  comments: [
    {
      id: nanoid(),
      userName: "pawan-dhangar",
      isAnonymous: false,
      commentText:
        "I think AI like ChatGPT will revolutionize the economy, society, and our lives for the     better. It will accelerate scientific research, amplify our creative powers, and make our  labor more productive.",
    },
    {
      id: nanoid(),
      userName: "SallyTheTechSkeptic",
      isAnonymous: true,
      commentText:
        "I agree they will revolutionize all of those things — but not for the better. They will    empower the companies that control them, and disempower the people they put out of work.",
    },
    {
      id: nanoid(),
      userName: "shivay",
      isAnonymous: false,
      commentText:
        "I think it's too early to tell. It's hard to predict the long-term effects of a technology    that's still in its infancy.",
    },
    {
      id: nanoid(),
      userName: "cmhq",
      isAnonymous: false,
      commentText:
        "I'm not sure where I stand, because right now, the tech still seems like a gimmick. I think we're orders of magnitude away from the kind of 'revolutionary' changes that both its defenders and critics have in mind.",
    },

    {
      id: nanoid(),
      userName: "divya-obrooi",
      isAnonymous: false,
      commentText:
        "I think ChatGPT is a great tool for creativity and self-expression. It's a fun way to explore ideas and share them with others.",
    },
    {
      id: nanoid(),
      userName: "david",
      isAnonymous: false,
      commentText:
        "I think it's a really cool technology, but I'm worried about the potential for abuse. I'm not sure how we can prevent it from being used for evil.",
    },
    {
      id: nanoid(),
      userName: "alone",
      isAnonymous: true,
      commentText:
        "AI is going to destroy humanity. It's only a matter of time before it becomes self-aware and decides to wipe us out.",
    },
    {
      id: nanoid(),
      userName: "shivani-rao",
      isAnonymous: false,
      commentText:
        "I think it's a good thing. It will make our lives easier and more convenient, and it will free up our time for more important things.",
    }
  ],
  image1: "./images/robot.jpg",
  image2: "./images/code.jpg",
  mainQuestion: "ChatGPT: Good or Bad?",
  metaData: {
    userName: "ajay-dhangar",
    profilePic: "https://github.com/ajay-dhangar.png",
    timeOfPost: new Date().toLocaleString([], {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    filedUnder: "Science & Technology",
    views: 1132,
  },
  subQuestions: [
    {
      text: "Is it a step toward achieving Moore's Law for Everything?",
      link: "https://moores.samaltman.com/",
    },
    {
      text: "Is it a dead-end for AI research?",
      link: "https://nautil.us/deep-learning-is-hitting-a-wall-238440/",
    },
    {
      text: "Is it the shape of things to come?",
      link: "https://english.elpais.com/science-tech/2023-01-31/chatgpt-is-just-the-beginning-artificial-intelligence-is-ready-to-transform-the-world.html",
    },
    {
      text: "Is it a stochastic parrot?",
      link: "https://dl.acm.org/doi/pdf/10.1145/3442188.3445922",
    },
    {
      text: "Will it lead to unemployment?",
      link: "https://www.cnet.com/science/chatgpt-is-a-stunning-ai-but-human-jobs-are-safe-for-now/",
    },
    {
      text: "Should organizations ban it, like Stack Overflow did?",
      link: "https://meta.stackoverflow.com/questions/421831/temporary-policy-chatgpt-is-banned",
    },
  ],
};
