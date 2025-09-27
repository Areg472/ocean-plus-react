export interface Short {
  id: string;
  title: string;
  year: string;
  creator: string;
  shortLink: string;
  url: string;
  functionName: string;
}

export const shorts: Short[] = [
  {
    id: "carlos-birthday",
    title: "Carlos Birthday Gone Wrong",
    year: "February 23rd, 2024",
    creator: "Carlo Bear",
    shortLink: import.meta.env.VITE_SHORT_LINK_CARLOS_BIRTHDAY_GONE_WRONG,
    url: "/Carlos-Birthday-Gone-Wrong",
    functionName: "Carlosbirthdaygonewrong",
  },
  {
    id: "maskmas",
    title: "Maskmas",
    year: "December 24th, 2023",
    creator: "Carlo Bear",
    shortLink: import.meta.env.VITE_SHORT_LINK_MASKMAS,
    url: "/Maskmas",
    functionName: "Maskmas",
  },
  {
    id: "new-turkey-eve",
    title: "New Turkey Eve",
    year: "December 31st, 2024",
    creator: "Carlo Bear",
    shortLink: import.meta.env.VITE_SHORT_LINK_TURKEY,
    url: "/New-Turkey-Eve",
    functionName: "Turkey",
  },
  {
    id: "steamboat-willie",
    title: "Steamboat Willie",
    year: "November 18th, 1928",
    creator: "Walt Disney Studios",
    shortLink: import.meta.env.VITE_SHORT_LINK_STEAMBOAT_WILLIE,
    url: "/Steamboat-Willie",
    functionName: "Steamboatwillie",
  },
  {
    id: "random-green-blah-blah",
    title: "The Random Green Blah Blah Thing",
    year: "March 17th, 2025",
    creator: "Carlo Bear",
    shortLink: import.meta.env.VITE_SHORT_LINK_BLA_BLA,
    url: "/The-Random-Green-Blah-Blah-Thing",
    functionName: "BlaBla",
  },
];