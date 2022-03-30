export const log = `[WARN  ruler] Enumerated workload of 2480 terms
[WARN  ruler] Starting chunk of 2480 terms
[WARN  ruler] start of run_chunk : Egraph size: 1517
[WARN  ruler] running eqsat with 10 rules
[WARN  ruler] Stop reason: Some(IterationLimit(2))
[WARN  ruler] end of run_rewrites: egraph size: 137
[WARN  ruler] cvec matching...
[WARN  ruler] # unique cvecs: 59
[WARN  ruler] 53 candidate eqs
[WARN  ruler] Minimizing... threw away 25 rules, 28 / 53 remain
[WARN  ruler] Minimizing... threw away 10 rules, 8 / 53 remain
[WARN  ruler] Minimizing... threw away 2 rules, 16 / 18 remain
[WARN  ruler] Minimizing... threw away 4 rules, 11 / 18 remain
[WARN  ruler] Minimizing... threw away 0 rules, 10 / 18 remain
[WARN  ruler] Minimizing... threw away 0 rules, 9 / 18 remain
[WARN  ruler] Minimizing... threw away 0 rules, 8 / 18 remain
[WARN  ruler] Minimizing... threw away 0 rules, 7 / 18 remain
[WARN  ruler] Minimizing... threw away 1 rules, 5 / 18 remain
[WARN  ruler] Minimizing... threw away 2 rules, 2 / 18 remain
[WARN  ruler] Minimizing... threw away 0 rules, 1 / 18 remain
  [3, 0, -5, -10, -1]   (| ?a (| ?b ?c)) <=> (| ?c (| ?a ?b))
  [3, 0, -5, -10, -1]   (& ?a (& ?b ?c)) <=> (& ?c (& ?a ?b))
  [3, 0, -5, -10, -1]   (^ ?a (^ ?b ?c)) <=> (^ ?c (^ ?a ?b))
  [2, 0, -5, -6, -2]   (| ?a (& ?a ?b)) => ?a
  [2, 0, -5, -6, -2]   (& ?a (| ?a ?b)) => ?a
  [2, 0, -5, -8, -2]   (| ?a ?b) <=> (| ?a (^ ?a ?b))
  [2, 0, -5, -9, -3]   (& ?a (~ ?b)) <=> (& ?a (^ ?a ?b))
  [2, 0, -5, -9, -3]   (^ ?a (& ?a ?b)) <=> (& ?a (~ ?b))
  [2, 0, -5, -9, -4]   (^ ?a (| ?a ?b)) <=> (& ?b (~ ?a))
Learned 9 rules in 0.038979082 using 10 old rules.
`;
