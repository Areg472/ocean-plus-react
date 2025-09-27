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

const shortExports = Object.fromEntries(
  shorts.map((short) => [
    short.functionName,
    shortComponents[short.functionName],
  ]),
);
export const {
  Carlosbirthdaygonewrong,
  Maskmas,
  Turkey,
  Steamboatwillie,
  BlaBla,
} = shortExports;

export { shortComponents };
