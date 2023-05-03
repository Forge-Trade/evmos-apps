// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Head from "next/head";
import AssetsTable from "../src/components/asset/table/AssetsTable";

import {
  ethereumClient,
  projectId,
  wagmiClient,
  WagmiConfig,
  Web3Modal,
  store,
  Snackbars,
  StoreType,
  getAllSnackbars,
} from "evmos-wallet";
import { Container } from "ui-helpers";
import { Provider, useDispatch, useSelector } from "react-redux";
import Script from "next/script";

import { StatefulHeader } from "../src/StatefulHeader";
function SnackbarsInternal() {
  const valueRedux = useSelector((state: StoreType) => getAllSnackbars(state));
  const dispatch = useDispatch();
  return <Snackbars valueRedux={valueRedux} dispatch={dispatch} />;
}
export default function Home() {
  const queryClient = new QueryClient();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <WagmiConfig client={wagmiClient}>
          <>
            <Head>
              <title>Forge</title>
              <link rel="icon" href="/favicon.ico" />

              <meta charSet="utf-8" />
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
              />
              <meta
                name="keywords"
                content="assets, evmos, evm, evm on cosmos, fast finality, delegated proof-of-stake, single-token representation, erc20 assets"
              />
              <link rel="canonical" href="https://app.forge.trade/#/assets" />

              {/* <!--  Essential META Tags --> */}
              <meta property="og:title" content="Forge" />
              <meta property="og:type" content="article" />
              <meta
                name="twitter:image"
                property="og:image"
                content="https://forge-dex.s3.amazonaws.com/forge.jpeg"
              />
              <meta
                name="twitter:image"
                property="og:image"
                content="https://forge-dex.s3.amazonaws.com/forge.jpeg"
              />
              <meta property="og:url" content="https://app.evmos.org/assets" />
              <meta name="twitter:card" content="summary_large_image" />

              {/* <!--  Non-Essential, But Recommended --> */}
              <meta
                property="og:description"
                content="Swap, earn, and build on the strongest Evmos community owned DEX."
              />
              <meta property="og:site_name" content="Evmos Assets" />
              <meta
                name="twitter:description"
                content="Swap, earn, and build on the strongest Evmos community owned DEX."
              />
              <meta name="twitter:site" content="@ForgeDEX" />

              <link rel="icon" href="/favicon.ico" />
              {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" /> */}
              <link rel="manifest" href="/manifest.json" />
            </Head>
            {/* Google tag (gtag.js)  */}
            <Script
              id="google-analytics"
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=G-TBJ303M1SC`}
            />
            <Script id="google-analytics-lz" strategy="lazyOnload">
              {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TBJ303M1SC');
        `}
            </Script>
            <main>
              <Container>
                <>
                  <SnackbarsInternal />
                  <StatefulHeader pageName="Assets" />
                  <div className="container mx-auto mt-10 mb-auto overflow-auto">
                    <AssetsTable />
                  </div>
                </>
              </Container>
            </main>
          </>
        </WagmiConfig>
      </QueryClientProvider>

      <Web3Modal
        projectId={projectId}
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        ethereumClient={ethereumClient}
      />
    </Provider>
  );
}
