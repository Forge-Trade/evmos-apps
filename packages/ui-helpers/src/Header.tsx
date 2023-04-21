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
    <div className="mb-3 m-3 sticky top-0 justify-between items-center flex text-pearl">
      <div className="flex items-center ">
        <Link
          href={EVMOS_PAGE_URL}
          rel="noreferrer"
          className="mr-6"
          aria-label="home"
        >
          <Image
            src={`/assets/images/ForgeIcon.png`}
            alt={"logo"}
            width={48}
            height={48}
          />
        </Link>
        <div className="flex gap-2">
          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Swap
          </span>
          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Pools
          </span>

          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Add Liquidity
          </span>
          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            Liquid Stake
          </span>
          <span
            className="py-2 text-white px-4"
            style={{ fontFamily: `"Inter custom", sans-serif` }}
          >
            IBC Assets
          </span>
        </div>
      </div>
      {walletConnectionButton}
    </div>
  );
};
