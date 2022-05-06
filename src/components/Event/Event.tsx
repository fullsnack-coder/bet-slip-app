import { Box, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../store"
import { userbetsToggleSelection } from "../../store/modules/userbets"
import { Event as AppEvent } from "../../types"
import MarketOportunity from "../MarketOportunity"

type Props = {
  event: AppEvent
}

const Event: React.FC<Props> = ({ event }) => {
  const { markets, name } = event
  const dispatch = useAppDispatch()
  const userBets = useAppSelector((state) => state.betsSlip.userBets)

  return (
    <Box border="solid 1px #d5d5d5" mb="20px">
      <Box p="24px 12px" sx={{ borderBottom: 'solid 1px #d5d5d5'}}>
        <Typography textAlign="center">{name}</Typography>
      </Box>
      {markets.map((item) => (
        <MarketOportunity
          key={item.id}
          market={item}
          activeSelectionsIds={userBets.map(({ id }) => id)}
          onToggleMarketSelection={(selection, marketName) =>
            dispatch(
              userbetsToggleSelection({
                bet: { ...selection, marketName },
              })
            )
          }
        />
      ))}
    </Box>
  )
}

export default Event
