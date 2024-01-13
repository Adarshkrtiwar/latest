export const pageAnime = {
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: "0.1",
      },
    },
  };
  export const topCodeAnime = {
    from: {
      y: "-100vw",
    },
    to: {
      y: "0",
      transition: {
        delay: "0.3",
      },
    },
  };
  export const bottomCodeAnime = {
    from: {
      y: "100vw",
    },
    to: {
      y: "0",
      transition: {
        delay: "0.3",
      },
    },
  };
  interface Transition {
    delay: string;
    type: string;
    stiffness: string;
  }
  
  interface Anime {
    y: string;
    transition?: Transition;
  }
  
  export const navbarAnime: { from: Anime; to: Anime } = {
    from: {
      y: "-20vw",
    },
    to: {
      y: "0",
      transition: {
        delay: "0.2",
        type: "spring",
        stiffness: "50",
      },
    },
  };
  