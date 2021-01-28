---
title: Concept
description: What are design tokens and why do we want to use them?
---

## Storytime!

Imagine you are having a pleasant day, working on one of the platforms for Bebat
and you are sipping from your usual high dose of caffeine.

The coffee in your cup starts to wriggle, like in the movie "Jurassic Park",
where the T-Rex approaches the vehicle and the puddles of water start to
tremble.

<!-- Gif -->

Your project manager, Karen, standing is standing next to you. Fear starts to
settle...

- **Karen**: _Some user tests show that the brand color, among other things,
  differ on each platform. Can you fix that?_
- **Developer**: _Yes, but I whould have to go through every platform and change
  those settings. Might take some time._

Bebat has 4 different platforms, developed in a different year, framework and by
a different team. After going through these platforms you notice a slight
hiccup:

```scss
// Platform 1
$brand-color: #afca0b;

// Platform 2
$primary: #acca2b;

// Platform 3
$main-color: #bfca1b;

// Platform 4
$sb-primary: #aeda0b;
```

The brand color of each platform differs and the variable name is not
consistent. This makes it hard to make the right decision. Let's check with one
of our favorite designers, Larry, just to be sure!

<!-- Gif -->

- **Developer**: _What is the correct Bebat brand hex color?_
- **Larry**: _I think it's `#AFCA0B`._
- **Developer**: _You think? Man, I need you to be sure..._
- **Larry**: _Based on their latest brand book, it should be. Unless they have
  udpated it._

The hex code received from Larry is different from all the other values. Which
means that for all the platforms this value needs to be changed to `#AFCA0B`.

As soon as your fingertips touch your keyboard, everything turns black around
you. You enter the zone, where no sound can pass through and time passes
differently.

```scss
// Platform 1
$brand-color: #afca0b;

// Platform 2
$primary: #afca0b;

// Platform 3
$main-color: #afca0b;

// Platform 4
$sb-primary: #afca0b;
```

After some tedious adjustments to a simple color value, Karen is standing next
to you:

- **Karen**: _All the headings on each platforms do not look the same. Can you
  fix that?_

You realise that you have fallen in a deep and dark hole and your mind goes
blank. Instinctively, your brain taps into the Matrix to start searching for a
solution...

What if you could just call the name of the color value, without worrying about
the udpates to the accompanying value? Well, that's essentialy what design
tokesn are for!

## What are Design Tokens?

> Design tokens are an agnostic way to store low-level values such as
> typography, colors and spacing. Centralizing these values allows to maintain a
> scalable and consistent system and share variables across multiple platforms.

A single organization building multiple platforms needs to feel and look the
same, while not slowing down the development team.

For example: Let's say you have a color that needs to be identical across a
bunch of platforms and you don't want to update each of these platforms
separatly if an update occurs.

<!-- Image -->

So instead of storing the color value in a variable somewhere in a separate,
well buried CSS file and duplicating this value in each app or website. They can
be stored in a format, reusable across tools, like JSON or YAML and in their
turn transformed into code which multiple preprocessors can understand, specific
to a certain project.

<!-- Image -->

Due to the simplicity of using a format like JSON or YAML will allow designers
to engage and work more with code and developers. These variables will
eventually be converted to a SCSS or JS file, based on the technology a product
uses.

<!-- Image -->

Essentialy, design tokens separate the concerns of using and choosing a value.
For example: a **designer chooses** the color and a **developer uses** that
color. Designers manage the hard-coded values and developers don't have to worry
if the color would update. This is of course not limited to colors only.

If these tokens are used across multiple platforms, then updating a value will
change that value for each platform, due to the centralized nature of these
tokens. There won't be any inconsistencies!

## Tokenizing variables

By collecting all the values that should be consistent across multiple platforms
for a brand you decrease the amount of decisions that must be made when
assigning values.

Variables simplify obscure values, but they don't lessen the gap between naming
and usage. By introducing design tokens you can lessen the amount of decisions
the developers have to make.

Designers choose which the colors, typography, ... are for the brand and its
digital platforms. Developers use these values and assign them to local
variables.

<!-- Image -->

## Global tokens

When creating the tokens, you should always start with:

- Colors
- Typography
- Spacing
- Icons

But don't stop there! Other values can be tokenized as well:

- Opacity
- Shadows
- Borders
- Breakpoints
- Transitions
- ...

<!-- Image -->

All these values are context-agnostic tokens. This means that they are not bound
to a certain context like `button-color` or `tag-background-color`. These values
are semantic and can be used in different situations. For example: `brand-color`
or `accent-color`.

These tokens should be linked to local variables within the project, also known
as alias tokens.

## Alias tokens

Alias tokens are tokens/variables within a project which utilize the global
tokens and assign their values to components. These variables are more
contextual and linked to a component.

So what do we do when different components use the same token? With alias tokens
we want to compartmentalize each component and assign a unique token. For
example:

- `button-primary-color`
- `checkbox-active-color`
- `radio-active-color`

<!-- Image -->

## When tokenizing?

When does it suffice to create a token of something? If something is used a
single or second time, then it's a no go. Using something a second time lacks
conviction and is hard to defend. But if something is repeated three times, it
fullfills the requirements to create a discussion and can it be considered
token-worthy!
