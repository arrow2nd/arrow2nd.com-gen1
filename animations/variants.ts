import { HTMLMotionProps, Variants } from 'framer-motion'

/** ページの遷移アニメーション */
export const pageTransition: HTMLMotionProps<'div'> = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}

/** リンクのホバー＆クリックアニメーション */
export const hoverLink: HTMLMotionProps<'span'> = {
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.9 },
  transition: { duration: 0.2, ease: 'easeInOut' }
}

/** リンクボタンのホバー＆クリックアニメーション */
export const hoverButton: HTMLMotionProps<'span'> = {
  ...hoverLink,
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
}

/** カードのホバー＆クリックアニメーション */
export const hoverCard: HTMLMotionProps<'div'> = {
  whileHover: { scale: 1.05, filter: 'brightness(0.75)' },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2, ease: 'easeInOut' }
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

/** フェードインで表示 */
export const fadeInUp: Variants = {
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
