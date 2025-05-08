# The reproduction of `resolvePermissions` issue

## How to reproduce

0. Check puck.config.tsx

1. Start the server

```
bun install && bun run dev
```

2. Go to `/edit` route

3. Insert `HeadingBlock` (try to drag and drop it at `preview` area.)

4. Even if setting resolvePermission with `insert: false`, it's inserted.
