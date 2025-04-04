import { Phone, FileText, ClipboardList, User, Stethoscope, CreditCard, Calendar } from "lucide-react"


export const steps = [
    {
      id: "step-1",
      icon: <Phone className="h-5 w-5" />,
      title: "STEP ONE",
      heading: "Initial Contact",
      content: "Contact our admissions office to begin your application process.",
      contactInfo: {
        name: "Mr. Micheal",
        phone: "+233 (0) 24 308 4874",
      },
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-2",
      icon: <FileText className="h-5 w-5" />,
      title: "STEP TWO",
      heading: "APPLICATION PROCESS - STEP TWO",
      content:
        "Currently No online form to fill. Please move on to the next step.",
      formLink: "",
      // contactInfo: {
      //   name: "Mrs. Susan Kotei Mensah",
      //   phone: "+233 (0) 24 308 4874",
      // },
      image:
        "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-3",
      icon: <ClipboardList className="h-5 w-5" />,
      title: "STEP THREE",
      heading: "Document Submission",
      content: "Submit all required documents including academic records and recommendations.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-4",
      icon: <User className="h-5 w-5" />,
      title: "STEP FOUR",
      heading: "Interview Process",
      content: "Schedule and complete your admission interview.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-5",
      icon: <Stethoscope className="h-5 w-5" />,
      title: "STEP FIVE",
      heading: "Assessment",
      content: "Complete required entrance assessments.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-6",
      icon: <CreditCard className="h-5 w-5" />,
      title: "STEP SIX",
      heading: "Financial Process",
      content: "Review and complete financial arrangements.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "step-7",
      icon: <Calendar className="h-5 w-5" />,
      title: "STEP SEVEN",
      heading: "Subject Selection",
      content:
        "If you are seeking admission for your child to the IGCSE or Advanced Level Programme, then you will need to fill in a Subject Choice Form. This can be done online.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]