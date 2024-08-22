import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="m-auto max-w-[72rem]">
      <section className=" py-28 px-10 max-w-[800px] flex flex-col justify-between">
        <h1 className=" text-4xl py-4 font-bold ">
          Budujemy strony internetowe <span>dla&nbsp;Ciebie</span>, tak żeby
          pracowały <span>za&nbsp;Ciebie</span>.
        </h1>
        <p className="text-xl pb-6">
          Oferujemy eleganckie strony, które efektywnie przyciągają klientów.
          Wybierz jakość, która pracuje na Twój sukces.
        </p>
        <Button className="w-fit"> Skontaktuj się</Button>
      </section>
      <section className="flex gap-12 justify-between">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Oszczędzasz czas </CardTitle>
          </CardHeader>
          <CardContent>
            Umieszczenie cennika, grafiku czy innych informacji na temat firmy
            jest jedną z kluczowych funkcji stron internetowych.
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Wzbudzasz zaufanie</CardTitle>
          </CardHeader>
          <CardContent>
            Strona pozwala klientom lepiej zapoznać się z firmą i z jej
            osiągnieciami przez to zwiększa jej wiarygodność.
          </CardContent>
        </Card>
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Zwiększasz zasięgi</CardTitle>
          </CardHeader>
          <CardContent>
            Dzięki SEO możemy polepszyć pozycjonowanie się strony w
            wyszukiwarkach jak Google, co pozwala pasywnie przyciągać klientów.
          </CardContent>
        </Card>
      </section>
      <section></section>
    </main>
  );
}
