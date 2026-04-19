<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Auto-Edit Mode Rules

- When auto-edit mode is enabled, never ask for permission to edit files — just edit them directly.
- Always communicate with the user in English.
- Always ask the user before proceeding with any non-trivial action (e.g., running builds, deleting files, pushing code). Do not assume — confirm first.
