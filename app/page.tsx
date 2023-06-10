import supabase from "@/utils/supabase";
import Container from "./components/Container";
import Section from "./components/Section";
import SetCard from "./components/SetCard";
import ShowCard from "./components/ShowCard";

export default async function Home() {
  const { data: sets } = await supabase.from("Sets").select();
  const { data: shows } = await supabase.from("Shows").select();

  return (
    <Container>
      <Section>
        <Section.Header title="Upcoming Shows" />
        <Section.Body variant="scroll">
          {shows?.map((show) => {
            return (
              <ShowCard
                key={show.id}
                name={show.name}
                location={show.location}
                date={show.date}
              />
            );
          })}
        </Section.Body>
      </Section>
      <Section>
        <Section.Header title="Your Setlists" />
        <Section.Body variant="stack">
          {sets?.map((set) => (
            <SetCard key={set.id} name={set.name} songCount={49} />
          ))}
        </Section.Body>
      </Section>
    </Container>
  );
}
