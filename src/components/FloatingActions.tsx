import { motion, AnimatePresence } from 'framer-motion'
import { InstagramIcon } from './Icons'

interface FloatingActionsProps {
  toastMessage: string | null
  onContactClick: (msg?: string) => void
}

export function FloatingActions({ toastMessage, onContactClick }: FloatingActionsProps) {
  return (
    <>
      {/* Floating Instagram & Direct Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
        {/* Floating Bubble */}
        <motion.button
          onClick={() => onContactClick('Olá Matheus! Vi seu site e gostaria de saber mais sobre as oportunidades em São Lourenço.')}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#fd5949] via-[#d6249f] to-[#285AEB] text-white shadow-2xl flex items-center justify-center relative group"
          aria-label="Abrir Instagram do Matheus Dias"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-pink-500/30 animate-ping pointer-events-none" />
          
          <InstagramIcon className="w-7 h-7 relative z-10 text-white" />

          {/* Tooltip on hover */}
          <span className="absolute right-16 bg-[#0B231B] text-[#E2C882] text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#C89B3C]/30 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Falar no Instagram
          </span>
        </motion.button>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 30, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 30, x: '-50%' }}
            className="fixed bottom-24 left-1/2 z-50 bg-[#0B231B]/95 text-[#F6F2E8] border border-[#C89B3C]/50 px-6 py-3.5 rounded-xl shadow-2xl text-xs sm:text-sm font-medium backdrop-blur-md flex items-center gap-3 text-center max-w-[90vw]"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#C89B3C] animate-pulse" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
