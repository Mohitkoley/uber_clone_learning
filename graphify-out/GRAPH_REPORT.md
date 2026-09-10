# Graph Report - .  (2026-07-12)

## Corpus Check
- 70 files · ~82,138 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 113 nodes · 97 edges · 22 communities (21 shown, 1 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.9)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Project Dependencies|Project Dependencies]]
- [[_COMMUNITY_App Configuration|App Configuration]]
- [[_COMMUNITY_Dev Dependencies|Dev Dependencies]]
- [[_COMMUNITY_App Layout System|App Layout System]]
- [[_COMMUNITY_TypeScript Config|TypeScript Config]]
- [[_COMMUNITY_Android Config|Android Config]]
- [[_COMMUNITY_Metro Bundler|Metro Bundler]]
- [[_COMMUNITY_Agent Documentation|Agent Documentation]]
- [[_COMMUNITY_Screen Layout|Screen Layout]]

## God Nodes (most connected - your core abstractions)
1. `expo` - 13 edges
2. `scripts` - 7 edges
3. `Expo Router` - 6 edges
4. `web` - 4 edges
5. `README.md - Project Setup Guide` - 4 edges
6. `android` - 3 edges
7. `adaptiveIcon` - 3 edges
8. `experiments` - 3 edges
9. `compilerOptions` - 3 edges
10. `paths` - 3 edges

## Surprising Connections (you probably didn't know these)
- `CLAUDE.md - Agent Configuration` --references--> `AGENTS.md - Expo Version Warning`  [EXTRACTED]
  CLAUDE.md → AGENTS.md

## Import Cycles
- 1-file cycle: `metro.config.js -> metro.config.js`

## Communities (22 total, 1 thin omitted)

### Community 0 - "Project Dependencies"
Cohesion: 0.07
Nodes (27): dependencies, babel-preset-expo, expo, expo-constants, expo-device, expo-font, expo-glass-effect, expo-image (+19 more)

### Community 1 - "App Configuration"
Cohesion: 0.11
Nodes (18): reactCompiler, typedRoutes, expo, experiments, icon, ios, name, orientation (+10 more)

### Community 2 - "Dev Dependencies"
Cohesion: 0.13
Nodes (14): devDependencies, @types/react, typescript, main, name, private, scripts, android (+6 more)

### Community 3 - "App Layout System"
Cohesion: 0.24
Nodes (6): Expo Framework, Expo Go - Development Sandbox, Expo Router, File-based Routing Pattern, expo-router, README.md - Project Setup Guide

### Community 4 - "TypeScript Config"
Cohesion: 0.25
Nodes (7): compilerOptions, paths, strict, extends, include, @/*, @/assets/*

### Community 5 - "Android Config"
Cohesion: 0.40
Nodes (5): backgroundColor, foregroundImage, adaptiveIcon, predictiveBackGestureEnabled, android

### Community 6 - "Metro Bundler"
Cohesion: 0.67
Nodes (3): config, { getDefaultConfig }, { withNativeWind }

### Community 7 - "Agent Documentation"
Cohesion: 0.67
Nodes (3): AGENTS.md - Expo Version Warning, CLAUDE.md - Agent Configuration, Expo SDK v57

## Knowledge Gaps
- **67 isolated node(s):** `name`, `slug`, `version`, `orientation`, `icon` (+62 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Project Dependencies` to `Dev Dependencies`, `App Layout System`?**
  _High betweenness centrality (0.181) - this node is a cross-community bridge._
- **Why does `expo-router` connect `App Layout System` to `Project Dependencies`?**
  _High betweenness centrality (0.061) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Expo Router` (e.g. with `Expo Framework` and `File-based Routing Pattern`) actually correct?**
  _`Expo Router` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `name`, `slug`, `version` to the rest of the system?**
  _67 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Project Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07407407407407407 - nodes in this community are weakly interconnected._
- **Should `App Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `Dev Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._