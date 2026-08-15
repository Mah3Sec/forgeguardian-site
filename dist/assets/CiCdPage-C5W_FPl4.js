import{j as e,a5 as a}from"./index-DAqz2Mjp.js";const o=`name: Security Scan
on: [push, pull_request]
jobs:
  forgeguardian:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Install ForgeGuardian
        run: curl -sSfL https://forgeguardian.dev/install.sh | sh
      - name: Scan dependencies
        run: fgctl scan . --ci --fail-on=high --format sarif > fg-results.sarif
      - name: Upload SARIF
        uses: github/codeql-action/upload-sarif@v3
        with:
          sarif_file: fg-results.sarif`,l=`forgeguardian:
  image: alpine:latest
  script:
    - curl -sSfL https://forgeguardian.dev/install.sh | sh
    - fgctl scan . --ci --fail-on=high
  artifacts:
    reports:
      sast: fg-results.json`,r=`# In your Makefile:
security:
	fgctl scan . --ci --fail-on=critical

security-full:
	fgctl scan . --verbose --format sarif > results.sarif`;function i(){return e.jsxs("div",{className:"p-6 space-y-6 max-w-3xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(a,{size:20,style:{color:"var(--color-indigo)"}}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold font-mono",style:{color:"var(--fg)"},children:"CI/CD Integration"}),e.jsx("p",{className:"text-sm mt-0.5",style:{color:"var(--color-muted)"},children:"Integrate ForgeGuardian into your CI/CD pipelines for continuous supply chain security."})]})]}),[{title:"GitHub Actions",lang:"yaml",code:o},{title:"GitLab CI",lang:"yaml",code:l},{title:"Makefile",lang:"make",code:r}].map(s=>e.jsxs("div",{className:"rounded-lg",style:{background:"var(--surface)",border:"1px solid rgba(255,255,255,0.06)",overflow:"hidden"},children:[e.jsxs("div",{style:{padding:"0.625rem 0.875rem",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontSize:"0.75rem",fontWeight:600,color:"var(--fg)"},children:s.title}),e.jsx("span",{style:{fontSize:"0.65rem",color:"var(--color-muted)",fontFamily:"var(--font-mono)"},children:s.lang})]}),e.jsx("pre",{style:{padding:"0.875rem",fontSize:"0.72rem",fontFamily:"var(--font-mono)",color:"var(--color-safe)",overflowX:"auto",margin:0,lineHeight:1.6,whiteSpace:"pre"},children:s.code})]},s.title)),e.jsxs("div",{className:"rounded-lg p-4",style:{background:"var(--surface)",border:"1px solid rgba(255,255,255,0.06)"},children:[e.jsx("p",{className:"text-xs font-mono font-bold mb-2",style:{color:"var(--color-muted)"},children:"CI-OPTIMIZED FLAGS"}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("code",{className:"text-xs block",style:{color:"var(--color-safe)"},children:"--ci              # Quiet mode + SARIF output + fail-on=high"}),e.jsx("code",{className:"text-xs block",style:{color:"var(--color-safe)"},children:"--fail-on=critical # Only fail pipeline on critical findings"}),e.jsx("code",{className:"text-xs block",style:{color:"var(--color-safe)"},children:"--format sarif    # SARIF 2.1.0 for GitHub/GitLab code scanning"}),e.jsx("code",{className:"text-xs block",style:{color:"var(--color-safe)"},children:"--prod-only       # Skip dev/test dependencies"})]})]})]})}export{i as CiCdPage};
