import { Box } from "@mui/material";
import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { userbetsRemove } from "../../../store/modules/userbets";
import { UserBet } from "../../../types";
import UserBetItem from "../../UserBetItem";

type Props = {
  emptyListComponent?: React.ReactElement;
};

const BetsSlipContainer: React.FC<Props> = ({ emptyListComponent }) => {
  const userBets = useAppSelector((state) => state.betsSlip.userBets);
  const appDispatch = useAppDispatch();
  const userHasNoBets = userBets.length === 0;

  const handleDeleteBet = useCallback(
    (selection: UserBet) => {
      appDispatch(userbetsRemove(selection));
    },
    [appDispatch]
  );

  return (
    <Box component="main" pt="48px" px="12px" bgcolor="#f1f1f1" height="100%" minWidth="280px">
      {userHasNoBets
        ? emptyListComponent ?? null
        : userBets.map((item) => (
            <UserBetItem
              key={item.id}
              bet={item}
              onTapDeleteButton={handleDeleteBet}
            />
          ))}
    </Box>
  );
};

export default BetsSlipContainer;
