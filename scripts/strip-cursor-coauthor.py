import sys

msg = sys.stdin.read()
lines = [line for line in msg.splitlines(keepends=True) if "Co-authored-by: Cursor" not in line]
while lines and lines[-1].strip() == "":
    lines.pop()
out = "".join(lines)
if out and not out.endswith("\n"):
    out += "\n"
sys.stdout.write(out)
