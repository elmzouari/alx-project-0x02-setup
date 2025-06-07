import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const About = () => {
  return (
    <>
      <section>
        <Header />

         <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>
      <Button label="Small Rounded" size="small" shape="rounded-sm" />
      <Button label="Medium Rounded" size="medium" shape="rounded-md" />
      <Button label="Large Circle" size="large" shape="rounded-full" />
    </div>
      </section>
    
    </>
  );
}

export default About;