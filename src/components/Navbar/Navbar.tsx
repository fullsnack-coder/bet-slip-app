import { Box, BoxProps } from "@mui/material"

type Props = {
  renderLeft?: JSX.Element
  renderRight?: JSX.Element
  containerProps?: BoxProps
}

const Navbar: React.FC<Props> = ({ renderLeft, renderRight, containerProps }) => {
  return (
    <Box
      component="header"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      p="12px"
      {...containerProps}
    >
      {renderLeft || <span />}
      <Box data-testid="navbar-separator" width="20px" />
      {renderRight || <span />}
    </Box>
  )
}

export default Navbar
