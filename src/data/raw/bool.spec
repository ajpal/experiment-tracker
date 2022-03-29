(grammar expr
  (~ expr)
  (& expr expr)
  (| expr expr)
  (^ expr expr))

(workload nops1.terms
  (enumerate expr)
  (target (nops 1))
  (bases
    (expr
      true
      false
      a
      b
      c)))

(workload nops2.terms
  (enumerate expr)
  (target (nops 2))
  (bases
    (expr
      true
      false
      a
      b
      c)))

(ruleset nops1.rules
  (workload nops1.terms)
  (explorer "cargo run --bin bool --release -- synth"))

(ruleset nops2.rules
  (prior-rules nops1.rules)
  (workload nops2.terms)
  (explorer "cargo run --bin bool --release -- synth"))