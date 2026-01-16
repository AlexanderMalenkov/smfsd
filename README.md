# SMFSD — CLI FSD structure generator for React

Hello, frontend developer! 👋  
Do you, like me, enjoy using FSD (Feature-Sliced Design) in your projects but don’t want to waste time creating directories and files for every entity?

**SMFSD** — CLI tool that automates the creation of an FSD framework in your React project.

---

## 🚀 Install

Install it globally using npm:

```
npm install -g smfsd
```

## 💻 Usage

_smfsd_ supports all kinds of FSD layers:
| Layer     | Folder |
| --------- | ---------------- |
| `entity`  | `src/entities`   |
| `feature` | `src/features`   |
| `widget`  | `src/widgets`    |
| `page`    | `src/pages`      |
| `shared`  | `src/shared`     |

```
smfsd create entity user 
```
This way, the user entity was created.

```
src/entities/user/
├── index.ts
├── model/
│   └── types.ts
├── ui/
    └── User.tsx
    └── user.scss
```

Happy coding!