import Particles from "react-tsparticles";
import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";

export function Main() {
  return (
    <Container>
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false, zIndex: -1 },
          detectRetina: true,
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: { enable: true, force: 40, smooth: 20 },
              },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 160, lineLinked: { opacity: 0.4 } },
              push: { quantity: 1 },
            },
          },
          particles: {
            number: {
              value: 35,
              density: { enable: true, area: 900 },
            },
            color: {
              value: ["#3B82F6", "#8B5CF6", "#00ff88"],
            },
            opacity: {
              value: 0.5,
              random: true,
              animation: { enable: true, speed: 0.6, minimumValue: 0.1, sync: false },
            },
            size: {
              value: 2,
              random: true,
              animation: { enable: false },
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none" as const,
              random: true,
              straight: false,
              outMode: "out" as const,
              attract: { enable: false },
            },
            links: {
              enable: true,
              distance: 140,
              color: "#3B82F6",
              opacity: 0.12,
              width: 1,
            },
            shadow: {
              enable: true,
              color: "#3B82F6",
              blur: 6,
            },
          },
          background: { color: "transparent" },
        }}
      />
      <Hero />
      <About />
      <Project />
      <Contact />
    </Container>
  );
}
