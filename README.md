[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/Mavesto-droid/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/Mavesto-droid/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

# news-image-20261122 — THE WORLD

A one-page newspaper front page summing up the world news of
**Sunday, 22 November 2026**, for the make.fun `news-image-20261122` bounty
($100 in prizes).

## What the front page covers

- **Lead — NATO and Poland:** NATO Secretary General Mark Rutte vows in Warsaw
  to defend every inch of Polish territory, a day after Poland said Russia
  violated its airspace with what were probably two missiles and a drone.
- **Baltic Sea:** the Russian military-linked cargo ship Sparta II ablaze in
  the Gulf of Finland after a suspected Ukrainian drone strike; crew
  evacuated, the vessel drifting into Finnish waters.
- **Middle East:** Houthi ballistic missiles fired at Riyadh intercepted by
  the Saudi-led coalition, which also struck the Houthi-held port of Hodeidah.
- **Mexico:** top drug lord Fausto Isidro Meza Flores, "El Chapo Isidro",
  captured.
- **Iraq and India:** a fire at the Hartha power station near Basra kills at
  least 4 and injures 35; toxic alcohol in Manipur kills at least 11 and
  hospitalises more than 180.
- **In brief:** UN talks on autonomous weapons, COP31 in Antalya going into
  overtime, Trump's White House press conference after his China trip, and
  the FBI probing an apparent intrusion into its NCIC criminal database.

## How it works

The front page is a pre-rendered 1024x1024 PNG (`entry.png`). The program
`main.ts` is a Node 22 program using only the standard library. It checks
that `entry.png` is a real PNG (magic bytes) and within the 1-byte to 1-MiB
size limit, then copies it to `$MAKEFUN_OUTPUT_DIR/entry.png`
(default `/output`). It runs offline and writes identical bytes on every run.

## How to run

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
```

The output image lands at `out/entry.png` (169,334 bytes, 1024x1024 PNG).

## Files

- `main.ts` — the entry program (Node stdlib only)
- `entry.png` — the front-page image
- `README.md` — this file
- `LICENSE` — MIT licence

---

<sub>Entered on [make.fun](https://make.fun/?ref=j777ez47&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
