# Open Source Ecosystem License Review

## Ecosystem Repositories
- **kr-safety-regs**: MIT License
- ~~**legalize-kr**: MIT License~~ — server removed 2026-08-26 (superseded by the k-law skill)
- ~~**mcp-kr-legislation**: Apache 2.0 License~~ — server removed 2026-08-26 (superseded by the k-law skill)

## Assessment
All reviewed repository licenses are **enterprise-compatible** permissive licenses.
They do not contain any "viral" or copyleft clauses (such as GPL), meaning they will not force the host system to open-source its proprietary codebase. 

Furthermore, our architectural strategy of **Process Isolation (via MCP stdio)** ensures that ecosystem components run in separate processes and communicate purely through standard I/O (JSON-RPC over stdio). This creates an airtight legal boundary, ensuring perfect safety for integration into the Safety OS enterprise environment.
