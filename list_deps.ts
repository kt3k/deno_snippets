type Module = {
  specifier: string
}
const decoder = new TextDecoder();
async function main(): Promise<number> {
  const arg = Deno.args[0];
  if (!arg) {
    return 1;
  }
  const p = Deno.run({
    cmd: [Deno.execPath(), "info", "--json", "--unstable", arg],
    stdout: 'piped',
    stderr: 'piped'
  });

  const [_status, stdout, _stderr] = await Promise.all([
    p.status(),
    p.output(),
    p.stderrOutput(),
  ]);
  const info = JSON.parse(decoder.decode(stdout)) as { modules: Module[] };
  info.modules.forEach((m) => {
    console.log(m.specifier);
  });
  return 0;
}

Deno.exit(await main());
