export const log = `[WARN  ruler] [[[ Iteration 1 ]]]
[WARN  ruler] Made layer of 66 nodes
[WARN  ruler] Starting chunk of 66 terms
[WARN  ruler] start of run_chunk : Egraph size: 59
[WARN  ruler] running eqsat with 10 rules
[WARN  ruler] Stop reason: Some(IterationLimit(2))
[WARN  ruler] end of run_rewrites: egraph size: 17
[WARN  ruler] cvec matching...
[WARN  ruler] # unique cvecs: 17
[WARN  ruler] 0 candidate eqs
[WARN  ruler] [[[ Iteration 2 ]]]
[WARN  ruler] Made layer of 372 nodes
[WARN  ruler] Starting chunk of 372 terms
[WARN  ruler] start of run_chunk : Egraph size: 341
[WARN  ruler] running eqsat with 10 rules
[WARN  ruler] Stop reason: Some(IterationLimit(2))
[WARN  ruler] end of run_rewrites: egraph size: 137
[WARN  ruler] cvec matching...
[WARN  ruler] # unique cvecs: 59
[WARN  ruler] 52 candidate eqs
[WARN  ruler] Minimizing... threw away 22 rules, 30 / 52 remain
[WARN  ruler] Minimizing... threw away 11 rules, 9 / 52 remain
[WARN  ruler] Minimizing... threw away 1 rules, 18 / 19 remain
[WARN  ruler] Minimizing... threw away 0 rules, 17 / 19 remain
[WARN  ruler] Minimizing... threw away 5 rules, 11 / 19 remain
[WARN  ruler] Minimizing... threw away 1 rules, 9 / 19 remain
[WARN  ruler] Minimizing... threw away 0 rules, 8 / 19 remain
[WARN  ruler] Minimizing... threw away 0 rules, 7 / 19 remain
[WARN  ruler] Minimizing... threw away 1 rules, 5 / 19 remain
[WARN  ruler] Minimizing... threw away 2 rules, 2 / 19 remain
[WARN  ruler] Minimizing... threw away 0 rules, 1 / 19 remain
  [3, 0, -5, -10, -1]   (& ?a (& ?b ?c)) <=> (& ?c (& ?a ?b))
  [3, 0, -5, -10, -1]   (^ ?a (^ ?b ?c)) <=> (^ ?c (^ ?a ?b))
  [3, 0, -5, -10, -1]   (| ?a (| ?b ?c)) <=> (| ?c (| ?a ?b))
  [2, 0, -5, -6, -2]   (| ?a (& ?a ?b)) => ?a
  [2, 0, -5, -6, -2]   (& ?a (| ?a ?b)) => ?a
  [2, 0, -5, -8, -2]   (| ?a ?b) <=> (| ?a (^ ?a ?b))
  [2, 0, -5, -9, -3]   (& ?a (~ ?b)) <=> (& ?a (^ ?a ?b))
  [2, 0, -5, -9, -3]   (^ ?a (& ?a ?b)) <=> (& ?a (~ ?b))
  [2, 0, -5, -9, -4]   (^ ?a (| ?a ?b)) <=> (& ?b (~ ?a))
Learned 9 rules in 0.026655296 using 10 old rules.
`;
