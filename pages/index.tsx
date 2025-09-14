import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Hobbies from '../components/Hobbies';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Head>
          <title>Martin Nguyen - Computer Science Student & Marathon Runner</title>
          <meta name="description" content="Portfolio of Martin Nguyen - Computer Science student at University of Toronto, AI enthusiast, hackathon veteran, and marathon runner." />
          <meta name="keywords" content="Martin Nguyen, Computer Science, University of Toronto, AI, Machine Learning, Marathon Running, Web Development, React, Next.js" />
          <meta name="author" content="Martin Nguyen" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          
          {/* Open Graph tags */}
          <meta property="og:title" content="Martin Nguyen - Computer Science Student & Marathon Runner" />
          <meta property="og:description" content="Portfolio showcasing my journey in computer science, AI projects, and marathon running achievements." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://martinnguyen.dev" />
          <meta property="og:image" content="https://martinnguyen.dev/images/og-image.jpg" />
          
          {/* Twitter Card tags */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Martin Nguyen - Computer Science Student & Marathon Runner" />
          <meta name="twitter:description" content="Portfolio showcasing my journey in computer science, AI projects, and marathon running achievements." />
          <meta name="twitter:image" content="https://martinnguyen.dev/images/og-image.jpg" />
          
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          
          {/* Theme color */}
          <meta name="theme-color" content="#0ea5e9" />
        </Head>

        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Projects />
          <Hobbies />
          <Achievements />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}