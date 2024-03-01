import Footer from "./Footer";

interface Job {
  title: string;
  category: string;
  availability: boolean;
}

const jobs: Job[] = [
  {
    title: "Web Developer",
    category: ".NET",
    availability: true,
  },
  {
    title: "Graphic Designer",
    category: "Branding",
    availability: false,
  },
  {
    title: "Content Writer",
    category: "SEO",
    availability: true,
  },
];

const HomePage = () => {
  return (
    <div className="home-page">
      <Footer />
    </div>
  );
};

export default HomePage;
