const testsContext = (require as any).context(".", true, /_spec.tsx?$/);
testsContext.keys().forEach(testsContext);