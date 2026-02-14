import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Mail, Linkedin, ExternalLink } from "lucide-react";

const rtlProjects = [
  {
    title: "Parameterized FIFO (Synchronous)",
    description:
      "Designed a synthesizable synchronous FIFO with configurable depth and data width using circular buffer architecture.",
    bullets: [
      "Parameterized DATA_WIDTH and DEPTH",
      "Full/Empty detection using pointer comparison",
      "Overflow & Underflow verification",
      "Structured simulation testbench"
    ],
    github: "https://github.com/Lakshmipujit/fifo_project"
  },
  {
    title: "UART Transmitter (FSM-Based)",
    description:
      "Implemented parameterized UART TX with precise baud rate control using FSM-driven architecture.",
    bullets: [
      "CLKS_PER_BIT derived from clock & baud rate",
      "States: IDLE → START → DATA → STOP",
      "LSB-first transmission",
      "Busy signal generation",
      "Waveform-based timing validation"
    ],
    github: "https://github.com/Lakshmipujit/UART_TX_Project"
  }
];

const softwareProjects = [
  {
    title: "Book Hub",
    description:
      "React-based book browsing application with dynamic search and UI state management.",
    bullets: [
      "Component-based architecture",
      "Search & filter functionality",
      "Responsive UI design"
    ],
    github: "https://github.com/Lakshmipujit/bookHub"
  },
  {
    title: "Mini Games",
    description:
      "Collection of interactive browser-based mini games built using React.",
    bullets: [
      "Game state management",
      "Reusable components",
      "Interactive UI logic"
    ],
    github: "https://github.com/Lakshmipujit/mini_games"
  },
  {
    title: "COVID-19 Dashboard",
    description:
      "Data visualization dashboard displaying COVID-19 statistics using API integration.",
    bullets: [
      "API data fetching",
      "Dynamic charts & UI updates",
      "Real-time data rendering"
    ],
    github: "https://github.com/Lakshmipujit/Covid19-Dashboard"
  },
  {
    title: "Movies App",
    description:
      "Movie browsing application with search and API-based content rendering.",
    bullets: [
      "REST API integration",
      "Dynamic routing",
      "Reusable UI components"
    ],
    github: "https://github.com/Lakshmipujit/Movies-App"
  }
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 md:px-16 py-12">
      {/* Hero */}
      <section className="max-w-6xl mx-auto mb-24">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          LAKSHMI PUJITHA CHAGANTI
        </motion.h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-6">
          Digital Systems & Software Engineer
        </p>

        <p className="text-gray-400 max-w-3xl leading-relaxed">
          Building reliable RTL designs and modern web applications. Strong
          foundation in digital architecture, combined with practical
          experience in React-based frontend development.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild className="rounded-2xl">
            <a href="C:/RESUME.pdf" download>
              Download Resume
            </a>
          </Button>

          <Button variant="outline" asChild className="rounded-2xl">
            <a href="https://github.com/Lakshmipujit" target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </a>
          </Button>

          <Button variant="outline" asChild className="rounded-2xl">
            <a href="www.linkedin.com/in/pujithachaganti" target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </Button>
        </div>
      </section>

     {/* Education Section */}
<section className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-semibold mb-6">Education</h2>
  <Card className="rounded-2xl bg-gray-900 border border-gray-800">
    <CardContent className="p-8">
      <p className="text-gray-300 mb-2 font-semibold">B.Tech – Electronics & Communication Engineering (2023–2027)</p>
      <p className="text-gray-400 mb-1">Rajiv Gandhi University of Knowledge and Technologies</p>
      <p className="text-gray-400">CGPA: 7.78</p>
    </CardContent>
  </Card>
</section>

{/* Skills Section */}
<section className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-semibold mb-6">Skills</h2>
  <div className="grid md:grid-cols-2 gap-6">
    <Card className="rounded-2xl bg-gray-900 border border-gray-800">
      <CardContent>
        <p className="text-gray-300 font-semibold mb-2">Digital Design / RTL</p>
        <ul className="text-gray-400 list-disc list-inside">
          <li>FIFO, UART, SPI implementations</li>
          <li>Simulation: ModelSim</li>
          <li>Synthesis: Vivado</li>
        </ul>
      </CardContent>
    </Card>
    <Card className="rounded-2xl bg-gray-900 border border-gray-800">
      <CardContent>
        <p className="text-gray-300 font-semibold mb-2">Software / Web</p>
        <ul className="text-gray-400 list-disc list-inside">
          <li>React.js / Node.js / SQL</li>
          <li>API integration & dynamic UI</li>
          <li>Component-based architecture</li>
        </ul>
      </CardContent>
    </Card>
  </div>
</section>

{/* Certificates Section */}
<section className="max-w-6xl mx-auto mb-24">
  <h2 className="text-3xl font-semibold mb-6">Certificates</h2>
  <div className="flex flex-wrap gap-6">
    <Card className="rounded-2xl bg-gray-900 border border-gray-800 w-64">
      <CardContent>
        <p className="text-gray-300 font-semibold mb-2">
          NxtWave – JavaScript, Python, Node.js, React.js, HTML/CSS, SQL
        </p>
      </CardContent>
    </Card>
    <Card className="rounded-2xl bg-gray-900 border border-gray-800 w-64">
      <CardContent>
        <p className="text-gray-300 font-semibold mb-2">FPGA Workshop</p>
      </CardContent>
    </Card>
  </div>
</section>


      {/* RTL Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-10">RTL Projects</h2>
        <div className="space-y-10">
          {rtlProjects.map((project) => (
            <Card key={project.title} className="rounded-2xl bg-gray-900 border border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  {project.bullets.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="rounded-2xl">
                  <a href={project.github} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Source Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software Projects */}
      <section className="max-w-6xl mx-auto mb-24">
        <h2 className="text-3xl font-semibold mb-10">Software Projects</h2>
        <div className="space-y-10">
          {softwareProjects.map((project) => (
            <Card key={project.title} className="rounded-2xl bg-gray-900 border border-gray-800">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  {project.bullets.map((point, index) => (
                    <li key={index}>• {point}</li>
                  ))}
                </ul>
                <Button variant="outline" asChild className="rounded-2xl">
                  <a href={project.github} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" /> View Source Code
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-6xl mx-auto border-t border-gray-800 pt-10">
        <h2 className="text-3xl font-semibold mb-6">Contact</h2>
        <div className="space-y-3 text-gray-300">
          <p className="flex items-center gap-2"><Mail size={16} /> lakshmipujithachaganti05@gmail.com</p>
          <p className="flex items-center gap-2"><Linkedin size={16} />www.linkedin.com/in/pujithachaganti</p>
        </div>
      </section>
    </div>
  );
}
