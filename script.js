let cur = "0";     // number being typed
let prev = null;   // left operand
let op = null;     // pending operator
let fresh = false; // next digit starts a new number

function compute(a, o, b) {
  let r;
  if (o === "+") r = a + b;
  if (o === "-") r = a - b;
  if (o === "*") r = a * b;
  if (o === "/") r = b === 0 ? NaN : a / b;
  return Number(r.toPrecision(12)); // fixes 0.1 + 0.2
}

function digit(d) {
  if (fresh) { cur = "0"; fresh = false; }
  cur = cur === "0" ? d : cur + d;
}

function operator(o) {
  if (op !== null && !fresh) {
    prev = compute(prev, op, parseFloat(cur)); // chain: 2 + 3 +
    cur = String(prev);
  } else if (op === null) {
    prev = parseFloat(cur);
  }
  op = o;
  fresh = true;
}

function equals() {
  if (op === null) return;
  cur = String(compute(prev, op, parseFloat(cur)));
  prev = null; op = null; fresh = true;
}

// One click listener handles every button
document.getElementById("keys").addEventListener("click", e => {
  const btn = e.target.closest("button");
  if (!btn) return;
  // read btn.dataset.k, call digit/operator/equals, then redraw
});
