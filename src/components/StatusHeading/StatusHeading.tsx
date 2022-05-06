import { Box, BoxProps, Typography } from "@mui/material";

type Props = {
  statusText: string | JSX.Element;
} & BoxProps;

const StatusHeading: React.FC<Props> = ({ statusText, ...rest }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" px="22px" flexDirection="column" height="100%" {...rest}>
      {typeof statusText === "string" ? <Typography variant="h4">{statusText}</Typography> : statusText}
    </Box>
  );
};

export default StatusHeading;
