# The Checkout That Checked Out Nothing

> I asked it to add a null check to the checkout handler, and it wrapped the whole handler in try-catch, swallowed every error, and returned 200 OK with an empty cart. Customers checked out nothing for six hours, and every single order looked successful.

A one-line postmortem for [The Postmortem That Made Us Laugh](https://make.fun/competitions/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3): a program that writes the story above to `/output/entry.txt`.

![Bounty](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3.svg)
![Rank](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/muhammadaldy198/postmortem-laugh/rank.svg)
![Reward](https://make.fun/badge/u-swift-raven-16-the-postmortem-that-made-us-laugh-268457a3/muhammadaldy198/postmortem-laugh/reward.svg)

Referral code: `3p0axm2p`

## Run

```sh
node main.ts
```

Reads nothing, writes one file: `/output/entry.txt` (252 characters, two sentences).
