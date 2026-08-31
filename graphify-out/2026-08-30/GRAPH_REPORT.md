# Graph Report - .  (2026-08-30)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 145 nodes · 236 edges · 11 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `65c3a68a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Projects.tsx
- compilerOptions
- Contact.tsx
- devDependencies
- App.tsx
- dependencies
- compilerOptions
- package.json

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `GithubIcon()` - 7 edges
3. `SectionHeader()` - 7 edges
4. `Project` - 7 edges
5. `scrollToSection()` - 7 edges
6. `compilerOptions` - 7 edges
7. `Badge()` - 6 edges
8. `Button()` - 6 edges
9. `profileData` - 6 edges
10. `cn()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Badge()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/Badge.tsx → src/utils/helpers.ts
- `ProjectCardProps` --references--> `Project`  [EXTRACTED]
  src/components/ui/ProjectCard.tsx → src/types/index.ts
- `ProjectModalProps` --references--> `Project`  [EXTRACTED]
  src/components/ui/ProjectModal.tsx → src/types/index.ts
- `Footer()` --calls--> `scrollToSection()`  [EXTRACTED]
  src/components/layout/Footer.tsx → src/utils/helpers.ts
- `Navbar()` --calls--> `scrollToSection()`  [EXTRACTED]
  src/components/layout/Navbar.tsx → src/utils/helpers.ts

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "Projects.tsx"
Cohesion: 0.16
Nodes (16): Projects(), Timeline(), Badge(), BadgeProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps (+8 more)

### Community 1 - "compilerOptions"
Cohesion: 0.09
Nodes (22): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+14 more)

### Community 2 - "Contact.tsx"
Cohesion: 0.21
Nodes (13): Contact(), Button(), ButtonProps, GithubIcon(), IconProps, LinkedinIcon(), SectionHeader(), Toast() (+5 more)

### Community 3 - "devDependencies"
Cohesion: 0.10
Nodes (21): autoprefixer, devDependencies, autoprefixer, postcss, tailwindcss, @types/canvas-confetti, @types/node, @types/react (+13 more)

### Community 4 - "App.tsx"
Cohesion: 0.18
Nodes (11): App(), Footer(), Navbar(), NavbarProps, About(), GitHubStats(), Hero(), Skills() (+3 more)

### Community 5 - "dependencies"
Cohesion: 0.13
Nodes (15): canvas-confetti, clsx, framer-motion, lucide-react, dependencies, canvas-confetti, clsx, framer-motion (+7 more)

### Community 6 - "compilerOptions"
Cohesion: 0.20
Nodes (9): vite.config.ts, compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict (+1 more)

### Community 7 - "package.json"
Cohesion: 0.22
Nodes (8): name, private, scripts, build, dev, preview, type, version

## Knowledge Gaps
- **57 isolated node(s):** `name`, `private`, `version`, `type`, `dev` (+52 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.064) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.049) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _57 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._