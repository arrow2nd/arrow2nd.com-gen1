import { HTMLMotionProps, Variants } from 'framer-motion'

/** ページ遷移アニメーション */
export const pageTransitionAnim: HTMLMotionProps<'div'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

/** リンクのホバー＆クリックアニメーション */
export const linkAnim: HTMLMotionProps<'a'> = {
  whileHover: { scale: 1.2 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.1, ease: 'circOut' }
}

/** フェードインでポップアップ */
export const fadeInPopup: Variants = {
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

export const hover = {
  scale: 1.1,
  filter: 'brightness(0.75)',
  transition: {
    duration: 0.3,
    ease: 'easeInOut'
  }
}
