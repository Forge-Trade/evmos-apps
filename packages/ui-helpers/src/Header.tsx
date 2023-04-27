// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import Link from "next/link";
import { Dispatch, SetStateAction, useCallback } from "react";
import { EVMOS_PAGE_URL } from "constants-helper";
import Image from "next/image";

export const Header = ({
  pageName,
  setShowSidebar,
  walletConnectionButton,
}: {
  pageName: string;
  setShowSidebar?: Dispatch<SetStateAction<boolean>>;
  walletConnectionButton?: JSX.Element;
}) => {
  const handleClick = useCallback(() => {
    if (setShowSidebar !== undefined) {
      setShowSidebar(true);
    }
  }, [setShowSidebar]);

  return (
    <div className="mb-3 p-3 sticky top-0 justify-between items-center flex text-pearl">
      <div className="flex items-center ">
        <Link
          href={EVMOS_PAGE_URL}
          rel="noreferrer"
          className="mr-6"
          aria-label="home"
        >
          <Image
            src={`/images/ForgeIcon.png`}
            alt={"logo"}
            width={48}
            height={48}
          />
        </Link>
        <div className="flex gap-2">
          <a
            href="https://app.forge.trade/swap"
            rel="noopener noreferrer"
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Swap
          </a>
          <a
            href="https://app.forge.trade/pools"
            rel="noopener noreferrer"
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Pools
          </a>

          <a
            href="https://app.forge.trade/pool"
            rel="noopener noreferrer"
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Add Liquidity
          </a>
          <a
            className="py-2 text-white px-4"
            href="https://app.stride.zone"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Liquid Stake
          </a>
          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Assets
          </span>
        </div>
      </div>
      {walletConnectionButton}
    </div>
  );
};
