import React from "react";
import { generateVariation } from './abcUtils.jsx';

// Sample motifs for quick loading (from EchoComposer)
export const SAMPLE_MOTIFS = [
  {
    id: "ava8",
    title: "Ava's Theme",
    notation:
      "X:1\nT:Ava's Theme\nM:3/4\nL:1/8\nK:G\nQ:1/4=120\n|: 'G'D2 G2 B2 | 'D'A2 F2 D2 | 'Em'G2 B2 e2 | 'C'd2 c2 B2 |\n'G'D2 G2 B2 | 'D'A2 F2 D2 | 'Em'G2 'C'c2 'G'B2 | 'D'A6 :|\n|: 'G'd2 B2 G2 | 'D'F2 A2 d2 | 'Em'B2 G2 E2 | 'C'C2 E2 G2 |\n'G'D2 G2 B2 | 'D'A2 F2 D2 | 'Em'G2 'C'c2 'G'B2 | 'D'A6 :|",
  },
  {
    id: "ritual1",
    title: "Ritual Passage",
    notation:
      "X:1\nT:Ritual Passage\nM:4/4\nL:1/8\nK:Dm\nQ:1/4=90\n|: 'Dm'D2 E2 F2 G2 | 'A'A2 ^C2 E2 A2 | 'Bb'B2 A2 G2 F2 | 'A'E8 |\n'Dm'F2 G2 A2 d2 | 'C'c2 B2 A2 G2 | 'Bb'F2 D2 'A'E2 ^C2 | 'Dm'D8 :|",
  },
  // ...add more as needed...
];
