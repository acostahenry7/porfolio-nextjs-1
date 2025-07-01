import Approach from "@/components/Approach";
import Customers from "@/components/Customers";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import WorkExperience from "@/components/WorkExperience";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Customers />
        <WorkExperience />
        <Approach />
      </div>
    </main>
  );
}
