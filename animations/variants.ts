export const transition = {
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
  variants: {
    hidden: {
      opacity: 0
    },
    show: {
      opacity: 1,
      transition: {
        ease: 'easeInOut'
      }
    }
  }
}

export const fadeInPopup = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    scale: [0, 1, 1.05, 1],
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut'
    }
  }
}
