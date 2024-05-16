const BoxChildVariants = {
    visible: {
      opacity: 1,
      borderRadius:0,
      y:0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
      },
    },
    hidden: { opacity: 0,borderRadius:1000,y:100 },
  };
  const BoxParentVariants = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    hidden: {
      opacity: 0,
    },
  };
  
  export { BoxChildVariants,BoxParentVariants};
  