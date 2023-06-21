import { Button, Heading, TextContent } from "ui";

export default function Page() {

  return (
    <>
      <main className="text-center mt-5">
        <Heading tag='h1' content='Article listing page - Heading Component' />
        <TextContent className="block  mx-5">
          <div> This was just a sample body copy </div>
          <Heading tag='h2' content='Small h2 - Heading Component' />
          <div> This was just a sample body copy </div>
          <Heading tag='h3' content='Small h3 - Heading Component' />
        </TextContent>
        <br /> <br />
        <Button bleed="auto" className="capitalize" size="sm" type="primary" title="This is a Sample Button"  />
      </main>
    </>
  );
}
