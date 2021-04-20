async function main(): Promise<number> {
  const arg = Deno.args[0];
  if (!arg) {
    console.error('Usage: is_cached.ts <url>');
    return 1;
  }
  console.log('Checking', arg)
  const p0 = Deno.run({
    cmd: [Deno.execPath(), 'cache', arg],
    stderr: 'piped',
    stdout: 'piped',
  });

  await Promise.all([p0.status(), p0.output(), p0.stderrOutput()]);

  const p1 = Deno.run({
    cmd: [Deno.execPath(), 'cache', arg],
    stderr: 'piped',
    stdout: 'piped',
  });

  const [_status, _stdout, stderr] = await Promise.all([p1.status(), p1.output(), p1.stderrOutput()]);

  if (stderr.length === 0) {
    console.log(`ok. ${arg} is cached`);
    return 0;
  } else {
    console.log(`Error: ${arg} is not cached`);
    return 1;
  }
}
Deno.exit(await main());
