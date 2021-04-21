# is_cached.ts

```
Usage: is_cached.ts <URL>

Check if the URL is cached in DENO_DIR.

Usually a script is cached when once loaded by deno, but some of urls (e.g. https://deno.land/x/dext@0.10.5/cli.ts ) can't be cached in DENO_DIR for unknown reason. This script is a tool for finding which can be cached and which can't.
```

# list_deps.ts

```
Usage: list_deps.ts <URL>

Lists all specifier which the URL depends on. Simplified version of `deno info <URL>`.
```
