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
    <Box
      component="main"
      pt="48px"
      px="12px"
      bgcolor="#f1f1f1"
      height="100%"
      minWidth="200px"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {userHasNoBets
        ? emptyListComponent ?? null
        : userBets.map((item) => (
          <Box key={item.id}>
            <UserBetItem
              bet={item}
              onTapDeleteButton={handleDeleteBet}
            />
            </Box>
          ))}
    </Box>
  );
};

export default BetsSlipContainer;
