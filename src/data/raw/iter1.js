export const log = `[WARN  ruler] [[[ Iteration 1 ]]]
[WARN  ruler] Made layer of 66 nodes
[WARN  ruler] Starting chunk of 66 terms
[WARN  ruler] start of run_chunk : Egraph size: 59
[WARN  ruler] running eqsat with 0 rules
[WARN  ruler] Stop reason: Some(Saturated)
[WARN  ruler] end of run_rewrites: egraph size: 59
[WARN  ruler] cvec matching...
[WARN  ruler] # unique cvecs: 17
[WARN  ruler] 14 candidate eqs
[WARN  ruler] Minimizing... threw away 0 rules, 14 / 14 remain
[WARN  ruler] Minimizing... threw away 3 rules, 1 / 14 remain
[WARN  ruler] Minimizing... threw away 0 rules, 11 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 10 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 9 / 11 remain
[WARN  ruler] Minimizing... threw away 1 rules, 7 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 6 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 5 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 4 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 3 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 2 / 11 remain
[WARN  ruler] Minimizing... threw away 0 rules, 1 / 11 remain
  [2, 0, -3, -6, -1]   (& ?a ?b) <=> (& ?b ?a)
  [2, 0, -3, -6, -1]   (| ?a ?b) <=> (| ?b ?a)
  [2, 0, -3, -6, -1]   (^ ?a ?b) <=> (^ ?b ?a)
  [1, 0, -3, -4, -1]   ?a <=> (| ?a ?a)
  [1, 0, -3, -4, -1]   ?a <=> (& ?a ?a)
  [1, -1, -3, -4, -1]   (^ ?a ?a) => false
  [1, -1, -3, -4, -1]   ?a <=> (& true ?a)
  [1, -1, -3, -4, -1]   ?a <=> (| false ?a)
  [1, -1, -3, -4, -1]   ?a <=> (^ false ?a)
  [1, -1, -3, -5, -2]   (~ ?a) <=> (^ true ?a)
Learned 10 rules in 0.003392401 using 0 old rules.`;
