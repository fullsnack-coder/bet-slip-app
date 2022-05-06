import { Box, Button, Card, Typography } from "@mui/material"
import { UserBet } from "../../types"

type Props = {
  bet: UserBet
  onTapDeleteButton?: (selection: UserBet) => void
}

const UserBetItem: React.FC<Props> = ({ bet, onTapDeleteButton }) => {
  const { marketName, name, price } = bet
  return (
    <Card sx={{ minWidth: '280px', p: '12px', mb: '12px' }}>
      <Typography fontWeight="700" textAlign="center" variant="subtitle1" gutterBottom>{name}</Typography>
      <Typography color="#d8d8d8" variant="subtitle2" textAlign="center" gutterBottom>{marketName}</Typography>
      <Typography color="primary" textAlign="center" variant="h3">{price}</Typography>
      <Box display="flex" justifyContent="center" p="12px">
        <Button type="button" variant="contained" onClick={() => onTapDeleteButton?.(bet)}>
          Delete
        </Button>
      </Box>
    </Card>
  )
}

export default UserBetItem
