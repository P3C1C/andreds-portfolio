export type SuitIcon = 'club' | 'diamond' | 'heart' | 'spade';

export interface AboutHighlight {
  icon: SuitIcon;
  title: string;
  text: string;
}

export const aboutHighlights: readonly AboutHighlight[] = [
  {
    icon: 'club',
    title: 'Why do I do this',
    text: '...to help people, because I believe a successful project must deliver the right message to the right person, as simply as possible.',
  },
  {
    icon: 'diamond',
    title: 'What’s my style',
    text: "Good design is communication first, and aesthetics second. This doesn't mean sacrificing beauty, but creating solutions that are smart, efficient, and enjoyable to use.",
  },
  {
    icon: 'heart',
    title: 'Who am I',
    text: 'I love being outdoors, sports, traveling, taking time to reflect and enjoying the company of the people I care about.',
  },
  {
    icon: 'spade',
    title: 'Other stuff I like',
    text: 'Gaming, cats, photography, movies, anime, edc and much more!',
  },
];

export type CardVariant = 'plain' | 'filled' | 'outlined';

export interface AboutStat {
  value: string;
  label: string;
  detail?: string;
}

export interface AboutValue {
  title: string;
  text: string;
  variant: CardVariant;
}

export type InterestIcon = 'basketball' | 'hiking' | 'frisbee' | 'strategy' | 'rpg' | 'controller';

export interface AboutInterest {
  icon: InterestIcon;
  title: string;
  detail: string;
  variant: CardVariant;
}

export const whyMe = {
  intro: "It’s a fair question! Let me share a bit more about how I work and what I value, and I'll let you be the judge.",
  stats: [
    { value: '47+', label: 'Projects shipped', detail: 'always on time' },
    { value: '4.9/5', label: 'Verified clients ratings', detail: 'with 21+ reviews' },
  ],
  values: [
    {
      title: 'Respect',
      text: "I believe no good work happens without respect. Whether I'm collaborating with teammates or clients, I prioritize active listening and clarity over unreasonable expectations. We don't have to be friends to work together, but a baseline of mutual respect is always required.",
      variant: 'filled',
    },
    {
      title: 'Communication',
      text: 'Listening is probably my most used tool. I focus on reading between the lines with clients and teammates alike—hearing not just the words, but understanding the core need and where we need to go.',
      variant: 'outlined',
    },
    {
      title: 'Care',
      text: 'Putting real care into a project takes time, energy, and research, but it’s the only way to build something genuinely useful and functional. I always strive for that sweet spot where efficiency meets the care needed to make a real impact.',
      variant: 'outlined',
    },
    {
      title: 'Time',
      text: "Giving a project the right time adds real value to the final result. But above all, I value punctuality. Hitting deadlines requires a realistic understanding of my own capabilities and the ability to proactively manage the workflow, making sure materials and decisions from the client's side stay on schedule too.",
      variant: 'filled',
    },
  ],
} as const satisfies { intro: string; stats: readonly AboutStat[]; values: readonly AboutValue[] };

export const outsideWork = {
  intro: 'Since I’m not entirely powered by pixels and deadlines, I actually have a life offline. Here’s what I love doing when I’m not designing.',
  travel: {
    stat: { value: '13+', label: 'Countries visited' },
    photoAlt: 'Rock formations and fairy chimneys in Cappadocia seen through the opening of a sandstone cave',
    countries: {
      title: 'Countries visited',
      text: 'Italy, Spain, Portugal, France, Germany, Austria, Scotland, Norway, Turkey, Malta, Slovenia, Philippines, China & more to come...',
    },
    reflection:
      'For me, traveling is a must. Getting to know different cultures is the best way to challenge my own assumptions, collect new points of view, and honestly, just understand the world a little better.',
  },
  sports: [
    { icon: 'basketball', title: 'Basketball', detail: '12 years', variant: 'plain' },
    { icon: 'hiking', title: 'Hiking', detail: 'forever :)', variant: 'filled' },
    { icon: 'frisbee', title: 'Ultimate frisbee', detail: '1 year', variant: 'plain' },
  ],
  games: [
    { icon: 'strategy', title: 'Call of Duty', detail: 'since MW2', variant: 'filled' },
    { icon: 'rpg', title: 'Baldur’s Gate 3', detail: 'with friends', variant: 'plain' },
    { icon: 'controller', title: 'Roguelike', detail: 'favourite genre', variant: 'filled' },
  ],
} as const satisfies {
  intro: string;
  travel: {
    stat: AboutStat;
    photoAlt: string;
    countries: { title: string; text: string };
    reflection: string;
  };
  sports: readonly AboutInterest[];
  games: readonly AboutInterest[];
};
