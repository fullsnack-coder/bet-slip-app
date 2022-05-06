import { Typography, Box, Button } from "@mui/material"
import { EventMarket, MarketSelection } from "../../types"

type Props = {
  market: EventMarket
  activeSelectionsIds?: string[]
  onToggleMarketSelection?: (
    selection: MarketSelection,
    marketName: EventMarket["name"]
  ) => void
}

const MarketOportunity: React.FC<Props> = ({
  activeSelectionsIds = [],
  market,
  onToggleMarketSelection,
}) => {
  const { selections, name: marketName } = market

  return (
    <Box p="22px" border="solid 1px #d5d5d5">
      <Typography gutterBottom>{marketName}</Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-between" flexWrap="wrap">
        {selections.map((selection) => (
          <Box key={selection.id} m="6px" flexGrow={0}>
            <Button
              onClick={() => onToggleMarketSelection?.(selection, marketName)}
              variant={
                activeSelectionsIds.includes(selection.id)
                  ? "contained"
                  : "outlined"
              }
            >
              <Box>
                <Typography variant="subtitle1">{selection.name}</Typography>
                <Typography component="p">{selection.price}</Typography>
              </Box>
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default MarketOportunity
