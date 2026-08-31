# Graph Report - .  (2026-08-31)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 151 nodes · 246 edges · 13 communities
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `fce3b485`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- devDependencies
- compilerOptions
- App.tsx
- Projects.tsx
- dependencies
- package.json
- Contact.tsx
- compilerOptions
- SectionHeader.tsx

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `GithubIcon()` - 8 edges
3. `SectionHeader()` - 7 edges
4. `profileData` - 7 edges
5. `Project` - 7 edges
6. `scrollToSection()` - 7 edges
7. `compilerOptions` - 7 edges
8. `scripts` - 6 edges
9. `Badge()` - 6 edges
10. `Button()` - 6 edges

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

## Communities (13 total, 0 thin omitted)

### Community 0 - "devDependencies"
Cohesion: 0.09
Nodes (23): autoprefixer, gh-pages, devDependencies, autoprefixer, gh-pages, postcss, tailwindcss, @types/canvas-confetti (+15 more)

### Community 1 - "compilerOptions"
Cohesion: 0.09
Nodes (22): DOM, DOM.Iterable, ES2020, src, compilerOptions, allowImportingTsExtensions, isolatedModules, jsx (+14 more)

### Community 2 - "App.tsx"
Cohesion: 0.22
Nodes (13): App(), Footer(), Navbar(), NavbarProps, GitHubStats(), Hero(), Projects(), GithubIcon() (+5 more)

### Community 3 - "Projects.tsx"
Cohesion: 0.19
Nodes (13): Timeline(), Badge(), BadgeProps, ProjectCard(), ProjectCardProps, ProjectModal(), ProjectModalProps, projectsData (+5 more)

### Community 4 - "dependencies"
Cohesion: 0.13
Nodes (15): canvas-confetti, clsx, framer-motion, lucide-react, dependencies, canvas-confetti, clsx, framer-motion (+7 more)

### Community 5 - "package.json"
Cohesion: 0.17
Nodes (11): homepage, name, private, scripts, build, deploy, dev, predeploy (+3 more)

### Community 6 - "Contact.tsx"
Cohesion: 0.30
Nodes (8): Contact(), Button(), ButtonProps, Toast(), ToastProps, cn(), copyToClipboard(), triggerConfetti()

### Community 7 - "compilerOptions"
Cohesion: 0.20
Nodes (9): vite.config.ts, compilerOptions, allowSyntheticDefaultImports, composite, module, moduleResolution, skipLibCheck, strict (+1 more)

### Community 8 - "SectionHeader.tsx"
Cohesion: 0.27
Nodes (6): About(), Skills(), SectionHeader(), SectionHeaderProps, skillCategories, SkillCategory

## Knowledge Gaps
- **61 isolated node(s):** `name`, `private`, `version`, `homepage`, `type` (+56 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `devDependencies` connect `devDependencies` to `package.json`?**
  _High betweenness centrality (0.073) - this node is a cross-community bridge._
- **Why does `dependencies` connect `dependencies` to `package.json`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _61 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `devDependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.08695652173913043 - nodes in this community are weakly interconnected._
- **Should `dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._