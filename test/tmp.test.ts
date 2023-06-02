import { Miniflare } from "miniflare";
import anyTest, { ExecutionContext, TestFn } from "ava";
import { UnstableDevWorker } from "wrangler";

export type TestContext = {
  miniflare: Miniflare;
  worker: UnstableDevWorker;
  workerEndpoint: string;
};

export const test = anyTest as TestFn<TestContext>;

test("tmp", async (t) => {
  t.context.miniflare = new Miniflare({
    // envPath: true,
    // packagePath: true,
    // wranglerConfigPath: true,
    modules: true,
    scriptPath: "./build/worker/shim.mjs",
  });

  t.context.workerEndpoint = "http://localhost:8787";

  const response = await t.context.miniflare.dispatchFetch(
      t.context.workerEndpoint,
      {
        method: "GET",
        headers: {
          "Cf-Debug": "1",
        }
      }
  );

  t.true(response.status === 200);
});
