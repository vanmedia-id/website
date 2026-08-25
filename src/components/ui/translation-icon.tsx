import {
  Briefcase,
  Calculator,
  Calendar,
  CircleQuestionMark,
  Clock,
  DollarSign,
  GraduationCap,
  HelpCircle,
  Home,
  MapPin,
  MessageSquare,
  PhoneCall,
  Send,
  Smartphone,
  Wifi,
  Zap,
} from 'lucide-react'

type TranslationIconProps = {
  name: string
  className?: string
}

// prettier-ignore
function TranslationIcon({ name, className }: TranslationIconProps) {
  switch (name) {
    case 'briefcase'     : return <Briefcase className={className} />
    case 'calendar'      : return <Calendar className={className} />
    case 'calculator'    : return <Calculator className={className} />
    case 'clock'         : return <Clock className={className} />
    case 'dollar-sign'   : return <DollarSign className={className} />
    case 'graduation-cap': return <GraduationCap className={className} />
    case 'home'          : return <Home className={className} />
    case 'help-circle'   : return <HelpCircle className={className} />
    case 'map-pin'       : return <MapPin className={className} />
    case 'message-square': return <MessageSquare className={className} />
    case 'phone-call'    : return <PhoneCall className={className} />
    case 'send'          : return <Send className={className} />
    case 'smartphone'    : return <Smartphone className={className} />
    case 'wifi'          : return <Wifi className={className} />
    case 'zap'           : return <Zap className={className} />
    default              : return <CircleQuestionMark className={className} /> 
  }
}

export { TranslationIcon }
