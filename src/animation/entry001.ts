const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hidden: { opacity: 0, y: -50 },
  };
  const parentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  
  export { childVariants, parentVariants };
  