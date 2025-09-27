import { ShortPage } from "@/components/ShortPage.tsx";
import { shorts } from "@/data/shorts.ts";

const shortComponents: Record<string, () => JSX.Element> = {};

shorts.forEach((short) => {
  shortComponents[short.functionName] = () => (
    <ShortPage
      year={short.year}
      shortLink={short.shortLink}
      creator={short.creator}
      title={short.title}
    />
  );
});

export { shortComponents };

export default shortComponents;
