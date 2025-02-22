// Copyright Tharsis Labs Ltd.(Evmos)
// SPDX-License-Identifier:ENCL-1.0(https://github.com/evmos/apps/blob/main/LICENSE)

import { useSelector } from "react-redux";
import { useEpochDay } from "../../../internal/common/api/hooks/useEpochDay";
import { useEvmosBalance } from "../../../internal/staking/functionality/hooks/useEvmosBalance";
import { useStakingInfo } from "../../../internal/staking/functionality/hooks/useStakingInfo";
import {
  TopBarItem,
  Countdown,
  TopBarContainer,
  ConfirmButton,
} from "ui-helpers";
import { useRewards } from "../modals/hooks/useRewards";

import { StoreType } from "evmos-wallet";
import { convertFromAtto } from "helpers";
import { FULL_DAY_MINUS_ONE_SECOND } from "constants-helper";

const TopBarStaking = () => {
  const value = useSelector((state: StoreType) => state.wallet.value);
  const { totalDelegations, totalUndelegations, totalRewards } =
    useStakingInfo();
  const { evmosBalance } = useEvmosBalance();
  const { epochs } = useEpochDay();
  const { handleConfirmButton } = useRewards(value);

  return (
    <TopBarContainer>
      <>
        <TopBarItem
          text="Available"
          value={`${Number(convertFromAtto(evmosBalance)).toFixed(2)} EVMOS`}
        />
        <TopBarItem
          text="Total Staked"
          value={`${Number(convertFromAtto(totalDelegations)).toFixed(
            2
          )} EVMOS`}
        />
        <TopBarItem
          text="Total Unstaked"
          value={`${Number(convertFromAtto(totalUndelegations)).toFixed(
            2
          )} EVMOS`}
        />
        <TopBarItem
          text="Reward Distribution"
          value={
            <Countdown
              epochs={
                epochs > 1000
                  ? epochs + FULL_DAY_MINUS_ONE_SECOND
                  : "Loading..."
              }
            />
          }
        />
        <div className=" ">
          <ConfirmButton
            className="w-fit px-4 text-sm"
            text={
              <div>
                Claim Rewards: <p>{totalRewards.toFixed(2)} EVMOS</p>
              </div>
            }
            onClick={handleConfirmButton}
            disabled={
              !value.active || !totalRewards || totalRewards < 0.005 // insure that small residual is covered
            }
          />
        </div>
      </>
    </TopBarContainer>
  );
};

export default TopBarStaking;
